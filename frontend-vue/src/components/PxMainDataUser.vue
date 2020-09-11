<template>
  <main class="mainSocialData">
    <div class="mainSocialData__container">
      <px-social-data-user  :socialNetworkDataUser='user.facebook' />
      <px-social-data-user  :socialNetworkDataUser='user.twitter' />
      <px-social-data-user  :socialNetworkDataUser='user.instagram' />
      <px-social-data-user  :socialNetworkDataUser='user.youtube' />
    </div>

    <section class="overviewData">
      <h2>Overview - Today</h2>

      <div class="overview__container">
        <px-overview-today-data  :socialNetworkDataUser='user.facebook'  />
        <px-overview-today-data  :socialNetworkDataUser='user.twitter'  />
        <px-overview-today-data  :socialNetworkDataUser='user.instagram'  />
        <px-overview-today-data  :socialNetworkDataUser='user.youtube'  />
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

.mainSocialData {
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

.socialData {
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
import getUser from '../api'
import PxOverviewTodayData from './PxOverviewTodayData'
import PxSocialDataUser from './PxSocialDataUser'

export default {
  name: 'PxMainDataUser',
  components: { PxOverviewTodayData, PxSocialDataUser },
  data: () => ({
    user: {}
  }),

  created () {
    getUser().then(data => { this.user = data })
  }
}
</script>
