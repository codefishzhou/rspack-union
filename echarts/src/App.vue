<script>
export default {
  name: "App",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
  computed: {
  },
  mounted() {
  },
  methods: {},
};
</script>
<template>
  <div class="">
    Hi from landing page provider {{ year }}
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/normal.css";
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
