<script setup>
import { onBeforeMount} from "vue"
import {useUserStore} from "../stores/userStore"
import Member from "../components/MemberList.vue"

const userStore = useUserStore()

onBeforeMount( async () => {
})

</script>

<template>
    <!-- <div class="dasboard" v-if="userStore.user.role === 'member'"> -->
    <Member></Member>
    <!-- </div> -->
    <!-- <div v-else> -->
    <!--   <h1>You can sign in or sign up ..</h1> -->
    <!-- </div> -->

</template>

<style scoped>
.container {
  background-color: #1D5B79;
}
</style>
