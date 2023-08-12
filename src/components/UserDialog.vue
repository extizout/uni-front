<template>
  <v-card justify="center">
    <v-card-text>
      <v-card-title>
        <span class="text-h5">
          User {{ user.firstName + " " + user.lastName }}
        </span>
      </v-card-title>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              label="First name*"
              v-model="user.firstName"
              prepend-inner-icon="mdi:mdi-account"
              readonly
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              label="Last name*"
              v-model="user.lastName"
              prepend-inner-icon="mdi:mdi-account"
              hint="example of persistent helper text"
              persistent-hint
              readonly
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Email*"
              v-model="user.email"
              prepend-inner-icon="mdi:mdi-email"
              disable="true"
              readonly
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-autocomplete label="Role" v-model="user.role" :items="roleList">
            </v-autocomplete>
          </v-col>
          <v-col cols="12" sm="6">
            <v-autocomplete
              label="Sex"
              v-model="user.sex"
              prepend-inner-icon="mdi:mdi-gender-transgender"
              :items="sexList"
            ></v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
      <small>*indicates required field</small>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="closeDialog"> Cancle </v-btn>
      <v-btn color="primary" @click="update">Update</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { reactive, defineProps, defineEmits, onMounted } from "vue"
import userService from "../services/userService"

let { props } = defineProps({
  props: {
    type: Object,
  },
})
let user = reactive({
  userId: "",
  email: "",
  firstName: "",
  lastName: "",
  role: "",
  sex: "",
})

onMounted(() => {
  // Loop through the keys of props and assign the corresponding values to user
  // for ( variable in object) where variable is the variable that represents each property name, and object is the object being looped through.
  for (const key in props) {
    // Determines whether an object has a property with the specified name.
    if (props.hasOwnProperty(key)) {
      user[key] = props[key]
    }
  }
})

//Declare custom event emitter name closeDialog
const emit = defineEmits(["closeDialog"])

const sexList = ["Female", "Male"]
const roleList = ["member", "staff", "admin"]

//function to emit closeDialog event (signal) with user to event listener name closeDialog or close-dialog
function closeDialog() {
  emit("closeDialog", user)
}

const update = async () => {
  try {
    const response = await userService.putRoleAndSex(user)
    if (response.data) {
      emit("closeDialog", user)
    }
  } catch (error) {
    console.error(error)
  }
}
</script>
