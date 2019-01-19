<template>
  <div id="app" class="container">
    <h1>OEC 2019 PLACEHOLDER</h1>
    <button class="btn btn-primary"><router-link to="/customer">For Customer</router-link></button>
    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
