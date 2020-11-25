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
    onMouseEnter() {
      this.isFocused = true;
      this.$emit('mouseenter');
    },
    onMouseLeave() {
      this.isFocused = false;
      if (this.isPressed) this.isPressed = false;
      this.$emit('mouseleave');
    },
    onFocus() {
      this.isFocused = true;
      this.$emit('focus');
    },
    onBlur() {
      this.isFocused = false;
      if (this.isPressed) this.isPressed = false;
      this.$emit('blur');
    },
    onMouseDown() {
      this.isPressed = true;
      this.$emit('mousedown');
    },
    onMouseUp() {
      this.isPressed = false;
      this.isFocused = true;
      this.$emit('mouseup');
    },
  },
};
