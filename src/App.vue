<script setup>
import Navbar from "./components/Navbar.vue"
</script>

<template>
  <div class="bgBackground">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<style>
body {
  background-color: #e8ecef !important;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
