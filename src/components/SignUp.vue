<template>
  <div class="container">
    <form action="" @submit.prevent="register">
      <FormFloating
        inputType="email"
        inputId="floatingEmail"
        placeHolder="Email"
        labelText="Emaill"
        v-model="credential.email"
      >
      </FormFloating>
      <FormFloating
        inputType="password"
        inputId="floatingPassword"
        placeHolder="password"
        labelText="Password"
        :inputClass="passwordMismatchClass"
        v-model="credential.password"
      >
      </FormFloating>
      <FormFloating
        inputType="password"
        inputId="floatingConfirmPassword"
        placeHolder="Confirm Password"
        labelText="Confirm Password"
        :inputClass="passwordMismatchClass"
        v-model="credential.passwordConfirm"
      >
      </FormFloating>
      <FormFloating
        inputType="text"
        inputId="floatingFirstName"
        placeHolder="First Name"
        labelText="First Name"
        v-model="credential.firstName"
      >
      </FormFloating>
      <FormFloating
        inputType="text"
        inputId="floatingLastName"
        placeHolder="Last Name"
        labelText="Last Name"
        v-model="credential.lastName"
      >
      </FormFloating>
      <div v-if="isPasswordMismatch" class="alert mt-5 alert-warning">
        Passwords do not match!
      </div>
      <button class="btn w-100 mt-2 btn-primary" :disabled="isFieldNull">
        sign up
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, computed } from "vue"
import { useRouter } from "vue-router"
import { useUserStore } from "../stores/userStore"
import authService from "../services/authService"
import FormFloating from "./FormFloating.vue"

export default {
  name: "signup",
  components: {
    FormFloating,
  },
  setup() {
    const router = useRouter()
    const credential = reactive({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      passwordConfirm: "",
    })
    const userStore = useUserStore()

    const isFieldNull = computed(() => {
      return (
        credential.email === "" ||
        credential.password === "" ||
        credential.firstName === "" ||
        credential.lastName === ""
      )
    })

    const isPasswordMismatch = computed(() => {
      return credential.password !== credential.passwordConfirm
    })
    const passwordMismatchClass = computed(() => {
      return {
        "form-control": true,
        "is-invalid": isPasswordMismatch.value,
      }
    })

    const register = async () => {
      const response = await authService.register(credential, isFieldNull.value)
      console.log(response)
      if (response.data.user) {
        userStore.setUser(response.data.user)
        router.push("/")
      }
    }

    return {
      isPasswordMismatch,
      passwordMismatchClass,
      isFieldNull,
      register,
      credential,
    }
  },
}
</script>

<style scoped>
.is-invalid {
  border-color: red;
}
</style>
