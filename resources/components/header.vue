<template>
  <div class="d-flex justify-content-between align-items-center">
      <div>
          <h2 class="text-danger">{{ logo_text }}</h2>
      </div>
      <div>
          <a href="#">Login</a>
      </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      logo_text: "NVN",
    };
  },
}
</script>