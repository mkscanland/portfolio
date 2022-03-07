<template>
  <div class="mainWrapper">
    <NavBar/>
    <div class="mainContent">
      <InternalRebuild/>
    </div>
  </div>
  <SiteFooter/>
</template>

<script>
import NavBar from '../../components/NavBar.vue'
import InternalRebuild from './InternalRebuild.vue'
import SiteFooter from '../../components/SiteFooter.vue'

export default {
  components: {
    NavBar,
    InternalRebuild,
    SiteFooter,
  },
}
</script>

<style>
  @import '../../assets/css/site.css';
</style>
