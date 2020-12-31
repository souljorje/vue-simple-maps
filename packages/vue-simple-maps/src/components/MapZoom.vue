<template>
  <g
    ref="container"
    class="vsm-zoom"
  >
    <slot />
  </g>
</template>

<script>
import { zoom as d3Zoom } from 'd3-zoom';
import { select as d3Select } from 'd3-selection';

import { MapContext } from './MapContext';

export default {
  name: 'MapZoom',
  inject: {
    mapContext: MapContext,
  },
  props: {
    center: {
      type: Array,
      default: () => [0, 0],
    },
    zoom: {
      type: Number,
      default: 1,
    },
    minZoom: {
      type: Number,
      default: 1,
    },
    maxZoom: {
      type: Number,
      default: 8,
    },
    translateExtent: {
      type: Array,
      default: undefined,
    },
  },
  computed: {
    context() {
      return this.mapContext();
    },
    computedTranslateExtent() {
      return this.translateExtent || [[0, 0], [this.context.width, this.context.height]];
    },
    zoomFunction() {
      return d3Zoom()
        .scaleExtent([this.minZoom, this.maxZoom])
        .translateExtent(this.computedTranslateExtent)
        .on('start', this.onZoomStart)
        .on('zoom', this.onZoom)
        .on('end', this.onZoomEnd);
    },
  },
  mounted() {
    this.setDefaultPosition();
    this.setup();
  },
  methods: {
    setDefaultPosition() {
      const [x, y] = this.center;
      this.$refs.container.setAttribute('transform', `translate(${x},${y}) scale(${this.zoom})`);
    },
    setup() {
      d3Select(this.$parent.$vnode.elm)
        .call(this.zoomFunction);
    },
    onZoomStart(e) {
      this.$emit('zoomstart', e);
    },
    onZoom(e) {
      this.$refs.container.setAttribute('transform', e.transform.toString());
      this.$emit('zoom', e);
    },
    onZoomEnd(e) {
      this.$emit('zoomend', e);
    },
  },
};
</script>

<style lang="css">
  .vsm-zoom path {
    vector-effect: non-scaling-stroke;
  }
</style>
