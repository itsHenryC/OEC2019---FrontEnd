<template>
  <div class="main" id="app">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand">
        <router-link to="/" style="color:white">McMaster Health Sci</router-link>
      </a>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-item nav-link" to="/customer" style="color:white" active>For Customer</router-link>
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
.navbar {
  background-color: rgb(134, 33, 33);
}

.main{
  background-color: #f7eecd;
  height:100vh;
}

</style>
