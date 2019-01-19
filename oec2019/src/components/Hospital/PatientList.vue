<template>
    <div class="container">
        <br>
      <div class="row">
          <div class="col-12 text-center title">MedAssist</div>
      </div>
      <hr>
      <div style="width:1000px; margin: 0 auto;">
        <router-link to="/patient" tag="button">Patient 1</router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "PatientList"
    }
</script>

<style scoped>
.title{
    font-size: 2em;
    font-weight: bold;
}
</style>
