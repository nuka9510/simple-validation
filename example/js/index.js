import { SValidation } from "@nuka9501/simple-valication";

class Index {
  constructor() {
    this.onValidationCheckClick = this.onValidationCheckClick.bind(this);

    this.init();
  }

  init() {
    document.querySelectorAll('[data-action]').forEach((...arg) => { arg[0].addEventListener('click', this.onValidationCheckClick); });
  }

  onValidationCheckClick(ev) {
    const validation = new SValidation({ regex: { test: /^test/ } }),
    result = document.querySelector('[data-name="result"]');

    validation.run(form);

    console.log(validation.result);

    result.innerHTML = JSON.stringify(validation.result);
  }

}

new Index();