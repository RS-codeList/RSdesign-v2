<template>
  <section id="about">
    <h2 data-aos="fade-up">About</h2>
    <ul>
      <li v-for="item in items" :key="item.id">
        <figure :data-aos="item.aos">
          <img :src="item.pic" :alt="item.alt" />
        </figure>
        <dl data-aos="fade-up">
          <dt>{{ item.heading }}</dt>
          <dd>{{ item.description }}</dd>
        </dl>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      items: [
        {
          pic: "still/coding.jpg",
          alt: "CODING",
          aos: "flip-left",
          heading: "CODING",
          description: "Vue.js/JavaScript/HTML/CSSなどが使えます。",
        },
        {
          pic: "still/swim.jpg",
          alt: "SWIMMING",
          aos: "flip-up",
          heading: "SWIMMING",
          description: "週一ペースで通ってます。クロールが得意です。",
        },
        {
          pic: "still/bike.jpg",
          alt: "TOURING",
          aos: "flip-right",
          heading: "TOURING",
          description: "z900rs cafeのライムグリーンに乗ってます。",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "~assets/scss/_media.scss";
section {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  @include media(md) {
    width: 1000px;
    margin: 0 auto;
  }
}
h2 {
  margin: 64px auto;
  font-size: min(14vw, 3rem);
  color: white;
  @include media(md){
    font-size: 36px;
  }
}
ul{
  padding: 0 12px;
  @include media(md){
    padding: 0;
  }
}
li {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  @include media(md){
    flex-flow: row wrap;
  }
  &:nth-child(2) {
    @include media(md){
      flex-direction: row-reverse;
    }
  }
  & + li {
    margin-top: 64px;
  }
  > figure {
    flex: 0 0 50%;
    > img {
      width: 100%;
    }
  }
  > dl {
    color: white;
    flex: 0 0 50%;
    text-align: center;
    > dt {
      font-size: min(14vw, 2rem);
      margin-top: 12px;
      @include media(md){
        font-size: 24px;
        margin-top: 0;
      }
    }
    > dd {
      font-size: min(14vw, 1rem);
      margin-top: 12px;
      @include media(md){
        font-size: 16px;
      }
    }
  }
}
</style>