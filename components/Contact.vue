<template>
  <section class="c-sectionStyle contact">
    <h2 class="contact__title">Contact</h2>
    <div class="contact__wrapper">
      <form>
        <fieldset>
          <div class="contact__wrapper__inner">
            <p class="contact__wrapper__inner__item">
              <input
                v-model="form.name.contents"
                type="text"
                id="name"
                class="contact__wrapper__inner__item__input"
                placeholder="お名前"
                required
              />
              <label for="name" class="contact__wrapper__inner__item__label"
                >お名前 *</label
              >
              <span
                class="errorMessage contact__wrapper__inner__item__messageBox"
                >必須項目です</span
              >
              <span class="OKMessage contact__wrapper__inner__item__messageBox"
                >OKです！</span
              >
            </p>
            <p class="contact__wrapper__inner__item">
              <input
                v-model="form.email.contents"
                type="email"
                id="email"
                class="contact__wrapper__inner__item__input"
                required
                placeholder="メールアドレス"
              />
              <label for="email" class="contact__wrapper__inner__item__label"
                >メールアドレス *</label
              >
              <span
                class="errorMessage contact__wrapper__inner__item__messageBox"
                >正しい形式で入力してください</span
              >
              <span class="OKMessage contact__wrapper__inner__item__messageBox"
                >OKです！</span
              >
            </p>
            <p class="contact__wrapper__inner__item">
              <textarea
                v-model="form.message.contents"
                name="detail"
                id="detail"
                class="contact__wrapper__inner__item__textarea"
                cols="30"
                rows="10"
                placeholder="お問い合わせ内容"
                required
              ></textarea>
              <label for="detail" class="contact__wrapper__inner__item__label"
                >お問い合わせ内容 *</label
              >
            </p>
          </div>
          <p class="contact__wrapper__required">* は必須事項</p>
          <button
            id="submit"
            class="contact__wrapper__submitButton"
            @click.prevent="sendMail()"
          >
            送信
          </button>
        </fieldset>
      </form>
    </div>
  </section>
</template>

<script>
import firebase from "~/plugins/firebase.js";

export default {
  data: () => ({
    form: {
      name: { contents: "" },
      email: { contents: "" },
      message: { contents: "" },
    },
  }),
  methods: {
    sendMail() {
      const form = this.form;
      const sendMail = firebase.functions().httpsCallable("sendMail");
      sendMail({ form })
        .then((response) => {
          // alert(response);
          console.log(response.data);
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
  mounted() {
    /**
     * フォーム全体の妥当性をチェックします
     */
    const validate = () => {
      const validForm = document.querySelector("form:valid");
      const submitButton = document.querySelector("#submit");
      submitButton.disabled = validForm === null;
    };

    // 初期読み込み時に実行
    validate();

    // フォームに入力されたら、validate関数を実行
    document.querySelectorAll("input,textarea").forEach((input) => {
      input.addEventListener("input", validate);
    });
  },
};
</script>

<style lang="scss" scoped>
.contact {
  height: fit-content;
  @include media(md) {
    min-height: calc(var(--vh) - 146px);
  }
  &__wrapper {
    width: 100%;
    padding: 0 12px;
    margin: 0 auto;
    @include media(md) {
      padding: 0;
    }
    &__inner {
      &__item {
        display: flex;
        flex-flow: column nowrap;
        margin-bottom: 2rem;
        position: relative;
        @include media(md) {
          margin-bottom: 32px;
        }
        &:focus-within {
          //テキストボックスにフォーカスされた時、子要素に適用するスタイル
          .contact__wrapper__inner__item__label {
            transform: translateY(0) scale(0.8);
          }
        }
        &__label {
          display: block;
          order: 1;
          transition: transform 0.2s;
          transform: translateY(2.5rem) scale(1);
          transform-origin: 0 100%;
          font-size: 1.4rem;
          @include media(md) {
            font-size: 18px;
            transform: translateY(36px) scale(1);
          }
        }
        &__input,
        &__textarea {
          order: 2;
          width: 100%;
          border: none;
          font-size: 1.6rem;
          padding: 8px;
          border-bottom: 1px solid $text-color;
          background-color: transparent;
          color: $text-color;
          @include media(md) {
            font-size: 20px;
          }
          &:focus {
            border: $text-color solid 1px;
            outline: none;
          }
          &:invalid {
            box-shadow: none;
            & ~ .errorMessage {
              display: block;
            }
            & ~ .OKMessage {
              display: none;
            }
          }
          &:valid {
            & ~ .errorMessage {
              display: none;
            }
            & ~ .OKMessage {
              display: block;
            }
          }
          &::placeholder {
            color: transparent;
          }
          &::-webkit-input-placeholder {
            color: transparent;
          }
          &:placeholder-shown {
            & ~ .contact__wrapper__inner__item__messageBox {
              display: none;
            }
          }
          &:not(:placeholder-shown) {
            & ~ .contact__wrapper__inner__item__label {
              transform: translateY(0) scale(0.8);
            }
          }
        }
        &__textarea {
          border: 1px solid $text-color;
          & ~ .contact__wrapper__inner__item__label {
            padding-left: 8px;
          }
        }
        &__messageBox {
          padding: 0 8px 8px 8px;
          position: absolute;
          bottom: -2.6rem;
          z-index: -1;
          font-size: 1rem;
          @include media(md) {
            font-size: 16px;
            bottom: -36px;
          }
          &.errorMessage {
            color: #ff7f7f;
          }
          &.OKMessage {
            color: #7fff7f;
          }
        }
      }
    }
    &__required {
      @include media(md) {
        font-size: 14px;
      }
    }
    &__submitButton {
      display: block;
      margin: 0 auto;
      width: 120px;
      height: 40px;
      border: none;
      background-color: $main-color;
      font-weight: bold;
      font-size: 1.8rem;
      color: $text-color;
      cursor: pointer;
      transition: opacity 0.2s;
      @include media(md) {
        font-size: 24px;
      }
      &:disabled {
        background-color: #999;
        color: #ddd;
        cursor: not-allowed;
      }
      &:not(:disabled) {
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}
</style>