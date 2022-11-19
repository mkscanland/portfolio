<template>
  <div class="mainWrapper">
    <NavBar/>
    <div class="mainContent">
      <ITSystems/>
    </div>
  </div>
  <SiteFooter/>
</template>

<script>
import NavBar from '../../components/NavBar.vue'
import ITSystems from './ITSystems.vue'
import SiteFooter from '../../components/SiteFooter.vue'

export default {
  components: {
    NavBar,
    ITSystems,
    SiteFooter,
  },
}
</script>

<style>
  @import '../../assets/css/site.css';
</style>
