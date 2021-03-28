# vue-simple-maps

![npm bundle size](https://img.shields.io/bundlephobia/minzip/vue-simple-maps)

`vue-simple-maps` is library to easily build SVG maps with Vue, [d3](https://github.com/d3/d3) and [TopoJSON-client](https://github.com/TopoJSON/TopoJSON-client).

[docs](https://vue-simple-maps.netlify.app/guide/) | [examples](https://vue-simple-maps.netlify.app/examples/)

## Features

- Responsive out of the box
- Customize map with any svg objects
- Zoom and drag on all devices
- Automatic transform lightweight TopoJSON to functional GeoJSON

## Installation

npm

```bash
npm install vue-simple-maps
```

yarn

```bash
yarn add vue-simple-maps
```

CDN

```html
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/vue@latest/dist/vue.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue-simple-maps@latest/dist/vue-simple-maps.min.js"></script>
  </head>
</html>
```

## Usage

1. Install vue plugin

```js
import Vue from 'vue';
import VueSimpleMaps from 'vue-simple-maps';
Vue.use(VueSimpleMaps);
```

_Nuxt.js_ \
Put previouse 👆 code into ~/plugins/vue-simple-maps.js

```js
// nuxt.config.js
plugins: ['~/plugins/vue-simple-maps.js'];
```

2. Create component

```html
<template>
  <map v-if="mapData" :data="mapData" :projection="projection">
    <MapFeatures />
  </map>
</template>

<script>
  import { geoEqualEarth } from 'd3-geo';

  export default {
    data: () => ({
      mapData: undefined,
      projection: geoEqualEarth,
    }),
    mounted() {
      // fetch topojson map
      fetch(
        'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json'
      )
        .then((r) => r.json())
        .then((d) => (this.mapData = d));
    },
  };
</script>
```

Viola

<Demo componentName="examples-simple" />

See more [examples](/examples) or learn [API](/api)

## License

MIT licensed. Copyright © 2020 Georgiy Bukharov. See [LICENSE](./LICENSE) for more details.

## Inspired with

[react-simple-maps](https://github.com/zcreativelabs/react-simple-maps)
