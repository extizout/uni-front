import axios from "axios";

export default {
    uniAPI(){
      return axios.create({
         withCredentials: true,
         baseURL: 'http://localhost:3000'
      })
   },
} 
