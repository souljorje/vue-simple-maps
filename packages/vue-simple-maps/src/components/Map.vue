<template>
  <MapProvider :value="value">
    <svg
      :view-box.camel="`0 0 ${width} ${height}`"
      v-bind="$attrs"
      width="100%"
      height="100%"
      v-on="$listeners"
    >
      <slot />
    </svg>
  </MapProvider>
</template>

<script>
import { geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import { isNumber } from '../utils';
import { MapProvider } from './MapContext';

const defaultProjectionConfig = {
  center: [],
  rotate: [],
  scale: null,
};

const makeProjection = ({
  width,
  height,
  config = defaultProjectionConfig,
  projection,
  geoJson,
}) => {
  const [cx, cy] = config.center;
  const [rx, ry, rz] = config.rotate;
  const center = isNumber(cx) || isNumber(cy) ? [cx, cy] : null;
  const rotate = isNumber(rx) || isNumber(ry) ? [rx, ry, rz] : null;
  const { scale } = config;

  const projectionConfig = {
    center,
    rotate,
    scale,
  };

  if (geoJson) projectionConfig.fitSize = [[width, height], geoJson];
  else projectionConfig.translate = [[width / 2, height / 2]];

  const mapProjection = projection();

  Object.entries(projectionConfig).forEach(([modifier, arg]) => {
    if (!modifier) return;
    if (!mapProjection[modifier]) return;
    mapProjection[modifier](...(arg || [mapProjection[modifier]()]));
  });

  return mapProjection;
};

function getFeatures(geoData, transformer) {
  if (!geoData) return undefined;
  const isTopojson = geoData.type === 'Topology';
  const geoJson = isTopojson ? feature(
    geoData,
    geoData.objects[Object.keys(geoData.objects)[0]],
  ) : geoData;

  const features = transformer ? transformer(geoJson.features) : geoJson.features;
  return { features, geoJson };
}

export default {
  name: 'Map',
  components: {
    MapProvider,
  },
  props: {
    width: {
      type: Number,
      default: 800,
    },
    height: {
      type: Number,
      default: 600,
    },
    projection: {
      type: Function,
      default: undefined,
    },
    projectionConfig: {
      type: Object,
      default: undefined,
    },
    data: {
      type: Object,
      default: undefined,
    },
    transformer: {
      type: Function,
      default: undefined,
    },
  },
  computed: {
    parsedData() {
      return getFeatures(this.data, this.transformer) || {};
    },
    mapProjection() {
      const {
        projectionConfig,
        projection,
        width,
        height,
      } = this;
      const { geoJson } = this.parsedData;
      return makeProjection({
        config: projectionConfig,
        projection,
        width,
        height,
        geoJson,
      });
    },
    value() {
      const {
        mapProjection,
        width,
        height,
      } = this;
      const { features } = this.parsedData;
      const path = geoPath().projection(this.mapProjection);
      return {
        projection: mapProjection,
        width,
        height,
        features,
        path,
      };
    },
  },
};
</script>
