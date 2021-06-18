<template>
  <div>
    <Header/>
    <div class="container nvn-container">
      <Page v-if="page_title == page_index.ANSWER_PAGE"/>
    </div>
  </div>
</template>

<script>
import Header from './header.vue';
import Page from './page.vue';
import {PAGE_INDEX} from '../constants';

console.log(PAGE_INDEX);

export default{
  components: { Header, Page },
  data: function () {
    return {
      page_title: this.$store.state.page_index,
      page_index: PAGE_INDEX,
    };
  },
}
</script>

<style scoped>
  .nvn-container{
    margin-top: 30px
  }
</style>