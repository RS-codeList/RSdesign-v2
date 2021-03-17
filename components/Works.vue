<template>
  <section class="c-sectionStyle works">
    <h2 data-aos="fade-up" class="works__title">Works</h2>
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

//型の初期設定
export type DataType = {
  showModal: boolean;
  postItem: any;
  items: any;
};
export default Vue.extend({
  components: {
    Modal,
  },
  data(): DataType {
    return {
      showModal: false,
      postItem: "",
      items: [
        {
          id: 0,
          active: false,
          m_thum: "still/og_image-1.jpg",
          m_pic_pc: "still/zeisei2021_s.jpg",
          m_pic_sp: "still/zeisei2021_s_sp.jpg",
          m_pic_title: "税制改正 2021年度 税金の<br class='sp_on'>仕組みは何が変わる？｜NHK",
          m_pic_skill: "HTML / CSS / JavaScript",
          m_site_url: "https://www3.nhk.or.jp/news/special/zeisei2021/",
        },
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
        },
        {
          id: 2,
          active: false,
          m_thum: "still/og_image-3.jpg",
          m_pic_pc: "still/shinsai_portal_s.jpg",
          m_pic_sp: "still/shinsai_portal_s_sp.jpg",
          m_pic_title: "被災地の声 被災者アンケート<br class='sp_on'>｜NHK NEWS WEB",
          m_pic_skill: "HTML / CSS / JavaScript",
          m_site_url:
            "https://www3.nhk.or.jp/news/special/shinsai-portal/10/questionnaire/",
        },
      ],
    };
  },
  methods: {
    openModal(item: any) {
      this.postItem = item;
      this.showModal = true;
      this.postItem.active = true;
    },
    closeModal() {
      this.showModal = false;
      this.postItem.active = false;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "~assets/scss/_media.scss";
.works {
  height: fit-content;
  @include media(md) {
    height: calc(100vh - 146px);
    min-height: calc(100vh - 146px);
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
    margin-bottom: 32px;
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