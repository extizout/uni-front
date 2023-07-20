import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import uniAPI from "../services/authService";

export const useUserStore = defineStore("users", () => {
  let user = reactive({
    id: "",
    email: "",
    role: "",
    firstName: "",
    lastName: "",
    createdDate: "",
  });

  const activeRole = computed(() => {
    return user.role
  })

  const name = computed(() => {
    if (user.firstName !== undefined || user.lastName !== undefined) {
      return user.firstName + " " + user.lastName;
    }
    return null
  });

  function $reset() {
    user.id = "";
    user.email = "";
    user.role = "";
    user.firstName = "";
    user.lastName = "";
    user.createdDate = "";

    // user = {
    //   ...user = ""
    // }
  }

  async function getUserData() {
    const responseData = await uniAPI.getUser();
    if (!responseData) {
      return null
    }
    setUser(responseData)
  }

  async function setUser(resObject){
    const {
      User_Id: id,
      User_Email: email,
      User_Role: role,
      User_Firstname: firstName,
      User_Lastname: lastName,
      User_Create_At: createdDate,
    } = resObject;

    // user = {
    //   ...user,
    //   id, email, role, firstName, lastName,createdDate
    // }
    user.id = id;
    user.email = email;
    user.role = role;
    user.firstName = firstName;
    user.lastName = lastName;
    user.createdDate = createdDate;
  }

  return {
    user,
    getUserData,
    setUser,
    name,
    activeRole,
    $reset
  };
});

export default {
  useUserStore,
};
