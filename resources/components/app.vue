<template>
  <div class="container nvn-container">
    <Header/>
    <Overview/>
  </div>
</template>

<script>
import Overview from './overview.vue';
import Header from './header.vue';

export default{
  components: { Overview, Header }
}
</script>

<style scoped>
  .nvn-container{
    margin-top: 30px
  }
</style>