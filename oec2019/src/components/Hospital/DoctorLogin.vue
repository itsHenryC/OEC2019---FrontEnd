<template>
    <div class="container" style="padding-top:100px;">
        <h1 class="text-center mt-3 title">Doctor Login</h1>
        <br>
        <div class="row row-user">
            <div class="col-4 text-right">Username:</div>
            <div class="col-6 text-left">
            <input v-model="username" type="username" class="form-control" />
            </div>
        </div>
        <br>
        <div class="row row-password">
            <div class="col-4 text-right">Password:</div>
            <div class="col-6 text-left">
            <input v-model="password" type="password" class="form-control" />      
            </div>   
        </div>
        <br>
        <div class="row text-center">
            <div style="width:1000px; margin: 0 auto;">
                <button class="btn btn-success btn-lg"><router-link to="/patientlist" style="color: white">Login</router-link></button>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "DoctorLogin"
    }
</script>

<style scoped>
.title{
    font-size: 2em;
    font-weight: bold;
}

.container{
    font-size:1.5em;
}
</style>
