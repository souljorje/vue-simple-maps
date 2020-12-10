# Getting started

## Installation

npm
```
npm install vue-simple-maps d3-geo-projection
```

yarn
```
yarn add vue-simple-maps d3-geo-projection
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

1. Install vue plugin

``` js
import Vue from 'vue';
import VueSimpleMaps from '@/main';
Vue.use(VueSimpleMaps);
```

Nuxt.js \
Put previouse 👆 code into ~/plugins/vue-simple-maps.js
``` js
// nuxt.config.js
plugins: ['~/plugins/vue-simple-maps.js']
```

2. Create component\
You can use any topojson and projection. Find topojson files in [this repo](https://github.com/deldersveld/topojson), see projections in [examples](/examples/projections).

<SourceCode>
  <<< @/docs/.vuepress/components/examples/simple.vue
</SourceCode>

Viola

<Demo componentName="examples-simple" />

See more [examples](/examples) or learn [API](/api)