<template>
  <div class="modal-bg" @click.self="$emit('close')" v-if="windowWidth >= 600">
    <div class="modal-item">
      <figure class="modal-inner">
        <img class="modal-thumbnail" :src="val.m_pic_pc" alt="" />
      </figure>
      <div class="modal-detail">
        <h3 v-html="val.m_pic_title"></h3>
        <p>使用言語<br /><span>{{ val.m_pic_skill }}</span></p>
        <p>サイトURL<br /><span>{{ val.m_site_url }}</span></p>
      </div>
    </div>
  </div>
  <div class="modal-bg" @click.self="$emit('close')" v-else>
    <div class="modal-item">
      <figure class="modal-inner">
        <img class="modal-thumbnail" :src="val.m_pic_sp" alt="" />
      </figure>
      <div class="modal-detail">
        <h3 v-html="val.m_pic_title"></h3>
        <p>使用言語<br /><span>{{ val.m_pic_skill }}</span></p>
        <p>サイトURL<br /><span>{{ val.m_site_url }}</span></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Modal",
  props: {
    // 受け取る属性名を指定
    val: Object, // オブジェクトのみ受け取る
  },
  data(){
    return{
      windowWidth:0,
    }
  },
  methods:{
    discriminationMedia(){
      this.windowWidth = window.innerWidth;
    },
  },
  mounted(){
    this.discriminationMedia();
    window.addEventListener('resize', this.discriminationMedia);
  },
});
</script>

<style lang="scss" scoped>
.modal {
  &-bg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(#000, 0.78);
    pointer-events: auto;
    cursor: pointer;
  }
  &-item {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 90vw;
    height: 90vh;
    max-width: 1000px;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.1);
    overflow: auto;
    cursor: auto;
    @include media(md){
      height: fit-content;
      max-height: 800px;
    }
  }
  &-inner{
    width: 100%;
    height: 80%;
    @include media(md){
      height: 500px;
    }
  }
  &-thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
  &-detail {
    padding: 16px;
    color: $text-color;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    > h3 {
      font-size: 1.8rem;
      margin-bottom: 20px;
      letter-spacing: 1px;
      line-height: 1.4;
      @include media(md){
        font-size: 32px;
        margin-bottom: 26px;
      }
    }
    > p {
      font-size: 1.4rem;
      line-height: 1.6;
      margin-bottom: 16px;
      @include media(md){
        font-size: 24px;
        margin-bottom: 20px;
      }
      &:last-child{
        margin-bottom: 0;
      }
      >span{
        font-size: 1.6rem;
        font-weight: bold;
        word-break: break-all;
        @include media(md){
          font-size: 28px;
        }
      }
    }
  }
}
</style>