<template>
  <div>
    <div class="d-flex justify-content-between align-items-center">
        <div>
            <h2 class="text-danger">{{ logo_text }}</h2>
        </div>
        <div>
            <a class="link-text" href="#">Login</a>
        </div>
    </div>
    <div>
      <h3>{{ title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      logo_text: "NVN",
      title: "NVN",
    };
  },
}
</script>