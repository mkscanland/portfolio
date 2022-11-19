<template>
  <div class="mainWrapper">
    <NavBar/>
    <div class="mainContent">
      <AnnualReports/>
    </div>
  </div>
  <SiteFooter/>
</template>

<script>
import NavBar from '../../components/NavBar.vue'
import AnnualReports from './AnnualReports.vue'
import SiteFooter from '../../components/SiteFooter.vue'

export default {
  components: {
    NavBar,
    AnnualReports,
    SiteFooter,
  },
}
</script>

<style>
  @import '../../assets/css/site.css';
</style>
