<template>
  <section class="c-sectionStyle">
    <h1 class="animate__animated animate__fadeInUp animate__delay-1s">
      <a href=""><span>RS</span>design</a>
    </h1>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import "animate.css";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
@import "~assets/scss/_media.scss";
section {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @include media(md) {
    width: 1000px;
    margin: 0 auto;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 15%;
    left: 50%;
    width: 16px;
    height: 16px;
    margin-left: -8px;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    transform: rotate(-45deg);
    animation: sdb 1.5s infinite;
    box-sizing: border-box;
    @include media(md){
      width: 24px;
      height: 24px;
      margin-left: -12px;
    }
  }
  &::after {
    content: "Scroll";
    color: white;
    position: absolute;
    bottom: 8%;
    left: 50%;
    transform: translateX(-50%);
    font-size: min(14vw, 1rem);
    @include media(md){
      font-size: 16px;
    }
  }
}

h1 {
  text-align: center;
  > a {
    text-decoration: none;
    font-size: min(14vw, 4rem);
    color: white;
    @include media(md){
      font-size: 48px;
    }
    > span {
      color: #00479d;
    }
    &::after {
      content: "WebCreator Sakurai";
      display: block;
      font-size: min(14vw, 2rem);
      @include media(md){
        font-size: 24px;
      }
    }
  }
}

@keyframes sdb {
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
</style>