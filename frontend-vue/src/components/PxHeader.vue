<template>
  <header class="header">
    <div class="header__container">
      <section class="header__title">
        <h1>Social Media Dashboard</h1>
        <span>Total Followers: 23,004</span>
      </section>

      <section class="header__toogleMode">
        <span>Dark Mode</span>
        <input type="checkbox" />
      </section>
      </div>
  </header>
</template>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

.header {
  width: 100%;
  height: 100px;

  &__container {
    width: 100%;
    height: 100px;
    margin: 30px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {

    & h1 {
      margin-bottom: 3px;
    }

    & span {
      margin-top: 2px;
      color: map-get($DarkThemeColors, 'DesaturatedBlue');
    }
  }

  &__toogleMode {

    & span {
      color: map-get($DarkThemeColors, 'DesaturatedBlue');
    }

    & input {

    }
  }
}
</style>

<script>

export default {
  name: 'Dashboard'
}
</script>
