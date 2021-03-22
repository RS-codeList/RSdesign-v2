<template>
  <div>
    <Bubble />
    <MainVisual />
    <About />
    <Works />
    <Contact />
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

export default Vue.extend({
  components: {
    Bubble,
    MainVisual,
    About,
    Works,
    Contact,
    Footer,
  },
});
</script>
