import Customer from './components/Customer/Customer.vue';
import Home from './components/Home.vue';
import SubmitSuccess from './components/Customer/SubmitSuccess.vue';
import Hospital from './components/Hospital/Hospital.vue';

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
    path: '/customer/success', components: {
      default: SubmitSuccess
    }
  },
  {
    path: '/hospital', components: {
      default: Hospital
    }
  }
];
