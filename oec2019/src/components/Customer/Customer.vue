<template>
    <div>
      <h1 class="text-center mt-3 title">Customer Registration</h1>
      <hr>
      <form @submit.prevent="submit" class="offset-3 form-group col-6">
        <h3>Patient Name</h3>
        <input v-model="patientName" type="text" placeholder="e.g. John Doe" class="form-control">
        <br>
        <h3>Gender</h3>

        <input type="radio" name="gender" v-model="gender" value="m"> Male<br>
        <input type="radio" name="gender" v-model="gender" value="f"> Female<br>
        <input type="radio" name="gender" v-model="gender" value="nil"> Other / Prefer not answer<br>


        <br>
        <h3>Patient Phone Number</h3>
        <input v-model="phone" type="tel" placeholder="9055224135" class="form-control" />
        <br>
        <h3>List of Symptoms</h3>
        <input v-model="symptoms" type="text" placeholder="e.g. Hot hands, itchy, etc." class="form-control">
        <br>
        <button type="submit" class="btn btn-success btn-block"><router-link to="/customer/success" style="color:white">Submit</router-link></button>
      </form>

      <ul class="text-center">
        <li v-for="errorMsg in errorMsgs">
          {{ errorMsg }}
        </li>

      </ul>
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
            phone: "",
            errorMsgs: [],
            success: false
        };
      },
      methods: {
        submit: function() {
          // var data = new FormData();
          this.patientName = "";
          this.gender = "";
          this.symptoms = "";
          this.phone = "";

          this.errorMsgs = [];

          this.success = true;

          if (this.patientName.length < 1) {
            this.success = false;
            this.errorMsgs.push('Patient name is missing.');
          }

          if (this.gender.length < 1) {
            this.success = false;
            this.errorMsgs.push('Patient gender is missing.');
          }

          if (this.symptoms.length < 1) {
            this.success = false;
            this.errorMsgs.push('Patient symptoms are missing.');
          }

          if (this.phone.length < 10) {
            this.success = false;
            this.errorMsgs.push('Patient phone number is missing.');
          }

          console.log(this.errorMsgs);

          if (this.success == true) {
            this.success = false;
            this.$router.push({ name: 'success' });
          }
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
