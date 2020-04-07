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


//---------------The DELETE Request-------------------   
 // delete One Service by ServiceID
 export const deleteOneService = (id) => {
    return axios({
      method: 'delete',
      url: apiURL + `/DeleteService/${id}`,
    })
  } 



//---------------The POST Request-------------------  
  //Add new user 
  export const AddNewCustomer = req => {
    return axios({
      method: 'POST',
      url: apiURL + '/customer/register',
      data:{
          FullName: req.FullName,
          Email: req.Email,
          Username:req.Username,
          password: req.password,
          Phone: req.Phone,
          UserType: req.UserType,
          Worker: req.Worker
      }
    })
  }