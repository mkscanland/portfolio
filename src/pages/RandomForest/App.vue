<template>
  <div class="mainWrapper">
    <NavBar/>
    <div class="mainContent">
      <RandomForest/>
    </div>
  </div>
  <SiteFooter/>
</template>

<script>
import NavBar from '../../components/NavBar.vue'
import RandomForest from './RandomForest.vue'
import SiteFooter from '../../components/SiteFooter.vue'

export default {
  components: {
    NavBar,
    RandomForest,
    SiteFooter,
  },
}
</script>

<style>
  @import '../../assets/css/site.css';
</style>
