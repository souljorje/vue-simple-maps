<template>
  <Map
    v-if="mapData"
    :data="mapData"
    :projection="projection"
  >
    <MapFeatures />
  </Map>
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
    fetch('https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json')
      .then((r) => r.json())
      .then((d) => this.mapData = d);
  },
};
</script>
