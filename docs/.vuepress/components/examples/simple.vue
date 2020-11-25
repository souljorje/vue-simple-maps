<template>
  <Map :data="worldMap">
    <MapFeatures />
  </Map>
</template>

<script>
import worldMap from '@/maps/world-countries-sans-antarctica.json';

export default {
  data: () => ({
    worldMap,
  }),
};
</script>
