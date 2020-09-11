<template>
  <article class='socialData'>
    <div class="socialData__topLiner"></div>

    <section class="socialData__socialNetworkUser">
      <img src="" alt="socialIcon" />
      <span>@{{ socialNetworkDataUser.userName }}</span>
    </section>

    <section class="socialData__followersUser">
      <img src="" alt="socialIcon" />
      <span>{{ socialNetworkDataUser.followers }}</span>
      <small>follower</small>
    </section>

    <section class="socialData__dataFollowers">
      <span>{{ socialNetworkDataUser.followersToday }} Today</span>
    </section>
  </article>
</template>

<script>
export default {
  name: 'PxSocialDataUser',
  props: {
    socialNetworkDataUser: {
      type: Object
    }
  }
}
</script>

<style>

</style>
