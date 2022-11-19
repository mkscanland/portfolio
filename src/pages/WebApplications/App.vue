<template>
  <div class="mainWrapper">
    <NavBar/>
    <div class="mainContent">
      <WebApplications/>
    </div>
  </div>
  <SiteFooter/>
</template>

<script>
import NavBar from '../../components/NavBar.vue'
import WebApplications from './WebApplications.vue'
import SiteFooter from '../../components/SiteFooter.vue'

export default {
  components: {
    NavBar,
    WebApplications,
    SiteFooter,
  },
}
</script>

<style>
  @import '../../assets/css/site.css';
</style>
