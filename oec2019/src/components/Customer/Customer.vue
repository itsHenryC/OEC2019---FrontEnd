<template>
    <div>
      <h1 class="text-center mt-3 title">Patient Form</h1>
      <hr>
      <!--<form action="https://roec19-api.herokuapp.com/send" method="POST" class="offset-3 form-group col-6">-->
        <!--&lt;!&ndash;Appt date, name, gender, phone number, list of sympthoms, doctor number&ndash;&gt;-->
        <!--<h3>Patient Name</h3>-->
        <!--<input name="name" type="text" placeholder="e.g. John Doe" class="form-control">-->
        <!--<br>-->
        <!--<h3>Gender</h3>-->
        <!--<input name="gender" type="text" placeholder="e.g. Male, Female, Other." class="form-control">-->
        <!--&lt;!&ndash;<input type="radio" name="gender" v-model="gender" value="m"> Male<br>&ndash;&gt;-->
        <!--&lt;!&ndash;<input type="radio" name="gender" v-model="gender" value="f"> Female<br>&ndash;&gt;-->
        <!--&lt;!&ndash;<input type="radio" name="gender" v-model="gender" value="nil"> Other / Prefer not answer<br>&ndash;&gt;-->
        <!--&lt;!&ndash;MISSING DOCTOR NUMBER &ndash;&gt;-->

        <!--<br>-->
        <!--<h3>Patient Phone Number</h3>-->
        <!--<input name="phonenumber" type="tel" placeholder="9055224135" class="form-control" />-->
        <!--<br>-->
        <!--<h3>List of Symptoms</h3>-->
        <!--<input name="symptoms" type="text" placeholder="e.g. Hot hands, itchy, etc." class="form-control">-->
        <!--<br>-->
        <!--<h3>Doctor Number</h3>-->
        <!--<input name="doctor" type="text" placeholder="Dr. J Hui" class="form-control">-->
        <!--<br>-->
        <!--<h3>Appointment Date</h3>-->
        <!--<input name="apptdate" type="text" placeholder="e.g. MM/DD/YY HH:MM" class="form-control">-->
        <!--<br>-->
        <!--<button type="submit" class="btn btn-success btn-block"><router-link to="/customer/success" style="color:white">Submit</router-link></button>-->

      <!--</form>-->
      <iframe width="0" height="0" border="0" name="dummyframe" id="dummyframe"></iframe>

      <form action="https://roec19-api.herokuapp.com/send" method="post" target="dummyframe">
        Name: <input type="text" name="name" required><br/>
        Gender: <input type="text" name="gender" required><br/>
        Phone #: <input type="text" name="phonenumber" required><br/>
        Doctor: <input type="text" name="doctor" required><br/>
        Appt: <input type="text" name="apptdate" required><br/>
        Symptoms: <input type="text" name="symptoms" required><br/>
        <button type="submit">Please Work</button>
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
            appointmentDate: "",
            patientName: "",
            gender: "",
            symptoms: "",
            phone: "",
            errorMsgs: [],
            success: false
        };
      }
      // methods: {
      //   submit: function() {
      //     // var data = new FormData();
      //     // this.patientName = "";
      //     // this.gender = "";
      //     // this.symptoms = "";
      //     // this.phone = "";
      //     var x = document.getElementById("myform");
      //     console.log(x);
      //
      //     this.errorMsgs = [];
      //
      //     this.success = true;
      //
      //     if (this.patientName.length < 1) {
      //       this.success = false;
      //       this.errorMsgs.push('Patient name is missing.');
      //     }
      //
      //     if (this.gender.length < 1) {
      //       this.success = false;
      //       this.errorMsgs.push('Patient gender is missing.');
      //     }
      //
      //     if (this.symptoms.length < 1) {
      //       this.success = false;
      //       this.errorMsgs.push('Patient symptoms are missing.');
      //     }
      //
      //     if (this.phone.length < 10) {
      //       this.success = false;
      //       this.errorMsgs.push('Patient phone number is missing.');
      //     }
      //
      //     console.log(this.errorMsgs);
      //
      //     if (this.success == true) {
      //       this.success = false;
      //
      //
      //       // this.$http.post("roec-19.heroku/register", HELP);
      //
      //
      //       this.$router.push({ name: 'success' });
      //     }
      //     // console.log(this.patientName + " " + this.gender + " " + this.symptoms + " " + this.phone);
      //   }
      // }

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
