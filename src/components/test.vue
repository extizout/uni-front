<template>
  <v-dialog>
    <v-card width="400">
      <template #title> This is a title </template>

      <template #subtitle> This is a subtitle </template>

      <template #text> This is content </template>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn icon="mdi:mdi-door" @click="handleClick"></v-btn
      ></v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, defineEmits } from "vue"
const emit = defineEmits(["update:modelValue"])
const value = ref(false)
const handleClick = async () => {
  console.log("Clicked")
  emit("update:modelValue", value.value)
}
</script>

<style lang="scss" scoped></style>
