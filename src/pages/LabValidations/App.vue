<template>
  <div class="mainWrapper">
    <NavBar/>
    <div class="mainContent">
      <LabValidations/>
    </div>
  </div>
  <SiteFooter/>
</template>

<script>
import NavBar from '../../components/NavBar.vue'
import LabValidations from './LabValidations.vue'
import SiteFooter from '../../components/SiteFooter.vue'

export default {
  components: {
    NavBar,
    LabValidations,
    SiteFooter,
  },
}
</script>

<style>
  @import '../../assets/css/site.css';
</style>
