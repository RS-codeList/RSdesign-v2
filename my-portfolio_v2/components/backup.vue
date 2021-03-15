<template>
  <section>
    <h2 data-aos="fade-up">Works</h2>
    <ul class="panel-list">
      <li class="panel-item" v-for="item in items" :key="item.id">
        <input
          class="panel-check"
          type="checkbox"
          aria-hidden="true"
          :id="item.id"
        />
        <label
          class="panel-label"
          :for="item.id"
          role="button"
          data-aos="fade-up"
          :data-aos-delay="300 * (item.id + 1)"
          ><span class="label-inner"
            ><img class="thumbnail" :src="item.p_thum" /></span
        ></label>
        <div class="panel-modal">
          <figure>
            <img :src="item.p_pic" alt="image" />
          </figure>
          <div class="detail">
            <h3>{{ item.p_pic_title }}</h3>
            <p>{{ item.p_pic_skill }}</p>
            <div class="price">{{ item.p_pic_sub }}</div>
            <button class="button">
              <a :href="item.p_site_url" target="_blank">{{
                item.p_site_url
              }}</a>
            </button>
          </div>
        </div>
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
          id: 0,
          p_thum: "still/og_image-1.jpg",
          p_pic: "still/zeisei2021_s.jpg",
          p_pic_title: "税制改正 2021年度 税金の仕組みは何が変わる？｜NHK",
          p_pic_skill: "HTML / CSS / jQuery",
          p_pic_sub:
            "NHK様の税制改正サイトの2021年度版のコーディングを担当しました。",
          p_site_url: "https://www3.nhk.or.jp/news/special/zeisei2021/",
        },
        {
          id: 1,
          p_thum: "still/og_image.jpg",
          p_pic: "still/yosan2021_s.jpg",
          p_pic_title:
            "2021年度予算案 一般会計の総額が過去最大に おさえておきたい数字をチェック｜NHK",
          p_pic_skill: "HTML / CSS / jQuery",
          p_pic_sub:
            "NHK様の来年度予算サイトの2021年度版のコーディングを担当しました。",
          p_site_url: "https://www3.nhk.or.jp/news/special/yosan2021/",
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
}
.panel-list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    300px
  ); //幅を指定しグリッドアイテムを繰り返す
  gap: 50px; //タイルの間隔を指定
}

.panel-label {
  position: relative;
  display: block;
  cursor: pointer;

  &::before {
    position: relative;
    content: "";
    display: inline-block;
    width: 300px;
    height: 300px;
  }

  &::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: rgba(#000, 0.78);
    pointer-events: none;
    opacity: 0;
    transition: all 0.8s ease;
    cursor: zoom-out;
  }

  .label-inner {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 300px;
    height: 300px;
    transition: all 0.8s ease;
    transition-delay: 0.66s;
    transform: perspective(1800px);
  }

  .thumbnail {
    width: 100%;
  }
}

.panel-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90vw;
  height: 90vh;
  min-width: 320px;
  max-width: 1000px;
  max-height: 860px;
  //   transform: translate(-50%, 100vh) rotateY(180deg);
  transform: translate(-50%, -50%) rotateY(180deg);
  background-color: rgba(255, 255, 255, 0.1);
  overflow: auto;
  visibility: hidden;
  opacity: 0;
  transition: all 0.8s ease;
  z-index: 2;

  figure {
    img {
      width: 100%;
      height: auto;
    }
  }

  .detail {
    padding: 15px;
    color: white;
    h3 {
      font-size: 26px;
      margin-bottom: 26px;
    }
    p {
      margin-bottom: 26px;
    }
    .price {
      font-size: 18px;
      margin-bottom: 26px;
    }

    .button {
      font-size: 16px;
      padding: 12px;
      border-radius: 0;
      cursor: pointer;
      background-color: #ececec;
      color: #666;
      transition: transform 0.2s ease;
      &:active {
        transform: scale(0.96);
      }
      &:focus {
        outline: 0;
      }
    }
  }
}

.panel-check {
  display: none;
  &:checked {
    & + .panel-label {
      z-index: 1;
      &::after {
        opacity: 1;
        pointer-events: auto;
        transition-delay: 0.3s;
      }

      .label-inner {
        // transform: perspective(1800px) rotateY(180deg)
        //   translate(50%, calc(100vh + 100%));
        transform: perspective(1800px) rotateY(180deg);
        transition-delay: 0s;
        // width: 90vw;
        // height: 90vh;
        // min-width: 320px;
        width: 300px;
        animation: changePosition 0s;
        animation-delay: 0.8s;
        animation-fill-mode: forwards;
        opacity: 0;
      }
    }
    & ~ .panel-modal {
      visibility: visible;
      opacity: 1;
      transition-delay: 0.66s;
      transform: translate(-50%, -50%) rotateY(0);
    }
  }
}

@keyframes changePosition {
  to {
    position: fixed;
  }
}
</style>