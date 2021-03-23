<template>
  <div class="wrapper">
    <Bubble />
    <div
      id="wrapper__inner"
      class="footer_off"
      :class="{ footer_on: footer_active }"
    >
      <MainVisual />
      <About />
      <Works />
      <Contact />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Bubble from "@/components/Bubble.vue";
import MainVisual from "@/components/MainVisual.vue";
import About from "@/components/About.vue";
import Works from "~/components/Works.vue";
import Contact from "@/components/Contact.vue";
import Footer from "~/components/Footer.vue";
import { Element } from "p5";

export default Vue.extend({
  components: {
    Bubble,
    MainVisual,
    About,
    Works,
    Contact,
    Footer,
  },
  data() {
    return {
      contentsWrapper: 0,
      footer_active: false,
      scrollArea: 0,
      scrollPoint: 0,
      scrollEnd: 0,
    };
  },
  methods: {
    getFooterHeight() {
      const footer_height = document.querySelector(".footer")?.clientHeight;
      document.documentElement.style.setProperty(
        "--footer_height",
        `-${footer_height}px`
      );
    },
    scrollCount() {
      const scrollPoint: any = window.pageYOffset;
      console.log(scrollArea);
      console.log(scrollPoint);
      element?.addEventListener("scroll", () => {
        if (scrollPoint - scrollArea === this.scrollEnd) {
          alert("一番下です！");
        }
      });
    },
  },
  mounted() {
    this.contentsWrapper = document.querySelector("#wrapper__inner");
    this.scrollArea = this.contentsWrapper.clientHeight;
    this.getFooterHeight();
    this.scrollCount();
  },
});
</script>

<style lang="scss" scoped>
.footer_off {
  transform: translateY(0);
  translate: transform 1.5s;
}
.footer_on {
  transform: translateY(var(--footer_height));
}
</style>
