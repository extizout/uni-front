<template>
  <v-navigation-drawer
    v-model="drawer"
    elevation="20"
    rail
    expand-on-hover
    class="h-100"
    v-on="$attrs"
  >
    <v-list v-if="userStore.user.id !== ''">
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
        :title="userStore.name"
        :subtitle="userStore.activeRole"
      ></v-list-item>
    </v-list>

    <!-- Logo for uni app -->
    <v-list v-else>
      <v-list-item title="Uni" subtitle="Welcome">
        <template v-slot:prepend>
          <v-icon color="primary" :icon="mdiPenguin"></v-icon>
        </template>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        v-for="(icon, index) in icons"
        :prepend-icon="icon.icon"
        :title="icon.title"
        :to="icon.route"
        :value="icon.title"
        :key="index"
      >
      </v-list-item>
    </v-list>

    <template v-slot:append v-if="true">
      <div class="pa-2">
        <v-btn @click.stop="handleLogout" block>
          <v-icon :icon="mdiLogout" color="darken-grey"></v-icon>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue"
import { mdiLogin, mdiLogout, mdiAccountPlus, mdiPenguin } from "@mdi/js"
import { logOut } from "../services/authService"
import { useUserStore } from "../stores/userStore"

const userStore = useUserStore()

const handleLogout = async () => {
  userStore.$reset()
  await logOut()
}
const isAuth = false
const isAdmin = ref(false)
const drawer = ref(null)
const icons = [
  {
    icon: "mdi:mdi-home",
    title: "Home",
    route: "/",
    isAdmin: false,
  },
  {
    icon: "mdi:mdi-account",
    title: "Profile",
    route: "/user",
    isAdmin: false,
  },
  {
    icon: mdiLogin,
    title: "Login",
    route: "/signin",
    isAdmin: false,
  },
  {
    icon: mdiAccountPlus,
    title: "Signup",
    route: "/signup",
    isAdmin: false,
  },
  {
    icon: "mdi:mdi-account-group",
    title: "Admin Dashboard",
    route: "admin",
    isAdmin: isAdmin,
  },
]
</script>
