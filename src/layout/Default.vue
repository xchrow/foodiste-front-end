<script setup>
import AppBar from '../components/AppbarNav.vue'
import SideBar from '../components/SidebarNav.vue'
</script>


<template>
  <v-layout class="rounded rounded-md">

    <AppBar />

    <SideBar />

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <router-view/>
    </v-main>

  </v-layout>
</template>

