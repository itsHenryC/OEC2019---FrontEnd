<template>
    <div>
      <h1 class="text-center mt-3 title">Customer Registration</h1>
      <hr>
      <form @submit.prevent="submit" class="offset-3 form-group col-6">
        <h3>Patient Name</h3>
        <input v-model="patientName" type="text" placeholder="e.g. John Doe" class="form-control">
        <br>
        <h3>Gender</h3>

        <input type="radio" name="gender" v-model="gender" value="m" checked> Male<br>
        <input type="radio" name="gender" v-model="gender" value="f"> Female<br>
        <input type="radio" name="gender" v-model="gender" value="nil"> Other / Prefer not answer<br>


        <br>
        <h3>Patient Phone Number</h3>
        <input v-model="phone" type="tel" placeholder="(905) - 522 - 4135" class="form-control" />
        <br>
        <h3>List of Symptoms</h3>
        <input v-model="symptoms" type="text" placeholder="e.g. Hot hands, itchy, etc." class="form-control">
        <br>
        <button type="submit" class="btn btn-success btn-block"><router-link to="/customer/success" style="color:white">Submit</router-link></button>
      </form>
    </div>
</template>


<script>
    export default {
      name: 'customer',
      data() {
        return {
            patientName: "",
            gender: "",
            symptoms: "",
            phone: ""
        };
      },
      methods: {
        submit: function() {
          // var data = new FormData();
          this.patientName = "";
          this.gender = "";
          this.symptoms = "";
          this.phone = "";

          console.log(this.patientName + " " + this.gender + " " + this.symptoms + " " + this.phone);
        }
      }

    }
</script>

<style scoped>
.title{
  font-size: 2.2em;
}

h3{
  font-size:1.5em;
}

</style>
