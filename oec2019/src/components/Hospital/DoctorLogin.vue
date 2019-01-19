<template>
    <div class="container" style="padding-top:100px;">
        <h1 class="text-center mt-3 title">Medical Personnel Login</h1>
        <br>
        <iframe width="0" height="0" border="0" name="dummyframe" id="dummyframe" style="visibility:hidden;"></iframe>
        <div class="offset-3 col-6">
            <form action="https://roec19-api.herokuapp.com/login" method="post" class="form-group">
            <h6>Doctor ID</h6>
            <input type="text" name="name" required class="form-control"><br/>
            <h6>Password</h6>
            <input type="text" name="password" required class="form-control"><br/>
            <button class="btn btn-success" type="submit">Log In</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DoctorLogin"}  
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
