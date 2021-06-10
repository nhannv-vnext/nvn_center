<template>
  <div class="container">
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