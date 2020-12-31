<template>
  <MapConsumer #default="{ path }">
    <path
      :d="path(data)"
      :style="computedStyle"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
      @mousedown="onMouseDown"
      @mouseup="onMouseUp"
      @click="onMouseUp"
    />
  </MapConsumer>
</template>

<script>
import { MapConsumer } from './MapContext';
import MapItem from '../mixins/MapItem';

export default {
  name: 'MapFeature',
  components: {
    MapConsumer,
  },
  mixins: [MapItem],
  props: {
    data: {
      type: Object,
      default: undefined,
    },
  },
};
</script>
