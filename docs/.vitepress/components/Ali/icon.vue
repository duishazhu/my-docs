<template>
  <i ref="elRef" :class="['iconfont']" :style="getStyle" />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AliIcon",
  components: {},
  props: {
    // icon color/颜色
    color: String,
    // icon大小
    size: {
      type: [String, Number],
      defalut: 16,
    },
  },
  computed: {
    getStyle() {
      return {
        fontSize: this.size + "px",
        color: this.color,
      };
    },
  },
});
</script>
