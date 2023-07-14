import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['input']

  clear(event) {
    event.preventDefault()

    this.inputTargets.forEach(input => {
      input.value = null
    })

    this.element.closest("form").requestSubmit()
  }
}
