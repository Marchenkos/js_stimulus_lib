import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = [ "template" ]

  connect() {
    this.element[this.identifier] = this
  }
  
  addFields(event) {
    event.preventDefault()
    event.stopPropagation()
    
    const button = event.currentTarget
    const type = button.dataset.fieldType
    const content = button.dataset.content
    const newId = new Date().getTime()
    const regexp = new RegExp('new_' + type, 'g')
    const newContent = content.replace(regexp, newId)
    
    
    button.insertAdjacentHTML('beforebegin', newContent)
  }
  
  removeFields(event) {
    event.preventDefault()
    event.stopPropagation()
    
    const button = event.currentTarget
    button.closest('.fields').remove();
  }
  
  nestFields(event) {
    event.preventDefault()
    event.stopPropagation()
    
    const button = event.currentTarget
    const type = button.dataset.fieldType
    
    const newId = new Date().getTime()
    const idRegexp = new RegExp('new_' + type, 'g')
    const objectName = button.closest('.fields').dataset.objectName
    const sanitizedObjectName = objectName.replace(/\]\[|[^-a-zA-Z0-9:.]/g, '_').replace(/_$/, '')
    let template = this.templateTarget.innerHTML
    template = template.replace(/new_object_name\[/g, objectName + "[")
    template = template.replace(/new_object_name_/, sanitizedObjectName + '_')
    template = template.replace(idRegexp, newId)
    
    button.insertAdjacentHTML('beforebegin', template)
  }
}
