<template>
  <section class="footer" ref="footer">
    <h4 class="footer__title">
      <a href="" class="footer__title__inner"><span>RS</span>design</a>
    </h4>
    <nav class="footer__nav">
      <ul class="footer__nav__list">
        <li class="footer__nav__list__item">
          <a href="#mainVisual" id="footer__nav__list__item_a">Top</a>
        </li>
        <li class="footer__nav__list__item">
          <a href="#about" id="footer__nav__list__item_a">About</a>
        </li>
        <li class="footer__nav__list__item">
          <a href="#works" id="footer__nav__list__item_a">Works</a>
        </li>
        <li class="footer__nav__list__item">
          <a href="#contact" id="footer__nav__list__item_a">Contact</a>
        </li>
      </ul>
    </nav>
    <ul class="footer__icon">
      <li class="footer__icon__item">
        <a href="https://twitter.com/RSdesign25" target="_blank"
          ><i class="fab fa-twitter-square"></i
        ></a>
      </li>
      <li class="footer__icon__item">
        <a href=""><i class="fab fa-facebook-square"></i></a>
      </li>
      <li class="footer__icon__item">
        <a href=""><i class="fab fa-instagram-square"></i></a>
      </li>
    </ul>
    <p class="footer__copyRight">© 2021 RSdesign / ALL RIGHTS RESERVED</p>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

type Options = {
  root: HTMLElement | null;
  rootMargin: string;
  threshold: number[];
};

export default Vue.extend({
  data() {
    return {
      footer_height: 0 as number,
      active_footer: false as boolean,
      footer: {} as HTMLElement,
      scroll_point: 0 as number,
      paginations: {} as NodeListOf<HTMLAnchorElement>,
      pagination: {} as HTMLAnchorElement,
      targetId: "" as string,
      target: {} as HTMLElement,
      options: {} as Options,
      contact: {} as HTMLElement,
      observer: {} as IntersectionObserver,
    };
  },
  methods: {
    resize_footer(): void {
      this.footer = this.$refs.footer as HTMLElement;
      this.footer_height = this.footer.clientHeight as number;
      document.documentElement.style.setProperty(
        "--footerHeight",
        `${this.footer_height}px`
      );
      this.footer.classList.add("footer__off");
    },
    scrollEvent(): void {
      this.paginations = document.querySelectorAll(
        "#footer__nav__list__item_a"
      );
      this.paginations.forEach((pagination: HTMLAnchorElement) => {
        pagination.addEventListener("click", (e: Event) => {
          e.preventDefault();
          this.pagination = e.target as HTMLAnchorElement;
          this.targetId = this.pagination.hash as string;
          this.target = document.querySelector(this.targetId) as HTMLElement;
          this.target.scrollIntoView({ behavior: "smooth" });
        });
      });
    },
    callback(entries: IntersectionObserverEntry[]): void {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          //交差してるか判定
          setTimeout(() => {
            this.footer.classList.add("footer__on");
          }, 1000);
        } else {
          if (entry.intersectionRatio <= this.scroll_point) {
            //交差範囲がフッターの高さより上か判定
            this.footer.classList.remove("footer__on");
          }
        }
      });
    },
  },
  mounted() {
    // this.resize_footer(); //フッター高さ調整

    this.scrollEvent();

    this.scroll_point = 1 - (this.footer_height + 1) / window.innerHeight; //フッターの高さ分判定回避

    this.options = {
      root: null, // ビューポートをルート要素とする
      rootMargin: "0%", // root内交差判定位置指定
      threshold: [this.scroll_point, 1], // 交差割合
    } as Options;

    this.observer = new IntersectionObserver(
      this.callback,
      this.options as IntersectionObserverInit
    );

    this.contact = document.querySelector("#contact") as HTMLElement;
    // this.observer.observe(this.contact);
  },
});
</script>

<style lang="scss" scoped>
.footer__off {
  overflow: hidden;
  // visibility: hidden;
  height: 0;
  // transition: 0.5s;
}
.footer__on {
  // overflow: visible;
  // visibility: visible;
  height: var(--footerHeight);
}
.footer {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  @include media(md) {
    width: 1000px;
    margin: 0 auto;
    padding: 0;
  }
  &__title {
    margin-top: 2.4rem;
    font-weight: bold;
    @include media(md) {
      margin-top: 24px;
    }
    &__inner {
      font-size: 2rem;
      @include media(md) {
        font-size: 32px;
      }
      > span {
        color: $main-color;
      }
    }
  }
  &__nav {
    margin-top: 1.2rem;
    width: 100%;
    @include media(md) {
      margin-top: 12px;
    }
    &__list {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      &__item {
        margin: 0 0.8rem;
        font-size: 1.4rem;
        @include media(md) {
          margin: 0 18px;
          font-size: 18px;
        }
        > a {
          display: block;
        }
      }
    }
  }
  &__icon {
    width: 100%;
    margin-top: 1.2rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    @include media(md) {
      margin-top: 12px;
    }
    &__item {
      font-size: 1.6rem;
      margin: 0 0.8rem;
      pointer-events: none;
      cursor: not-allowed;
      @include media(md) {
        font-size: 24px;
        margin: 0 18px;
      }
      & + .footer__icon__item {
        pointer-events: none;
        cursor: not-allowed;
      }
    }
  }
  &__copyRight {
    margin: 1.2rem auto 2.4rem;
    font-size: 1rem;
    @include media(md) {
      margin: 12px auto 24px;
      font-size: 14px;
    }
  }
}
</style>