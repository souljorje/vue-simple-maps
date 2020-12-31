<template>
  <div>
    <div style="margin-bottom: 16px">
      <div style="margin-bottom: 4px">
        Link to TopoJSON/GeoJSON file. Find more <a
          href="https://github.com/deldersveld/topojson/"
          target="_blank"
        >here</a>
      </div>
      <input
        v-model="currentMapLink"
        type="text"
        placeholder="Insert link to topojson file"
        style="width: 100%"
        @change="fetchMap"
      >
    </div>
    <div style="margin-bottom: 16px">
      <div style="margin-bottom: 4px">
        Projections from <a
          href="https://github.com/d3/d3-geo"
          target="_blank"
        >d3-geo</a> & <a
          href="https://github.com/d3/d3-geo-projection"
          target="_blank"
        >d3-geo-projection</a>
      </div>
      <select
        name="projections"
        :value="currentProjectionIndex"
        @change="setProjection"
      >
        <option
          v-for="(projection, index) in projections"
          :key="index"
          :value="index"
        >
          {{ projection.name }}
        </option>
      </select>
    </div>
    <Map
      v-if="mapData && projections"
      :data="mapData"
      :projection="currentProjection"
    >
      <MapFeatures />
    </Map>
  </div>
</template>

<script>
import { Runtime } from '@observablehq/runtime';
import notebook from '@d3/projection-comparison';

export default {
  data: () => ({
    mapData: undefined,
    projections: undefined,
    currentProjectionIndex: 0,
    currentMapLink: 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json',
  }),
  computed: {
    currentProjection() {
      return this.projections[this.currentProjectionIndex].value;
    },
  },
  async mounted() {
    this.fetchProjections();
    this.fetchMap();
  },
  methods: {
    async fetchProjections() {
      const module = new Runtime().module(notebook);
      const value = await module.value('projections');
      this.projections = value;
    },
    fetchMap() {
      fetch(this.currentMapLink)
        .then((r) => r.json())
        .then((d) => this.mapData = d);
    },
    setProjection(e) {
      this.currentProjectionIndex = Number(e.target.value);
    },
  },
};
</script>
