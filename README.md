[![GITHUB][github]][github-url]
[![NPM][npm]][npm-url]

# simple-validation
## Installation
```
npm i @nuka9510/simple-validation
```
## Usage
```
root
├── dist
│  ├── index.js
│  └── validation.js
├── example
│  ├── js
│  │  └── index.js
│  └── view
│     └── index.html
└── node_modules
   └── @nuka9510
      └── js-util
         └── dist
            ├── index.js
            └── util.js
```
* example/js/index.js
```
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
```
* example/view/index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form name="form">
    <input type="text" name="test" data-sv-pattern="test" required="test">
    <button type="button" data-action="validation-check-click">validation-check</button>
  </form>
  <div data-name="result"></div>
</body>
<script type="importmap">
  {
    "imports": {
      "@nuka9510/js-util": "/node_modules/@nuka9510/js-util/dist/index.js",
      "@nuka9501/simple-valication": "/dist/index.js"
    },
    "scopes": {
      "/dist/": { "/dist/validation": "/dist/validation.js" },
      "/node_modules/@nuka9510/js-util/dist/": { "/node_modules/@nuka9510/js-util/dist/util": "/node_modules/@nuka9510/js-util/dist/util.js" }
    }
  }
</script>
<script type="module" src="../js/index.js"></script>
</html>
```

[github]: https://img.shields.io/badge/github-blue.svg?style=flat&logo=github
[github-url]: https://github.com/nuka9510/simple-validation
[npm]: https://img.shields.io/badge/npm-1.0.3-blue.svg?style=flat&logo=nodedotjs
[npm-url]: https://www.npmjs.com/package/@nuka9510/simple-validation