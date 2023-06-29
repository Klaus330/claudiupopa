<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import TheFooter from '../components/TheFooter.vue'
defineEmits(['openTerminal'])

</script>

<template>
  <main>
    <TheWelcome @open-terminal="$emit('openTerminal')"/>
  </main>

  <TheFooter />
</template>
