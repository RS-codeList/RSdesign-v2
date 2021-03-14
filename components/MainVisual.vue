<template>
  <section class="c-sectionStyle mainVisual">
    <h1 class="animate__animated animate__fadeInUp animate__delay-1s mainVisual__title">
      <a href="" class="mainVisual__title__inner"><span>RS</span>design</a>
    </h1>
    <a href="#about" class="mainVisual__scrollDown">Scroll</a>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import "animate.css";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.mainVisual{
  &__title{
    text-align: center;
    &__inner{
      text-decoration: none;
      color: $text-color;
      font-size: 4rem;
      @include media(md){
        font-size: 48px;
      }
      &::after {
        content: "WebCreator Sakurai";
        display: block;
        font-size: 2rem;
        @include media(md){
          font-size: 24px;
        }
      }
      >span{
        color: $main-color;
      }
    }
  }
  &__scrollDown{
    position: absolute;
    bottom: 10%;
    font-size: 1.6rem;
  }
}
</style>