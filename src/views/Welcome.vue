<script setup>
import { onBeforeMount } from "vue"
import { useUserStore } from "../stores/userStore"
import Member from "../components/MemberList.vue"
const userStore = useUserStore()

onBeforeMount(async () => {})
</script>

<template>
  <Member></Member>
</template>

<style scoped></style>
