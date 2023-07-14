import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = []

  connect() {
    const recordsTotalElement = this.element.querySelector('.pagy-info b:nth-child(2)')
    if (recordsTotalElement) {
      const recordsTotal = Number(recordsTotalElement.innerText)
      recordsTotalElement.innerText = recordsTotal.toLocaleString()
    }
  }
}