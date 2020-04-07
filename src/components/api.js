import apiURL from'../APIconfig';
import axios from 'axios';


//---------------The GET Request-------------------

// Get all service depend on UserId and if the ServiceState is closed
export const getAllClosedService = (id) => {
    return axios.get(`${apiURL}/Find/All/closed/Service/${id}`);
  }   
