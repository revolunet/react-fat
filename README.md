# react-fat

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]

Responsive FAT texts component. Takes the whole available width.

⚠️ doesnt work on Firefox at the moment (cf [Zoom property support](https://developer.mozilla.org/fr/docs/Web/CSS/zoom))

## Usage

```js
import Fat from 'react-fat'

const quote = `
LE RAP
C'ETAIT
MIEUX
AVANT
`

const Demo = () => <Fat>{quote}</Fat>

```

See demo : http://revolunet.github.io/react-fat

![demo](./demo.png)

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
