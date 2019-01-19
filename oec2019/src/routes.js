import Customer from './components/Customer/Customer.vue';
import Home from './components/Home.vue';
import SubmitSuccess from './components/Customer/SubmitSuccess.vue';
import Patient from './components/Hospital/Patient.vue';
import PatientList from './components/Hospital/PatientList.vue';
import DoctorLogin from './components/Hospital/DoctorLogin.vue';

export const routes = [
  {
    path: '/', components: {
      default: Home
    }
  },
  {
    path: '/customer', components: {
      default: Customer
    }
  },
  {
    path: '/customer/success', name: 'success', components: {
      default: SubmitSuccess
    }
  },
  {
    path: '/patient', components: {
      default: Patient
    }
  }, 
  {
    path: '/patientlist', components: {
      default: PatientList
    }
  },
  {
    path: '/doctorlogin', components: {
      default: DoctorLogin
    }
  }
];
