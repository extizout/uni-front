<script setup>
import { onBeforeMount} from "vue"
import {useUserStore} from "../stores/userStore"
import MemberList from "./MemberList.vue"


const userStore = useUserStore()

onBeforeMount( async () => {

})

</script>

<template>
  <div class="container">
    <div class="dasboard" v-if="userStore.user.role === 'member'">
    <MemberList></MemberList>
    </div>
    <div v-else>
      <h1>You dont have permission.</h1>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #1D5B79;
}
</style>
