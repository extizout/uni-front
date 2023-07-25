<template>
  <v-app>
    <v-container>
      <v-btn icon @click="handleClick">
        <v-icon icon="mdi:mdi-home"></v-icon>
      </v-btn>



      <test v-model="showDialog"></test> 
    </v-container>
  </v-app>
</template>

<script setup>
import test from "./test.vue"
import { ref } from "vue"

const showDialog = ref(false)
function handleClick() {
  showDialog.value = !showDialog.value
}

</script>
