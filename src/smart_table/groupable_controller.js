import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = [ "row" ]
  
  connect() {}

  toggle(event) {
    const buttonNode = event.currentTarget
    const rowNodes = this.rowTargets.filter(row => this.element.contains(row))
    const colllapsedClassname = 'sr-only'

    if (buttonNode.getAttribute('aria-expanded') == 'true') {
      buttonNode.setAttribute('aria-expanded', 'false')
      rowNodes.forEach((rowNode) => rowNode.classList.add(colllapsedClassname))
    } else {
      buttonNode.setAttribute('aria-expanded', 'true')
      rowNodes.forEach((rowNode) => rowNode.classList.remove(colllapsedClassname))
    }
  }
}