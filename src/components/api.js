import apiURL from '../APIconfig';
import axios from 'axios';


//---------------The GET Request-------------------

// Get ALl Customer RequestService By Customer ID
export const getRequestService = (id) => {
  return axios.get(`${apiURL}/customer/RequestService/${id}`);
}  
// Get all service depend on UserId and if the ServiceState is closed
export const getAllClosedService = (id) => {
  return axios.get(`${apiURL}/Find/All/closed/Service/${id}`);
}
// Find all User info depend on Id
export const userInfo = (id) => {
  return axios.get(`${apiURL}/customer/${id}`);
}

// Find all service depend on WorkerId
export const WorkerService = (id) => {
  return axios.get(`${apiURL}/service/${id}`);
}


// Get all service depend on UserId and if the ServiceState is Waiting
export const getAllServiceInWaitingList = (id) => {
  return axios.get(`${apiURL}/Find/All/Waiting/Service/${id}`);
}

// Get all service depend on UserId and if the ServiceState is OnProgress
export const getAllServiceInOnProgress = (id) => {
  return axios.get(`${apiURL}/Find/All/OnProgress/Service/${id}`);
}

//---------------The PATCH Request-------------------  
// update the ServiceState with close state
export const closeService = (id) => {

  return axios({
    method: 'patch',
    url: apiURL + `/UpdateService/${id}`,
    data: {
      ServiceState: 'Closed',
    }
  })
}


// Update the Service State to Waiting
export const WaitingService = (id, req) => {
  return axios({
    method: 'patch',
    url: apiURL + `/UpdateService/${id}`,
    data: {
      ServiceState: 'Waiting',
    }
  })
}

//Find the Service and Update the Price for the service By Service Id
//and Add The worker who add the Price to the Service 
export const AddPriceToTheService = (req, id) => {
  return axios({
    method: 'patch',
    url: apiURL + `/PassService/${id}`,
    data: {
      ServicePrice: req.ServicePrice,
      ServicesEmp: req.ServicesEmp
    }
  })
}

//Find the Service  by id and Update Stat to be OnProgress 
export const OnProgressService = (id ,req) => {
  return axios({
    method: 'patch',
    url: apiURL + `/UpdateService/${id}`,
    data:{
      ServiceState: 'OnProgress',
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
    data: {
      FullName: req.FullName,
      Email: req.Email,
      Username: req.Username,
      password: req.password,
      Phone: req.Phone,
      UserType: req.UserType,
      Worker: req.Worker
    }
  })
}

//Add new Service 
export const AddNewService = (req, id) => {
  return axios({
    method: 'POST',
    url: apiURL + `/${id}`,
    data: {
      ServiceType: req.ServiceType,
      ServiceDescription: req.ServiceDescription,
      ServiceState: "Open",
    }

  });
}