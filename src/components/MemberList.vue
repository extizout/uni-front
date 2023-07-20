<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Role</th>
          <th>Created Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ user.User_Id }}</td>
          <td>{{ user.User_Email }}</td>
          <td>{{ user.User_Firstname }}</td>
          <td>{{ user.User_Lastname}}</td>
          <td>{{ user.User_Role }}</td>
          <td>{{ user.User_Create_At }}</td>
          <td>
            <button @click="editUser(user)">Edit</button>
            <button @click="removeUser(user)">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
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

const editUser = (user) => {
  // Handle edit user logic
  console.log("edit: ", user)
}

const removeUser = (user) => {
  // Handle remove user logic
  console.log("remove: ", user)
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
