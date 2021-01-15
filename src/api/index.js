import axios from 'axios';

export default
   axios.create({
      baseURL: 'http://212.71.246.199:8000',
      // timeout: 2000
   });
