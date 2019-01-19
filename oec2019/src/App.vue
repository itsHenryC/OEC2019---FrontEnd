<template>
  <div id="app">
    <!--<nav class="navbar navbar-dark bg-dark">-->
      <!---->
      <!--<ul class="navbar-nav">-->
        <!--<li class="nav-item">-->
          <!---->
        <!--</li>-->
        <!--<li class="nav-item">-->
          <!---->
        <!--</li>-->
      <!--</ul>-->

    <!--</nav>-->

    <nav class="navbar navbar-expand-lg navbar-light bg-dark">

      <a class="navbar-brand">
        <router-link to="/" style="color:white">McMaster Health Sci</router-link>
      </a>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-item nav-link" to="/customer" style="color:white">For Customer</router-link>
          <router-link class="nav-item nav-link" to="/hospital" style="color:white">For Hospital</router-link>
        </div>
      </div>
    </nav>
    <div class="container">

      <router-view></router-view>
    </div>
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
