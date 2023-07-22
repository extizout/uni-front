<script setup>
import Navbar from "./components/Navbar.vue"
</script>

<template>
    <v-app theme="">
      <navbar></navbar>
      <v-main>
        <v-container fluid>
          <router-view class=""></router-view>
        </v-container>
      </v-main>
    </v-app>
</template>

<style></style>
