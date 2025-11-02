[![LICENSE][license]][license-url]
[![GITHUB-VERSION][github-version]][github-version-url]
[![NPM-VERSION][npm-version]][npm-version-url]
![GITHUB-LAST-COMMIT][github-last-commit]
![NPM-LAST-UPDATE][npm-last-update]
![GITHUB-REPO-SIZE][github-repo-size]
![NPM-UNPACKED-SIZE][npm-unpacked-size]
![JSDELIVR-DOWNLOAD][jsdelivr-download]
![NPM-DOWNLOAD][npm-download]
![TOP-LANGUAGE][top-language]

[license]: https://img.shields.io/npm/l/%40nuka9510%2Fsimple-validation
[license-url]: https://github.com/nuka9510/simple-validation/blob/main/LICENSE

[github-version]: https://img.shields.io/github/package-json/v/nuka9510/simple-validation?logo=github
[github-version-url]: https://github.com/nuka9510/simple-validation

[npm-version]: https://img.shields.io/npm/v/%40nuka9510%2Fsimple-validation?logo=npm
[npm-version-url]: https://www.npmjs.com/package/@nuka9510/simple-validation

[github-last-commit]: https://img.shields.io/github/last-commit/nuka9510/simple-validation?logo=github

[npm-last-update]: https://img.shields.io/npm/last-update/%40nuka9510%2Fsimple-validation?logo=npm

[github-repo-size]: https://img.shields.io/github/repo-size/nuka9510/simple-validation?logo=github

[npm-unpacked-size]: https://img.shields.io/npm/unpacked-size/%40nuka9510%2Fsimple-validation?logo=npm

[jsdelivr-download]: https://img.shields.io/jsdelivr/npm/hm/%40nuka9510/simple-validation?logo=jsdelivr

[npm-download]: https://img.shields.io/npm/dm/%40nuka9510%2Fsimple-validation?logo=npm

[top-language]: https://img.shields.io/github/languages/top/nuka9510/simple-validation

## Install

```shell
npm i @nuka9510/simple-validation
```

```html
<script src="https://cdn.jsdelivr.net/npm/@nuka9510/simple-validation/dist/js/index.min.js"> </script>
```

```html
<script src="https://cdn.jsdelivr.net/npm/@nuka9510/simple-validation@latest/dist/js/index.min.js"> </script>
```

```html
<script src="https://cdn.jsdelivr.net/npm/@nuka9510/simple-validation@<specific-version>/dist/js/index.min.js"> </script>
```

```html
<script type="importmap">
  {
    "imports": { "@nuka9510/simple-validation": "https://cdn.jsdelivr.net/npm/@nuka9510/simple-validation/dist/esm/index.min.mjs" }
  }
</script>
```

```html
<script type="importmap">
  {
    "imports": { "@nuka9510/simple-validation": "https://cdn.jsdelivr.net/npm/@nuka9510/simple-validation@latest/dist/esm/index.min.mjs" }
  }
</script>
```

```html
<script type="importmap">
  {
    "imports": { "@nuka9510/simple-validation": "https://cdn.jsdelivr.net/npm/@nuka9510/simple-validation@<specific-version>/dist/esm/index.min.mjs" }
  }
</script>
```

## Usage

- js

```js
const validation = new simpleValidation.Validation({ regex: { test: /^test/ } });

validation.run(form);

console.debug(validation.result);
```

- mjs

```js
import { Validation } from "@nuka9510/simple-validation";

const validation = new Validation({ regex: { test: /^test/ } });

validation.run(form);

console.debug(validation.result);
```

- cjs

```js
const simpleValidation = require('@nuka9510/simple-validation'),
validation = new simpleValidation.Validation({ regex: { test: /^test/ } });

validation.run(form);

console.debug(validation.result);
```