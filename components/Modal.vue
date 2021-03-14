<template>
  <div class="modal-bg" @click.self="$emit('close')">
    <div class="modal-item">
      <figure class="modal-inner">
        <img class="modal-thumbnail" :src="val.p_pic" alt="" />
      </figure>
      <div class="modal-detail">
        <dl>
          <dt>{{ val.p_pic_title }}</dt>
          <dd>{{ val.p_pic_skill }}</dd>
          <dd>{{ val.p_pic_sub }}</dd>
          <dd>サイトURL<br />{{ val.p_site_url }}</dd>
        </dl>
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
});
</script>

<style lang="scss" scoped>
@import "~assets/scss/_media.scss";
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
    max-height: 860px;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.1);
    overflow: auto;
    cursor: auto;
  }
  &-thumbnail {
    width: 100%;
    height: 100%;
  }
  &-detail {
    padding: 15px;
    color: white;
    > dl {
      > dt {
        font-size: 1.6rem;
        margin-bottom: 26px;
        @include media(md){
          font-size: 26px;
        }
      }
      > dd {
        margin-bottom: 26px;
        @include media(md){
          font-size: 16px;
        }
        &:nth-child(3) {
          font-size: 1.4rem;
          @include media(md){
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>