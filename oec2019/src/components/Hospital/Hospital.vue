<template>
    <div>
      <h1 class="text-center mt-3 title">Screening Platform</h1>
      <hr>
      <div class="row row-1">
        <div class="col-4"> 
            <span class="parameter">Patient:</span>
            <span class="patient-info">{{name}}</span>
        </div>
        <div class="col-4">
            <span class="parameter">Submittion Date:</span>
            <span class="patient-info">{{submit_time}}</span>
        </div>
        <div class="col-4">
            <span class="parameter">Appointment:</span>
            <span class="patient-info">{{appointment_time}}</span>
        </div>
      </div>
      <div class="row row-2">
        <div class="data col-7" style="padding-left:30px;"> 
            <br><br>
            <span class="parameter">Symptoms</span>
            <hr>
            <span class="patient-info">{{symptoms}}</span>
        </div>
        <div class="col-5">
            <br><br><br>
            <img src="/src/images/bruise.jpg" alt="Loading...">
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Hospital",
        data () {
            return {
                name: "Test Name 123",
                submit_time: "May 15, 1997 5:00PM",
                appointment_time: "May 15, 1997 5:00PM",
                symptoms: "ALOT OF TEXT IS HERE LOLOLOLOL LOLOLOLOL LOLOLOLOL LOLOLOLOL LOLOLOLOL LOLOLOLOL LOLOLOLOL LOLOLOLOL LOLOLOLOL LOLOLOLOL LOLOLOLOL LOLOLOLOL LOLOLOLOL LOLOLOLOL LOLOLOLOL LOLOLOLOL LOLOLOLOL LOLOLOLOL LOLOLOLOL LOLOLOLOL LOLOLOLOL"
            };
        }
    }
</script>

<style scoped>
.title{
  font-size: 2.2em;
}

.row-1{
    font-size:1.2em;
}

.row-2{
    font-size:1.2em;
}

.patient-info{
    color: rgb(156, 30, 30);
}

.parameter{
    color: rgb(56, 54, 54);
}

img{
    width:400px;
}
</style>
