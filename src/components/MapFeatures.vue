<template>
  <MapConsumer #default="{features}">
    <g>
      <slot :features="features">
        <MapFeature
          v-for="(feature, index) in features"
          :key="feature[idKey] || index"
          :data="feature"
          :fill="fill"
          :stroke="stroke"
        />
      </slot>
    </g>
  </MapConsumer>
</template>

<script>
import MapFeature from './MapFeature';
import { MapConsumer } from './MapContext';

export default {
  name: 'MapFeatures',
  components: {
    MapFeature,
    MapConsumer,
  },
  props: {
    idKey: {
      type: String,
      default: 'id',
    },
    fill: {
      type: String,
      default: 'lightgray',
    },
    stroke: {
      type: String,
      default: '#fff',
    },
  },
};
</script>
