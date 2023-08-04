import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = [ "row" ]
  
  connect() {
    console.log("hello2")
  }

  toggle(event) {
    const buttonNode = event.currentTarget;
    const colllapsedClassname = 'sr-only'

    if (buttonNode.getAttribute('data-expanded') == 'true') {
      buttonNode.setAttribute('data-expanded', false);

      this.rowTargets.forEach((rowNode) => rowNode.classList.add(colllapsedClassname))
    } else {
      buttonNode.setAttribute('data-expanded', true);

      this.rowTargets.forEach((rowNode) => rowNode.classList.remove(colllapsedClassname))
    }
  }
}