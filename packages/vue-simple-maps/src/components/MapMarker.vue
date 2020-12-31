<template>
  <MapConsumer #default="{ projection }">
    <g
      :transform="getTransform(projection)"
      :style="computedStyle"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
      @mousedown="onMouseDown"
      @mouseup="onMouseUp"
      @click="onMouseUp"
    >
      <slot />
    </g>
  </MapConsumer>
</template>

<script>
import MapItem from '../mixins/MapItem';
import { MapConsumer } from './MapContext';

export default {
  name: 'MapMarker',
  components: {
    MapConsumer,
  },
  mixins: [MapItem],
  props: {
    coordinates: {
      type: Array,
      default: () => [0, 0],
    },
  },
  methods: {
    getTransform(projection) {
      const [x, y] = projection(this.coordinates);
      return `translate(${x}, ${y})`;
    },
  },
};
</script>
