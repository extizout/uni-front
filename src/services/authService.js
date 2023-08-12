import api from "../services/api";

const uniEndpoint = api.uniAPI();

export const isAuthenticated = async () => {
  try {
    const response = await uniEndpoint.get("/auth/");
    return response.data;
  } catch (error) {
    console.error("ERROR: ", error.response.data);
    return error.response.data;
  }
};

export const getUser = async () => {
  try {
    const response = await uniEndpoint.get("/auth/getUser");
    return response.data.user;
  } catch (error) {
    throw {
      status: error.response.status,
      statusText: error.response.statusText,
    };
  }
};

export const register = async (credentials, inputValid) => {
  const credential = {
    email: credentials.email,
    password: credentials.password,
    firstName: credentials.firstName,
    lastName: credentials.lastName,
  };

  try {
    if (inputValid) {
      alert("Incorrect Field.");
    } else {
      const response = await uniEndpoint.post("/auth/signup", credential);
      return response;
    }
  } catch (error) {
    console.error(error);
    alert("Invalid Credential");
  }
};

export const logIn = async (credentials) => {
  const credential = {
    email: credentials.email,
    password: credentials.password,
  };

  try {
    const response = await uniEndpoint.post("/auth/login", credential);
    // console.log("Login Response :", response);
    return response;
  } catch (error) {
    if (error.response.status === 401) {
      // console.log({
      //   "Status": error.response.status,
      //   "Message": error.response.data
      // });
      alert("Invalid Credential");
    } else {
      alert("Invalid Credential");
    }
  }
};

export const logOut = async () => {
  try {
    const response = await uniEndpoint.post("/auth/logout", "");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default {
  isAuthenticated,
  logOut,
  logIn,
  getUser,
  register,
};
