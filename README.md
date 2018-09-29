<div align="center">
  <h1>
    open-browser-webpack-plugin
  </h1>
  <p align="center">
    <a href="https://www.npmjs.org/package/@juexro/open-browser-webpack-plugin">
      <img src="https://img.shields.io/npm/v/@juexro/open-browser-webpack-plugin.svg">
    </a>
  </p>
  <p>Based on webpack4. Auto open browser after compilation has completed.</p>
</div>
<h2 align="left">Usage</h2>

``` bash
# install
yarn add @juexro/open-browser-webpack-plugin -D
```

**webpack.config.js**
```js
const OpenBrowserPlugin = require('@juexro/open-browser-webpack-plugin')
webpack({
  entry: {...},
  output: {...},
  plugins: [
    ...,
    new OpenBrowserPlugin({
      url: ''
    })
  ]
})
```

<h2 align="left">Options</h2>

| Name | Type | Description |
|---------|--------|-------------|
| url          | string |  |
| delay        | number |  |
| browser      | string |  |


<h2 align="left">Change Log</h2>

#### v1.0.1 - 2018-9-29