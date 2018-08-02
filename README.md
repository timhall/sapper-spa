# sapper-spa

`sapper-spa` is a special target for sapper that skips server-side rendering and exports a single, static index.html.
It retains sapper's built-in routing, code-splitting, and build system, but is designed for single-page apps that are exported as static sites.
Examples of when this could be useful is for are when `preload` includes user-specific queries, Electron apps,
and generally apps (rather than sites) that you'd like to export statically.

## Usage

Install as dependency, there is an extremely minimal runtime:

```
npm install sapper-spa
# or yarn add sapper-spa
```

Update `webpack/server.config.js` to replace `svelte-loader` with `sapper-spa/loader`:

```js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          // Replace svelte-loader
          loader: 'sapper-spa/loader'
          options: {
            css: false,
            generate: 'ssr'
          }
        }
      }
    ]
  }
};
```

Add `sapper-spa/runtime` to `app/client.js`:

```js
import { init } from 'sapper/runtime.js';
import { manifest } from './manifest/client.js';
import '../../runtime';

// ...
```

That's it! All of the sapper commands (`dev`, `build`, `export`) behave normally and the generated `index.html` is ready for single-page applications.
