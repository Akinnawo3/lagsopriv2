import axios from 'axios';

export default
   axios.create({
      // baseURL: 'http://212.71.246.199:8000',
      baseURL: 'https://reactify.theironnetwork.org/data/'
      // timeout: 2000
   });
