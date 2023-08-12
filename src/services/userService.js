import api from "../services/api";

const uniEndpoint = api.uniAPI();

export const getAllUsers = async () => {
  try {
    const response = await uniEndpoint.get("/user");
    console.log("Response (getAllUsers): ", response.data.results);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const putRoleAndSex = async (credentials) => {
  try {
    const credential = {
      userId: credentials.userId,
      role: credentials.role,
      sex: credentials.sex,
    };

    const response = await uniEndpoint.put(
      `/user/role&sex/${credential.userId}`,
      credential
    );
    return response;
  } catch (error) {
    alert("Invalid Credential.");
  }
};

export default {
  getAllUsers,
  putRoleAndSex,
};
