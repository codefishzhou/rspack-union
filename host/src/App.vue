<script>
export default {
  name: "App",
};
</script>
<template>
  <div class="">
    <div>
      <router-view />
    </div>
  </div>
</template>

<style lang="scss"scoped>
@import "@/assets/styles/normal.css";
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>

<!-- <style module scoped>
.view {
  @apply min-h-screen overflow-hidden bg-gray-100 print:!overflow-visible print:invisible print:h-full;
}

.main {
  @apply m-auto;
} 
</style>-->