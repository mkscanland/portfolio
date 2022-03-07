<template>
  <div class="mainWrapper">
    <NavBar/>
    <div class="mainContent">
      <UnderDevelopment/>
    </div>
  </div>
  <SiteFooter/>
</template>

<script>
import NavBar from '../../components/NavBar.vue'
import UnderDevelopment from '../../components/UnderDevelopment.vue'
import SiteFooter from '../../components/SiteFooter.vue'

export default {
  components: {
    NavBar,
    UnderDevelopment,
    SiteFooter,
  },
}
</script>

<style>
  @import '../../assets/css/site.css';
</style>
