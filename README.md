## This repo reproduces a bug with vue-test-utils where `mocks` doesn't work for child components

`src/App.vue` and `src/components/HelloWorld.vue` both depend on the `$mq` global from `vue-match-media` which is installed in `src/main.js`

The test mock in `src/App.test.js` works for `App.vue` but not for `<HelloWorld>` as a child of `App.vue`

``` bash
# install dependencies
npm install

# see failing test (src/App.test.js)
npm test
```

