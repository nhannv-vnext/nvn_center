<template>
  <div>
    <h3>{{ text }}</h3>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      text: "Overview",
    };
  },
}
</script>

<style scoped>
h3 {
  color: red;
}
</style>