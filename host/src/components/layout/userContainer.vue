<template>
    <div id="user-app">
      <router-view v-if="$route.path.startsWith('/user')"/>
    </div>
  </template>
  
  <script>
  export default {
    beforeRouteEnter(to, from, next) {
      if (!to.path.startsWith('/user')) next('/')
      else next()
    }
  }
  </script>