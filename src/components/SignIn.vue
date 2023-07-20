<script setup>
import { reactive } from "vue"
import { useRouter } from "vue-router"
import FormFloating from "./FormFloating.vue"
import authService from "../services/authService"
import { useUserStore } from "../stores/userStore"

const credential = reactive({
  email: "",
  password: "",
})

const router = useRouter()
const userStore = useUserStore()



const logIn = async () => {
  const response = await authService.logIn(credential)
  console.log(response)
  if (response.data.user) {
    userStore.setUser(response.data.user);
    router.push("/");
  }
}

async function testAPI() {
  await axios
    .post("http://localhost:3000/auth/test", "", { withCredentials: true })
    .then((res) => {
      const { data } = res
      console.log(data)
    })
}

</script>

<template>
  <div class="container">
    <form action="" @submit.prevent="logIn">
      <FormFloating inputType="email" inputId="floatingEmail" placeHolder="email" labelText="Email"
        :modelValue="credential.email" @update="credential.email = $event">
      </FormFloating>
      <FormFloating inputType="password" inputId="floatingPassword" placeHolder="password" labelText="Password"
        :modelValue="credential.password" @update="credential.password = $event">
      </FormFloating>
      <div class="mt-2">
        <button class="btn btn-light">Sign In</button>
        <button class="btn btn-outline-secondary">
          <router-link to="/signup"> Sign up</router-link>
        </button>
      </div>
    </form>
    <button class="btn btn-outline-secondary" @click="testAPI">TestAPI</button>
  </div>
</template>

<style scoped>
.btn-light {
  margin-right: 1rem;
}
.container {
  display: flex;
  justify-content: center;
}
</style>
