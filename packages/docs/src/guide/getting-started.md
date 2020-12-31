# Getting started

## Installation

npm

``` bash
npm install vue-simple-maps
```

yarn

``` bash
yarn add vue-simple-maps
```

CDN

``` html
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/vue@latest/dist/vue.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue-simple-maps@latest/dist/vue-simple-maps.min.js"
    ></script>
  </head>
</html>
```

## Usage

### 1. Install vue plugin

``` js
import Vue from 'vue';
import VueSimpleMaps from 'vue-simple-maps';
Vue.use(VueSimpleMaps);
```

**Nuxt.js** \
Put previouse 👆 code into ~/plugins/vue-simple-maps.js

``` js
// nuxt.config.js
plugins: ['~/plugins/vue-simple-maps.js']
```

### 2. Create component

You can use any TopoJSON/GeoJSON and projection. Find TopoJSON files in [this repo](https://github.com/deldersveld/TopoJSON).

<SourceCode>
  <<< @/src/.vuepress/components/examples/simple.vue
</SourceCode>

Viola

<Demo componentName="examples-simple" />

See more [examples](/examples) or learn [API](/api)
