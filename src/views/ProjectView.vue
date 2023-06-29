<script setup>
import TheProjects from '../components/TheProjects.vue'
import TheNavbar from "@/components/TheNavbar.vue"
import TheFooter from '../components/TheFooter.vue'
defineEmits(['openTerminal'])

</script>

<template>
  <TheNavbar @open-terminal="$emit('openTerminal')" />

  <main class="min-h-screen">
    <TheProjects />
  </main>

  <TheFooter />
</template>
