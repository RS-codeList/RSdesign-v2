<template>
  <section id="about" class="c-sectionStyle about">
    <h2 class="about__title">About</h2>
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
  &__list {
    padding: 0 12px;
    @include media(md) {
      padding: 0;
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
        margin-top: 48px;
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