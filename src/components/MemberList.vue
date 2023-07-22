<template>
  <v-sheet
    color="info"
    class="align-center justify-center "
    elevation="8"
    height="500"
    width="100%"
    rounded
  >
    <v-table theme="dark" fixed-header>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Name</th>
          <th class="text-left">Email</th>
          <th class="text-left">Role</th>
          <th class="text-left">Create At</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ user.User_Id }}</td>
          <td>{{ user.User_Email }}</td>
          <td>{{ user.User_Firstname }}</td>
          <td>{{ user.User_Lastname }}</td>
          <td>{{ user.User_Role }}</td>
          <td>{{ user.User_Create_At }}</td>
          <td>
            <v-btn @click="dialog(user)"></v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-sheet>
</template>

<script setup>
// import { mdiAccount, mdiBackspace, mdiDelete, mdiPencil } from "@mdi/js"
import { onBeforeMount, reactive, computed, toRefs } from "vue"
import userService from "../services/userService"

const state = reactive({
  users: [],
})

onBeforeMount(async () => {
  const response = await userService.getAllUsers()
  state.users = response
})

const { users } = toRefs(state)

const dialog = (user) => {
  console.log("Dialog info: ", user)
}
</script>

<style lang="css" scoped>
.container {
  display: flex;
  width: 100%;
}

table {
  width: 100%;
}
</style>
