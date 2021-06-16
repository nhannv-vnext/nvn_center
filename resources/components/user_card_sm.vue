<template>
  <div class="user-info-card fs-80-percent">
    <div class="text-secondary">asked Aug 5 '20 at 23:10</div>
    <div class=" d-flex align-items-center">
      <img src="../images/user.png" alt="user thumb" width="45" height="45" class="mr-5px">
      <div>
        <a href="#" class="link-text">John</a>
        <div>236 star</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: "What's tooltip?",
    };
  },
}
</script>

<style scoped>
  /* user card */
  div.user-info-card{
    display: inline-block;
    background-color: rgb(225, 236, 244);
    border-radius: 3px;
    padding: 4px 6px;
  }
</style>