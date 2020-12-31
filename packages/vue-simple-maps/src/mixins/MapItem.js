export default {
  data: () => ({
    isFocused: false,
    isPressed: false,
  }),
  props: {
    styles: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    computedStyle() {
      let state = 'default';
      if (this.isFocused) state = 'hover';
      if (this.isPressed) state = 'pressed';
      return this.styles[state] ? this.styles[state] : this.styles.default;
    },
  },
  methods: {
    onMouseEnter(e) {
      this.isFocused = true;
      this.$emit('mouseenter', e);
    },
    onMouseLeave(e) {
      this.isFocused = false;
      if (this.isPressed) this.isPressed = false;
      this.$emit('mouseleave', e);
    },
    onFocus(e) {
      this.isFocused = true;
      this.$emit('focus', e);
    },
    onBlur(e) {
      this.isFocused = false;
      if (this.isPressed) this.isPressed = false;
      this.$emit('blur', e);
    },
    onMouseDown(e) {
      this.isPressed = true;
      this.$emit('mousedown', e);
    },
    onMouseUp(e) {
      this.isPressed = false;
      this.isFocused = true;
      this.$emit('mouseup', e);
    },
  },
};
