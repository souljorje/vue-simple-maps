export const isString = (s) => typeof (s) === 'string' || s instanceof String;
export const isNumber = (n) => typeof n === 'number';
export const isFunction = (f) => typeof f === 'function';

// Based on https://github.com/leoyli/vue-create-context
export const createContext = ({
  providerName = 'Provider',
  consumerName = 'Consumer',
  defaultValue,
} = {}) => {
  const $key = Symbol('Context key');
  const $context = {
    from: $key,
    default: () => () => (
      defaultValue instanceof Object
        ? ({ ...defaultValue })
        : { value: defaultValue }
    ),
  };
  return {
    Provider: {
      name: providerName,
      props: ['value'],
      provide() {
        return { [$key]: () => this.value };
      },
      render() {
        return this.$slots.default;
      },
    },
    Consumer: {
      name: consumerName,
      functional: true,
      inject: {
        value: $context,
      },
      render: (h, contexts) => contexts.scopedSlots.default(contexts.injections.value()),
    },
    $context,
  };
};

export const get = (url) => fetch(url)
  .then((res) => {
    if (!res.ok) {
      throw Error(res.statusText);
    }
    return res.json();
  }).catch((error) => {
    console.log('[vue-simple-maps] There was a problem when fetching the data: ', error);
  });
