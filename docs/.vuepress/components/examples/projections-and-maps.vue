<template>
  <div>
    <div style="margin-bottom: 16px">
      <div style="margin-bottom: 4px">
        Link to topojson file
      </div>
      <input
        v-model="currentTopojsonLink"
        type="text"
        placeholder="Insert link to topojson file"
        style="width: 100%"
        @change="fetchMap"
      >
    </div>
    <div style="margin-bottom: 16px">
      <div style="margin-bottom: 4px">
        Projections from <a
          href="https://github.com/d3/d3-geo-projection"
          target="_blank"
        >d3-geo-projection</a>
      </div>
      <select
        name="projections"
        :value="currentProjectionKey"
        @change="setProjection"
      >
        <option
          v-for="(value, key) in projections"
          :key="key"
        >
          {{ key }}
        </option>
      </select>
    </div>
    <Map
      :data="worldMap"
      :projection="currentProjection"
    >
      <MapFeatures />
    </Map>
  </div>
</template>

<script>
import * as d3GeoProjections from 'd3-geo-projection';

const ignoreRegex = /^(?!(geoModifiedStereographic|geoProject|geoQuincuncial|geoTwoPointAzimuthal|geoPolyhedral|geoStitch|geoTwoPointAzimuthal|geoTwoPointEquidistant|geoChamberlin)$).*/;

const projections = Object.keys(d3GeoProjections).reduce((acc, item) => {
  if (!item.toLowerCase().includes('raw') && ignoreRegex.test(item)) {
    acc[item] = d3GeoProjections[item];
  }
  return acc;
}, {});

const firstProjectionKey = Object.keys(projections)[0];

export default {
  data: () => ({
    worldMap: undefined,
    projections,
    currentProjectionKey: firstProjectionKey,
    currentTopojsonLink: 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries-sans-antarctica.json',
  }),
  computed: {
    currentProjection() {
      return projections[this.currentProjectionKey];
    },
  },
  mounted() {
    // fetch topojson map
    fetch('https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries-sans-antarctica.json')
      .then((r) => r.json())
      .then((d) => this.worldMap = d);
  },
  methods: {
    fetchMap() {
      fetch(this.currentTopojsonLink)
        .then((r) => r.json())
        .then((d) => this.worldMap = d);
    },
    setProjection(e) {
      this.currentProjectionKey = e.target.value;
    },
  },
};
</script>
