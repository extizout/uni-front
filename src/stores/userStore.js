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
    createDate: "",
  });

  const activeRole = computed(() => {
    return user.role;
  });

  const name = computed(() => {
    if (user.firstName !== undefined || user.lastName !== undefined) {
      return user.firstName + " " + user.lastName;
    }
    return null;
  });

  function $reset() {
    user.id = "";
    user.email = "";
    user.role = "";
    user.firstName = "";
    user.lastName = "";
    user.createDate = "";

    // user = {
    //   ...user = ""
    // }
  }

  async function getUserData() {
    try {
      const responseData = await uniAPI.getUser();
      setUser(responseData);
    } catch (error) {
      console.error("Error: ", error);
    }
  }

  async function setUser(resObject) {
    const { userId: id, ...rest } = resObject;

    // user = {
    //   ...user,
    //   id, email, role, firstName, lastName,createdDate
    // }
    user.id = id;
    user.email = rest.email;
    user.role = rest.role;
    user.firstName = rest.firstName;
    user.lastName = rest.lastName;
    user.createDate = rest.createDate;
  }

  return {
    user,
    getUserData,
    setUser,
    name,
    activeRole,
    $reset,
  };
});

export default {
  useUserStore,
};
