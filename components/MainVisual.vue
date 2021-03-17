<template>
  <section class="c-sectionStyle mainVisual">
    <h1
      class="animate__animated animate__fadeInUp animate__delay-1s mainVisual__title"
    >
      <a href="" class="mainVisual__title__inner"><span>RS</span>design</a>
    </h1>
    <a href="#about" class="mainVisual__scrollDown" id="scrollDown">Scroll</a>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import "animate.css";

export default Vue.extend({
  mounted(){
    const a = document.querySelector("#scrollDown");
    a?.addEventListener('click',(e:any) => {
      e.preventDefault();
      const targetId = e.target.hash;
      const target = document.querySelector(targetId);
      target.scrollIntoView({ behavior: "smooth" });
    });
  }
});
</script>

<style lang="scss" scoped>
.mainVisual {
  &__title {
    text-align: center;
    &__inner {
      font-size: 4rem;
      @include media(md) {
        font-size: 48px;
      }
      &::after {
        content: "WebCreator Sakurai";
        display: block;
        font-size: 2rem;
        @include media(md) {
          font-size: 24px;
        }
      }
      > span {
        color: $main-color;
      }
    }
  }
  &__scrollDown {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    position: absolute;
    bottom: 10%;
    font-size: 1.6rem;
    animation: fadeAnimation 1.5s linear infinite;
    @include media(md) {
      font-size: 16px;
    }
    &::before {
      content: "";
      display: block;
      border: solid 1px $text-color;
      border-top: none;
      border-right: none;
      width: 1.6rem;
      height: 1.6rem;
      transform: rotateZ(-45deg);
      margin-bottom: 3.5rem;
      animation: rollAnimation 1.5s linear infinite;
      @include media(md) {
        width: 16px;
        height: 16px;
        margin-bottom: 35px;
      }
    }
  }
}
</style>