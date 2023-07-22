<template>
  <v-app-bar>
    <template v-slot:prepend>
      <v-app-bar-nav-icon icon="mdi:mdi-heart">
        <v-icon icon="mdi:mdi-home"></v-icon>
      </v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Uni</v-app-bar-title>
    <template v-slot:append>
      <v-icon icon="mdi:mdi-account"></v-icon>
    </template>
  </v-app-bar>
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
      await logOut()
    }

    return {
      nav,
      linkStyle,
      handleLogout,
      userStore,
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
