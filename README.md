# viperSW
viperHTML does Service Worker too, but the code which is responsible for rendering the templates is only 6-7 kB minified, compared to basicHTML+hyperHTML combo which wheighs around 150kB.

On top of the bundle size saving, unlike hyperHTML, viperHTML supports async rendering, which does not make much sense on the server, but makes viperHTML a prime candidate for [streaming](https://jakearchibald.com/2016/streams-ftw/) from the service worker.

```shell
npm i
npm run build
# for production build
npm run build -- --mode=production
cd dist
npx serve
```

[Live test](https://laszbalo.github.io/viperSW/)(need a browser that supports ReadableStreams)
