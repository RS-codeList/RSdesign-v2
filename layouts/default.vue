<template>
  <Nuxt />
</template>

<script>
export default {
  methods: {
    resize_height() {
      // 最初に、ビューポートの高さを取得し、0.01を掛けて1%の値を算出して、vh単位の値を取得
      let vh = window.innerHeight;
      // カスタム変数--vhの値をドキュメントのルートに設定
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      console.log(vh);
    },
  },
  mounted() {
    this.resize_height();
    // window.addEventListener("resize", this.resize_height());
  },
};
</script>