<template>
  <Map
    :data="worldMap"
    :projection="projection"
  >
    <MapFeatures />
  </Map>
</template>

<script>
import { geoMiller } from 'd3-geo-projection';

export default {
  data: () => ({
    worldMap: undefined,
    projection: geoMiller,
  }),
  mounted() {
    // fetch topojson map
    fetch('https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries-sans-antarctica.json')
      .then((r) => r.json())
      .then((d) => this.worldMap = d);
  },
};
</script>
