<template>
  <section id="works" class="c-sectionStyle works">
    <h2 class="works__title">Works</h2>
    <ul class="panel-list">
      <li
        class="panel-item"
        v-for="item in items"
        :key="item.id"
        @click="openModal(item)"
        data-aos="fade-up"
      >
        <figure class="panel-inner" :class="{ 'panel-fade': item.active }">
          <img class="panel-thumbnail" :src="item.m_thum" />
        </figure>
      </li>
    </ul>
    <transition name="modal-fade" mode="out-in">
      <Modal :val="postItem" v-if="showModal" @close="closeModal" />
    </transition>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Modal from "./Modal.vue";
import { Item } from "../models/item";

export default Vue.extend({
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false as boolean,
      postItem: {} as Item,
      body: {} as HTMLBodyElement,
      items: [
        {
          id: 0,
          active: false,
          m_thum: "still/og_image-1.jpg",
          m_pic_pc: "still/zeisei2021_s.jpg",
          m_pic_sp: "still/zeisei2021_s_sp.jpg",
          m_pic_title:
            "税制改正 2021年度 税金の<br class='sp_on'>仕組みは何が変わる？｜NHK",
          m_pic_skill: "HTML / CSS / JavaScript",
          m_site_url: "https://www3.nhk.or.jp/news/special/zeisei2021/",
        } as Item,
        {
          id: 1,
          active: false,
          m_thum: "still/og_image-2.jpg",
          m_pic_pc: "still/yosan2021_s.jpg",
          m_pic_sp: "still/yosan2021_s_sp.jpg",
          m_pic_title:
            "2021年度予算案 <br class='sp_on'>一般会計の総額が過去最大に <br>おさえておきたい<br class='sp_on'>数字をチェック｜NHK",
          m_pic_skill: "HTML / CSS / JavaScript",
          m_site_url: "https://www3.nhk.or.jp/news/special/yosan2021/",
        } as Item,
        {
          id: 2,
          active: false,
          m_thum: "still/og_image-3.jpg",
          m_pic_pc: "still/shinsai_portal_s.jpg",
          m_pic_sp: "still/shinsai_portal_s_sp.jpg",
          m_pic_title:
            "被災地の声 被災者アンケート<br class='sp_on'>｜NHK NEWS WEB",
          m_pic_skill: "HTML / CSS / JavaScript",
          m_site_url:
            "https://www3.nhk.or.jp/news/special/shinsai-portal/10/questionnaire/",
        } as Item,
        {
          id: 3,
          active: false,
          m_thum: "still/og_image-4.jpg",
          m_pic_pc: "still/japan-us_s.jpg",
          m_pic_sp: "still/japan-us_s_sp.jpg",
          m_pic_title:
            "日米首脳会談 <br class='sp_on'>最新ニュース一覧 <br>菅首相 バイデン大統領<br class='sp_on'>｜NHK NEWS WEB",
          m_pic_skill: "HTML / CSS / JavaScript",
          m_site_url:
            "https://www3.nhk.or.jp/news/special/japan-us_summit-meeting_202104/",
        } as Item,
      ],
    };
  },
  methods: {
    openModal(item: Item): string {
      this.postItem = item;
      this.showModal = true;
      this.postItem.active = true;
      this.body = document.querySelector("body") as HTMLBodyElement;
      return (this.body.style.overflow = "hidden");
    },
    closeModal(): string {
      this.showModal = false;
      this.postItem.active = false;
      return (this.body.style.overflow = "visible");
    },
  },
});
</script>

<style lang="scss" scoped>
.works {
  height: fit-content;
  @include media(md) {
    min-height: 0;
  }
}

.panel {
  &-list {
    width: 100%;
    padding: 0 12px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    @include media(md) {
      padding: 0;
      display: grid; //グリッドを指定
      grid-template-columns: repeat(
        auto-fill,
        300px
      ); //幅を指定しグリッドアイテムを繰り返す
      gap: 50px; //タイルの間隔を指定
    }
  }
  &-item {
    cursor: pointer;
    margin-bottom: 28px;
    &:last-child {
      margin-bottom: 0;
    }
    @include media(md) {
      margin-bottom: 0;
    }
  }
  &-inner {
    transition: all 0.8s;
    @include media(md) {
      width: 300px;
      height: 300px;
    }
  }
  &-thumbnail {
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }
  //サムネクリック時のアニメーション
  &-fade {
    transform: perspective(1800px) rotateY(180deg);
    opacity: 0;
  }
}

//トランジションアニメーション記述部分
.modal-fade {
  //アニメーション中の状態
  &-enter-active,
  &-leave-active {
    visibility: visible;
    opacity: 1;
    transform: rotateY(0);
    transition: all 0.8s;
  }
  //アニメーション開始時と終了時の状態
  &-enter,
  &-leave-to {
    visibility: hidden;
    opacity: 0;
    transform: rotateY(180deg);
  }
}
</style>