# MapZoom

Provides zoom and drag for map via [d3-zoom](https://github.com/d3/d3-zoom)

## Props

### ```zoom```

Type: `Number`\
Default: `1`\
Description: Default zoom scale.\

### ```minZoom```

Type: `Number`\
Default: `1`\
Description: Minimal zoom scale (first element in [scaleExtent](https://github.com/d3/d3-zoom#zoom_scaleExtent) method).

### ```maxZoom```

Type: `Number`\
Default: `8`\
Description: Maximum zoom scale (second element in [scaleExtent](https://github.com/d3/d3-zoom#zoom_scaleExtent) method).

### ```translateExtent```

Type: `Array`\
Default: `undefined` (`[[0, 0], [mapWidth, mapHeight]]` as computed value)\
Description: Borders where zoom is available, lean more in [d3-zoom docs](https://github.com/d3/d3-zoom#zoom_translateExtent).

## Events

Emits [d3-zoom events](https://github.com/d3/d3-zoom#api-reference):

- zoomstart
- zoom
- zoomend

## Examples

- [Zoom and drag](/examples/zoom-and-drag)
- [Bubble map](/examples/bubble-map)
