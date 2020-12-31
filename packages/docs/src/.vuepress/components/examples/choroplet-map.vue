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
      :transformer="transformer"
      :projection="projection"
      :data="mapData"
    >
      <MapFeatures #default="{features}">
        <MapFeature
          v-for="feature in features"
          :key="feature.id"
          :data="feature"
          :styles="{
            default: {
              fill: feature.color,
              stroke: 'darkslategray'
            },
            hover: {
              fill: feature.color,
              stroke: 'darkslategray',
              opacity: 0.8
            }
          }"
        />
      </MapFeatures>
    </Map>
  </div>
</template>

<script>
import { geoEqualEarth } from 'd3-geo';
import { scaleLinear } from 'd3-scale';
import { extent } from 'd3-array';

export default {
  name: 'ChoropletMap',
  data: () => ({
    mapData: undefined,
    projection: geoEqualEarth,
    loading: true,
    error: false,
    data: undefined,
  }),
  computed: {
    minAndMaxValues() {
      return extent(this.data, (item) => item.value);
    },
    colorScale() {
      return scaleLinear()
        .domain(this.minAndMaxValues)
        .range(['#cbe1d7', '#3eaf7c']);
    },
  },
  async mounted() {
    try {
      await this.fetchData();
      await this.fetchMap();
    } catch (error) {
      this.error = true;
    } finally {
      this.loading = false;
    }
  },
  methods: {
    fetchMap() {
      return fetch('https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json')
        .then((r) => r.json())
        .then((d) => this.mapData = d);
    },
    fetchData() {
      return fetch('/choroplet-data.json')
        .then((r) => r.json())
        .then((d) => this.data = d);
    },
    transformer(features) {
      return features.map((feature) => {
        const country = this.data.find((item) => item.id === feature.id);
        return {
          ...feature,
          color: country ? this.colorScale(country.value) : '#eee',
        };
      });
    },
  },
};
</script>
