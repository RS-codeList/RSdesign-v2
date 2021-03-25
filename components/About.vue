<template>
  <section id="about" class="c-sectionStyle about">
    <h2 class="about__title">About</h2>
    <div class="about__profile">
      <figure data-aos="fade-up" class="about__profile__pic">
        <img src="still/my_face.jpg" alt="">
      </figure>
      <dl class="about__profile__inner">
        <dt data-aos="fade-up">Ryousuke Sakurai</dt>
        <dd data-aos="fade-up">専門商社で営業職を経て、Web業界に転職。<br>現在、某報道局にてWebサイトのコーディングを主に担当しております。</dd>
      </dl>
    </div>
    <ul v-if="windowWidth >= 600" class="about__list">
      <li v-for="item in items" :key="item.id" class="about__list__item">
        <figure :data-aos="item.aos">
          <img :src="item.pic" :alt="item.alt" />
        </figure>
        <dl data-aos="fade-up">
          <dt>{{ item.heading }}</dt>
          <dd v-html="item.description"></dd>
        </dl>
      </li>
    </ul>
    <ul v-else class="about__list">
      <li v-for="item in items" :key="item.id" class="about__list__item">
        <h3 data-aos="fade-up">{{ item.heading }}</h3>
        <figure data-aos="fade-up">
          <img :src="item.pic" :alt="item.alt" />
        </figure>
        <p data-aos="fade-up" v-html="item.description"></p>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      windowWidth: 0,
      items: [
        {
          pic: "still/coding.jpg",
          alt: "CODING",
          aos: "flip-left",
          heading: "CODING",
          description:
            "Vue.js/JavaScript/HTML/CSS<br class='sp_on'>などが使えます。",
        },
        {
          pic: "still/swim.jpg",
          alt: "SWIMMING",
          aos: "flip-up",
          heading: "SWIMMING",
          description:
            "週一ペースで通ってます。<br class='sp_on'>クロールが得意です。",
        },
        {
          pic: "still/bike.jpg",
          alt: "TOURING",
          aos: "flip-right",
          heading: "TOURING",
          description:
            "z900rs cafeのライムグリーン<br class='sp_on'>に乗ってます。",
        },
      ],
    };
  },
  methods: {
    discriminationMedia() {
      this.windowWidth = window.innerWidth;
    },
  },
  mounted() {
    this.discriminationMedia();
    window.addEventListener("resize", this.discriminationMedia);
  },
});
</script>

<style lang="scss" scoped>
.about {
  height: fit-content;
  &__profile{
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 0 12px;
    @include media(md) {
      // flex-flow: row nowrap;
      width: 600px;
      margin: 0 auto;
      padding: 0;
    }
    &__pic{
      width: 100%;
      text-align: center;
      @include media(md){
        width: auto;
      }
      > img{
        vertical-align: middle;
        border-radius: 50%;
        width: 45%;
        height: 45%;
        @include media(md){
          width: 150px;
          height: 150px;
        }
      }
    }
    &__inner{
      margin-top: 8px;
      text-align: justify;
      @include media(md){
        margin-top: 12px;
        margin-left: 24px;
      }
      >dt{
        font-size: 2rem;
        text-align: center;
        @include media(md){
          font-size: 24px;
        }
      }
      >dd{
        margin-top: 8px;
        font-size: 1.4rem;
        @include media(md){
          font-size: 16px;
          margin-top: 12px;
        }
      }
    }
  }
  &__list {
    margin-top: 28px;
    padding: 0 12px;
    @include media(md) {
      padding: 0;
      margin-top: 48px;
    }
    &__item {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      @include media(md) {
        flex-flow: row wrap;
      }
      &:nth-child(even) {
        @include media(md) {
          flex-direction: row-reverse;
        }
      }
      & + li {
        margin-top: 28px;
        @include media(md){
          margin-top: 48px;
        }
      }
      > h3 {
        font-size: 2.4rem;
      }
      > figure {
        flex: 0 0 50%;
        margin-top: 14px;
        @include media(md) {
          margin-top: 0;
        }
        > img {
          width: 100%;
        }
      }
      > p {
        font-size: 1.6rem;
        margin-top: 14px;
        text-align: center;
      }
      > dl {
        flex: 0 0 50%;
        color: $text-color;
        text-align: center;
        > dt {
          @include media(md) {
            font-size: 24px;
            margin-top: 0;
          }
        }
        > dd {
          @include media(md) {
            font-size: 16px;
            margin-top: 12px;
          }
        }
      }
    }
  }
}
</style>