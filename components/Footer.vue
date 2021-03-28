<template>
  <section class="footer">
    <h4 class="footer__title">
      <a href="" class="footer__title__inner"><span>RS</span>design</a>
    </h4>
    <nav class="footer__nav">
      <ul class="footer__nav__list">
        <li class="footer__nav__list__item"><a href="#mainVisual">Top</a></li>
        <li class="footer__nav__list__item"><a href="#about">About</a></li>
        <li class="footer__nav__list__item"><a href="#works">Works</a></li>
        <li class="footer__nav__list__item"><a href="#contact">Contact</a></li>
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

<script>
export default {
  data() {
    return {
      footer_height: 0,
      active_footer: false,
      footer: null,
      scroll_point: 0,
    };
  },
  methods: {
    resize_footer() {
      this.footer = document.querySelector(".footer");
      this.footer_height = this.footer.clientHeight;
      document.documentElement.style.setProperty(
        "--footerHeight",
        `${this.footer_height}px`
      );
      this.footer.classList.add("footer__off");
    },
  },
  mounted() {
    this.resize_footer();

    const paginations = document.querySelectorAll(".footer__nav__list__item a");
    paginations.forEach((pagination) => {
      pagination.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = e.target.hash;
        const target = document.querySelector(targetId);
        target.scrollIntoView({ behavior: "smooth" });
      });
    });

    this.scroll_point = 1 - (this.footer_height + 1) / window.innerHeight; //フッター判定回避用

    const options = {
      root: null, // ビューポートをルート要素とする
      rootMargin: "0%", // root内交差判定位置指定
      threshold: [this.scroll_point, 1], // 交差割合
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // if (entry.intersectionRatio === 1) {
          // 要素が交差した際の動作
          // this.active_footer = !this.active_footer;//フラグの切り替え用
          // console.log(this.active_footer)
          // this.contact_top = window.pageYOffset;
          // this.active_footer = true;
          setTimeout(() => {
            this.footer.classList.add("footer__on");
          }, 1000);
          // this.footer.classList.toggle("footer__on");
          //   this.active_footer = true;
        } else {
          if (entry.intersectionRatio <= this.scroll_point) {
            this.footer.classList.remove("footer__on");
          }

          // if(this.scroll_point < this.contact_top){
          //   this.active_footer = false;
          //   this.footer.classList.remove("footer__on");
          // }
          // if(!entry.isIntersecting){
          //   this.active_footer = true;
          // }
          // else{
          //   this.active_footer = false;
          //   this.footer.classList.remove("footer__on");
          // }
          // 要素が交差から外れた際の動作
          //   this.footer.classList.remove("footer__on");
          //   this.active_footer = false;
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);
    const contact = document.querySelector("#contact");
    observer.observe(contact);
    // const footerAnime = document.querySelector(".footer__off");
    // footerAnime.addEventListener("transitionend",(event)=>{
    //   event.target.style.overflow= this.active_footer ? "visible":"hidden";
    //   // console.log(event);
    // });
  },
};
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