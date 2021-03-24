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
  mounted() {
    const paginations = document.querySelectorAll(".footer__nav__list__item a");
    paginations.forEach((pagination) => {
      pagination.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = e.target.hash;
        const target = document.querySelector(targetId);
        target.scrollIntoView({ behavior: "smooth" });
      });
    });
  },
};
</script>

<style lang="scss" scoped>
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