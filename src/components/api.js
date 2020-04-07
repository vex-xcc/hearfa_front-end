import apiURL from'../APIconfig';
import axios from 'axios';


//---------------The GET Request-------------------

// Get all service depend on UserId and if the ServiceState is closed
export const getAllClosedService = (id) => {
    return axios.get(`${apiURL}/Find/All/closed/Service/${id}`);
  }   
// Find all User info depend on Id
export const userInfo = (id) =>{
    return axios.get(`${apiURL}/customer/${id}`);
  }     

//---------------The PATCH Request-------------------  
// update the ServiceState with close state
export const closeService = (id) => {
    return axios({
      method: 'patch',
      url: apiURL + `/UpdateService/${id}`,
      data:{
        ServiceState: 'Closed',
      }
    })
  }  