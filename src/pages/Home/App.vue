<template>
  <div class="mainWrapper">
    <NavBar/>
    <div class="mainContent">
      <HomePage/>
    </div>
  </div>
  <SiteFooter/>
</template>

<script>
import NavBar from '../../components/NavBar.vue'
import HomePage from './HomePage.vue'
import SiteFooter from '../../components/SiteFooter.vue'

export default {
  components: {
    NavBar,
    HomePage,
    SiteFooter,
  },
}
</script>

<style>
  @import '../../assets/css/site.css';
</style>
