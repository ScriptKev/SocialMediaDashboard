<template>
  <article class='overview'>
    <section class="overview__pageView">
      <span>Page Views</span>
      <img src="" alt="socialIcon" />
    </section>

    <section class="overview__data">
      <h4>112</h4>
      <span>303%</span>
    </section>
  </article>
</template>

<style lang="scss" scope>
@import '../assets/scss/main.scss';

.overviewData {
  width: 100%;
  height: 100%;

  &__container {
    width: 100%;
    height: 100%;
    margin: 30px auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    justify-items: center;
  }
}

.overview {
  width: 100%;
  height: 300px;
  max-width: 325px;
  // padding: 32px 20px 25px 20px;
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
  user-select: none;
  background: map-get($DarkThemeColors , 'DarkDesaturatedBlue');

  &__topLine {

  }

  &__socialNetworkUser {

  }

  &__followersUser {

  }

  &__dataFollowers {

  }
}

@media only screen and (min-width: 1024px) {
  .mainSocialData {

    &__container {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}

@media only screen and (min-width: 600px) and (max-width: 1023px) {
  .mainSocialData {

    &__container {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 30px;
      row-gap: 40px;
    }
  }
}

@media only screen and (min-width: 320px) and (max-width: 599px) {
  .mainSocialData {
    &__container {
      grid-template-columns: 1fr;
      row-gap: 40px;
    }
  }
}
</style>

<script>
export default {
  name: 'PxOverTodayData'
}
</script>
