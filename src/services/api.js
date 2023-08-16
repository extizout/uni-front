import axios from "axios";

const uniApiUrl = import.meta.env.VITE_UNI_API_URL || "http://localhost:3000";

export default {
  uniAPI() {
    return axios.create({
      withCredentials: true,
      baseURL: uniApiUrl,
    });
  },
};
