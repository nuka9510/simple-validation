import { Validation } from "@nuka9510/simple-validation";

class Index {
  constructor() {
    this.onValidationCheckClick = this.onValidationCheckClick.bind(this);

    this.init();
  }

  init() {
    document.querySelectorAll('[data-action="validation-check-click"]').forEach((...arg) => { arg[0].addEventListener('click', this.onValidationCheckClick); });
  }

  onValidationCheckClick(ev) {
    const validation = new Validation({ regex: { test: /^test/ } }),
    result = document.querySelector('[data-name="result"]');

    validation.run(form);

    console.log(validation.result);

    result.innerHTML = JSON.stringify(validation.result);
  }

}

new Index();