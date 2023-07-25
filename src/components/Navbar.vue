<template>
  <SideBar v-model="drawer" />
  <!-- Navbar -->
  <v-app-bar>
    <template v-slot:prepend>
      <v-app-bar-nav-icon icon="mdi:mdi-home" @click="drawer = !drawer">
      </v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Uni</v-app-bar-title>
    <template v-slot:append>
      <v-chip color="primary" to="/">
        <v-icon start icon="mdi:mdi-account-circle-outline"></v-icon>
        {{ userStore.name }}
      </v-chip>
      <v-icon icon="mdi:mdi-account"></v-icon>
    </template>
  </v-app-bar>
</template>

<script setup>
import { ref, defineProps, onMounted } from "vue"
import { mdiLogin, mdiLogout, mdiAccountPlus, mdiPenguin } from "@mdi/js"
import { logOut } from "../services/authService"
import { useUserStore } from "../stores/userStore"
import SideBar from "./SideBar.vue"

const userStore = useUserStore()

const isAdmin = ref(false)
const drawer = ref(false)

const handleLogout = async () => {
  userStore.$reset()
  await logOut()
}
</script>

<style scoped></style>
