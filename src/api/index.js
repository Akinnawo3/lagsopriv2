import axios from 'axios';

export default
   axios.create({
      baseURL: 'https://reactify.theironnetwork.org/data/',
      timeout: 2000
   });