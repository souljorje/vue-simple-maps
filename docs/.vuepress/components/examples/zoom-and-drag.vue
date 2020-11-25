<template>
  <Map :data="worldMap">
    <MapZoom @zoomend="updateMarkerScale">
      <MapFeatures />
      <MapMarker
        v-for="(item, index) in cities"
        :key="index"
        :coordinates="[item.lon, item.lat]"
      >
        <g :transform="`scale(${markerScale})`">
          <text
            font-size="16"
            y="-6"
            text-anchor="middle"
          >{{ item.city }}</text>
          <circle
            fill="red"
            r="3"
          />
        </g>
      </MapMarker>
    </MapZoom>
  </Map>
</template>

<script>
import worldMap from '@/maps/world-countries-sans-antarctica.json';

const cities = [{
  city: 'Minsk',
  lon: 27.34,
  lat: 53.54,
}, {
  city: 'Dili',
  lon: 125.36,
  lat: -8.35,
}, {
  city: 'Dushanbe',
  lon: 68.48,
  lat: 38.35,
}, {
  city: 'Guatemala City',
  lon: -90.31,
  lat: 14.37,
}, {
  city: 'Malabo',
  lon: 8.47,
  lat: 3.45,
}, {
  city: 'Tokyo',
  lon: 139.45,
  lat: 35.41,
}, {
  city: 'Georgetown',
  lon: -58.1,
  lat: 6.48,
}];

export default {
  data: () => ({
    worldMap,
    cities,
    markerScale: 1,
    currentZoom: 1,
  }),
  methods: {
    updateMarkerScale(e) {
      if (this.currentZoom === e.transform.k) return;
      this.currentZoom = e.transform.k;
      this.markerScale = 1 / e.transform.k;
    },
  },
};
</script>
