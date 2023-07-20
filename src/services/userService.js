import api from "../services/api";

const uniEndpoint = api.uniAPI();

//translate communication between backend and vue because name assign
const translateBackName = async (resObject) => {
  const {
    User_Id: id,
    User_Email: email,
    User_Role: role,
    User_Firstname: firstName,
    User_Lastname: lastName,
    User_Create_At: createdDate,
  } = resObject;

  const user = {
    id: id,
    email: email,
    role: role,
    firstName: firstName,
    lastName: lastName,
    createdDate: createdDate,
  };
  return user
};

export const getAllUsers = async () => {
  try {
    const response = await uniEndpoint.get("/user");
    console.log("Response (getAllUsers): ", response.data.results);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};
export default {
  getAllUsers,
};
