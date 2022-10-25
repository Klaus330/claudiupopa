<script setup>
import TheProjects from '../components/TheProjects.vue'
import TheNavbar from "@/components/TheNavbar.vue"
import TheFooter from '../components/TheFooter.vue'
</script>

<template>
  <TheNavbar />

  <main class="min-h-screen">
    <TheProjects />
  </main>

  <TheFooter />
</template>
