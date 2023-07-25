<template>
  <v-sheet
    color="info"
    class="align-center justify-center text-center"
    elevation="8"
    height="500"
    width="100%"
    rounded
  >
    <v-table theme="dark" fixed-header>
      <thead>
        <tr>
          <th class="text-center">ID</th>
          <th class="text-center">Name</th>
          <th class="text-center">Email</th>
          <th class="text-center">Role</th>
          <th class="text-center">Create At</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ user.User_Id }}</td>
          <td>{{ user.User_Firstname + " " + user.User_Lastname }}</td>
          <td>{{ user.User_Email }}</td>
          <td>{{ user.User_Role }}</td>
          <td>{{ user.User_Create_At }}</td>
          <td>
            <v-btn @click="handleDialog(user)" color="red">
              <v-icon :icon="mdiPencil"></v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <!-- Vuetify Dialog -->
    <div>
      <v-dialog v-model="dialog" persistent width="auto">
        <UserDialog
          @close-dialog="handleDialog"
          :props="state.user"
        ></UserDialog>
      </v-dialog>
    </div>
  </v-sheet>
</template>

<script setup>
import { mdiAccount, mdiBackspace, mdiDelete, mdiPencil } from "@mdi/js"
import { onBeforeMount, reactive, computed, toRefs, ref } from "vue"
import userService from "../services/userService"
import UserDialog from "./UserDialog.vue"

const state = reactive({
  users: [],
  user: [],
})

onBeforeMount(async () => {
  const response = await userService.getAllUsers()
  state.users = response
})

const { users } = toRefs(state)

const dialog = ref(false)

const handleDialog = async (user) => {
  dialog.value = !dialog.value
  state.user = user
  console.log("State.user : ", state.user)
}
</script>

<style lang="css" scoped></style>
