<template>
  <div>Hello From {{ nav }}</div>

  <nav class="nav nav-masthead container">
    <router-link to="/">Home</router-link>
    <router-link to="/signin">Login</router-link>
    <router-link to="/signup">Sign up</router-link>
    <router-link to="/user">User</router-link>
    <a href="" v-if="userStore.user.id !== ''" @click.prevent="handleLogout">Log out</a>
  </nav>
</template>

<script>
import { ref, defineProps, onMounted } from "vue"
import { logOut } from "../services/authService"
import { useUserStore } from "../stores/userStore"


export default {
  name: "Navbar",
  setup() {
    const nav = ref("Uni")
    const linkStyle = ref("link-style")
    const userStore = useUserStore()

    const handleLogout = async () => {
      userStore.$reset()
      await logOut();
    }

    return {
      nav,
      linkStyle,
      handleLogout,
      userStore
    }
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  color: red;
}
</style>
