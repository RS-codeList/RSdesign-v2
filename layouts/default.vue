<template>
  <Nuxt />
</template>

<script>
export default {
  data() {
    return {
      vh: null,
    };
  },
  methods: {
    resize_height() {
      // 最初に、ビューポートの高さを取得し、0.01を掛けて1%の値を算出して、vh単位の値を取得
      this.vh = window.innerHeight;
      // カスタム変数--vhの値をドキュメントのルートに設定
      document.documentElement.style.setProperty("--vh", `${this.vh}px`);
      console.log(this.vh);
    },
  },
  mounted() {
    this.resize_height();
    //ビューポートの高さが変わったときに変更
    // window.addEventListener("resize", () => {this.resize_height()});
  },
};
</script>