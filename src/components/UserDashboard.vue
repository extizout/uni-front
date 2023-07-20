<template>
  <v-app>
    <v-container>
      <v-btn icon>
        <v-icon icon="mdi-home"></v-icon>
      </v-btn>


      <v-card v-for="item in items" class="mx-auto" max-width="300">
        <v-list :items="item"></v-list>
      </v-card>

    </v-container>
  </v-app>
</template>

<script setup>
const items = ['a','b','c']
</script>

<style scoped>
</style>
