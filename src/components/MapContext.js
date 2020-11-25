import { createContext } from '@/utils';

const { Provider: MapProvider, Consumer: MapConsumer, $context: MapContext } = createContext({ providerName: 'MapProvider', consumerName: 'MapConsumer' });

export { MapProvider, MapConsumer, MapContext };
