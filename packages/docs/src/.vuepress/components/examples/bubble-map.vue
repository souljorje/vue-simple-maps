<template>
  <div>
    <div v-if="loading">
      Loading...
    </div>
    <div v-else-if="error">
      An error occured
    </div>
    <Map
      v-else
      :projection="projection"
      :data="mapData"
    >
      <MapZoom
        :max-zoom="100"
        @zoomend="updateMarkerScale"
      >
        <MapFeatures />
        <g>
          <MapMarker
            v-for="(item, index) in cities"
            :key="index"
            :coordinates="[item.longitude, item.latitude]"
          >
            <circle
              fill="#3eaf7c"
              :r="setSize(item)"
              :transform="`scale(${markerScale})`"
            />
          </MapMarker>
        </g>
      </MapZoom>
    </Map>
  </div>
</template>

<script>

import { geoAlbersUsa } from 'd3-geo';
import { scaleLinear } from 'd3-scale';
import { extent } from 'd3-array';

export default {
  name: 'BubbleMap',
  data: () => ({
    mapData: undefined,
    projection: geoAlbersUsa,
    cities: undefined,
    markerScale: 1,
    currentZoom: 1,
    loading: true,
    error: false,
  }),
  computed: {
    minAndMaxValues() {
      return extent(this.cities, (item) => Number(item.population));
    },
    scale() {
      return scaleLinear()
        .domain(this.minAndMaxValues)
        .range([3, 35]);
    },
  },
  async mounted() {
    try {
      await Promise.all([this.fetchMap(), this.fetchData()]);
    } catch (error) {
      this.error = true;
    } finally {
      this.loading = false;
    }
  },
  methods: {
    updateMarkerScale(e) {
      if (this.currentZoom === e.transform.k) return;
      this.currentZoom = e.transform.k;
      const scale = e.transform.k !== 1
        ? e.transform.k / 2
        : e.transform.k;
      this.markerScale = 1 / scale;
    },
    setSize(item) {
      return this.scale(item.population);
    },
    fetchMap() {
      return fetch('https://raw.githubusercontent.com/deldersveld/topojson/master/countries/united-states/us-albers.json')
        .then((r) => r.json())
        .then((d) => this.mapData = d);
    },
    fetchData() {
      return fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
        .then((r) => r.json())
        .then((d) => this.cities = d);
    },
  },
};

</script>
