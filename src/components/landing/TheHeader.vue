<script setup>
import TheNavbar from "@/components/TheNavbar.vue";
import TheGameOfLife from "./TheGameOfLife.vue";
import { ref, onMounted } from 'vue';

let isGamePaused = ref(false);
let setButtonImage = ref('pause')

let game = ref(null)
let toggleGame = () => {
  game.value.toggle()
  isGamePaused.value = !isGamePaused.value;

  setButtonImage.value = isGamePaused.value ? 'play' : 'pause';
}

let titles = ["software developer", 'web craftsman', "tech enthusiast"]
let text = ref("")
let index = 0;
let typedTextElement = ref(null)
let timeoutIds = []
let typeText = () => {
  timeoutIds.forEach(timeout => clearTimeout(timeout))
  text.value = ''
  typedTextElement.value.classList.remove("bg-white", "text-black")
  if(index === titles.length)
  {
    index = 0
  }
  
  let test = titles[index]
  index++;

  for (let i = 0; i < test.length; i++) {
    timeoutIds.push(setTimeout(() => {
      text.value = text.value + test[i]
      if(i == test.length - 1){
        timeoutIds.push(setTimeout(() => {
          typedTextElement.value.classList.add("bg-white", "text-black")
        },1000))

        timeoutIds.push(setTimeout(() => {
          document.dispatchEvent(new CustomEvent('typetext'))
        }, 1200))
      }
    }, 350 * i))
  }
}

document.addEventListener('typetext', typeText)

onMounted(() => {
  typeText()
})
</script>

<template>
  <header class="h-screen w-full">
    <div class="w-full min-h-screen -z-10 absolute top-0 left-0">
      <TheGameOfLife ref="game" />
    </div>
    <TheNavbar class="z-10" />

    <div class="container mx-auto -mt-20 px-5 text-5xl xl:text-8xl flex flex-col gap-y-5 h-full w-full justify-center text-white font-normal font-mono">
      <h2 class="drop-shadow">
        Hello,
      </h2>
      <h3 class="drop-shadow">
        I am <span class="font-bold text-blueish-light">Claudiu</span>...
      </h3>
      <h3 class="drop-shadow">
        a <span class="font-light italic text-green-400">`<span
          id="typed-text"
          ref="typedTextElement"
          v-text="text"
        />`</span>
      </h3>
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