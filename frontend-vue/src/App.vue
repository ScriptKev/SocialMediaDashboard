<template>
  <div class='app'>
    <px-header />
    <px-main-data-user />
  </div>
</template>

<style lang="scss">
@import './assets/scss/main.scss';
</style>

<script>
import PxMainDataUser from './components/PxMainDataUser'
import PxHeader from './components/PxHeader'

export default {
  name: 'App',
  components: { PxHeader, PxMainDataUser }

}
</script>
