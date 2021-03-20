<template>
  <section>
    <p>© 2021 RSdesign / ALL RIGHTS RESERVED</p>
  </section>
</template>

<style lang="scss" scoped>
section {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @include media(md) {
    width: 1000px;
    margin: 0 auto;
  }
}
p {
  margin: 32px auto;
  color: white;
  @include media(md){
    margin: 64px auto;
    font-size: 16px;
  }
}
</style>