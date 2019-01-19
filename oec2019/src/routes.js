import Customer from './components/Customer/Customer.vue';
import Home from './components/Home.vue';

export const routes = [
  {
    path: '', components: {
      default: Home
    }
  },
  {
    path: '/customer', components: {
      default: Customer
    }
  }
];
