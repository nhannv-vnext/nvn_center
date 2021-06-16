<template>
  <div>
    <Header/>
    <div class="container nvn-container">
      <Page/>
    </div>
  </div>
</template>

<script>
import Header from './header.vue';
import Page from './page.vue';

export default{
  components: { Header, Page }
}
</script>

<style scoped>
  .nvn-container{
    margin-top: 30px
  }
</style>