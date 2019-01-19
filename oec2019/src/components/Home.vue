<template>
    <div class="container">
        <br>
      <div class="row">
          <div class="col-12 text-center title">MedAssist</div>
      </div>
      <hr>
      <br><br>
      <div class="row text-center">  
        <div style="width:1000px; margin: 0 auto;">
            <router-link to="/Customer" tag="button">Patient Form</router-link>
        </div>
      </div>
      <br>
      <div class="row text-center">  
        <div style="width:1000px; margin: 0 auto;">
            <router-link to="/doctorlogin" tag="button">Doctor Login</router-link>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
.title{
    font-size: 2em;
    font-weight: bold;
}
</style>
