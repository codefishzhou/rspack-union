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
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
