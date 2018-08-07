# viperSW
viperHTML does Service Worker too, but the code which is responsible for rendering the templates is only 6-7 kB minified (basicHTML+hyperHTML combo wheighs around 150kB).

On top of the bundle size saving, unlike hyperHTML, viperHTML supports async rendering. I personally found this feature useless on the server, but this is what makes viperHTML a prime candidate for [streaming](https://jakearchibald.com/2016/streams-ftw/) from the service worker.

```shell
npm i
npm run build
# for production build
npm run build -- --mode=production
npx serve
```

[Live test](https://laszbalo.github.io/viperSW/) (need a browser that supports ReadableStreams)
