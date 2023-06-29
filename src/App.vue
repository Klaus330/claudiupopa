<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Terminal from "@/components/Terminal.vue";

import { ref } from "vue";

let showTerminal = ref(false); //h-screen overflow-hidden

function openTerminal() {
  console.log('hit')
  showTerminal.value = true;
  document.dispatchEvent(new CustomEvent("blockScrolling"));
}
</script>

<template>
  <RouterView @open-terminal="openTerminal()"/>
  <Terminal v-if="showTerminal" @close-terminal="showTerminal = false" />
</template>

<style>
 @import url("./assets/main.css");
</style>