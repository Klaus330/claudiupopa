<script setup>
import TheNavbar from "@/components/TheNavbar.vue";
import TheGameOfLife from "./TheGameOfLife.vue";
import { ref } from 'vue';

let isGamePaused = ref(false);
let setButtonImage = ref('pause')

let game = ref(null)
let toggleGame = () => {
  game.value.toggle()
  isGamePaused.value = !isGamePaused.value;

  setButtonImage.value = isGamePaused.value ? 'play' : 'pause';
}


</script>

<template>
  <header class="h-screen w-full">
    <div class="w-full min-h-screen -z-10 absolute top-0 left-0">
      <TheGameOfLife ref="game" />
    </div>
    <TheNavbar class="z-10" />

    <div class="container mx-auto -mt-20 px-5 text-5xl xl:text-8xl flex flex-col gap-y-5 h-full w-full justify-center text-white font-normal font-mono">
      <h2>Hello,</h2>
      <h3>I am <span class="font-bold text-blue-500">Claudiu</span>...</h3>
      <h3>a <span class="font-light italic text-green-400">`software developer`</span></h3>
    </div>

    <button
      class="absolute bottom-5 right-5 text-white w-10 h-10"
      @click="toggleGame"
    >
      <img
        :src="`/${setButtonImage}.svg`"
        alt="Pause the game of life"
      >
    </button>
  </header>
</template>