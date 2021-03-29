<template>
  <Nuxt />
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      vh: 0 as number,
    };
  },
  methods: {
    window_height() {
      this.vh = window.innerHeight; //viewportの高さを取得
      document.documentElement.style.setProperty("--vh", `${this.vh}px`); //scssの変数に代入
    },
  },
  mounted() {
    this.window_height();
  },
});
</script>