<script setup>
import { ref } from "vue"
import { useRoute } from "vue-router";
let isMenuOpen = ref(false);

const openMenu = () => {
  isMenuOpen.value = true;
  document.dispatchEvent(new CustomEvent('blockScrolling'))
}

const closeMenu = () => {
  isMenuOpen.value = false;
  document.dispatchEvent(new CustomEvent('unblockScrolling'))
}

defineEmits(['openTerminal'])

let route = useRoute()
</script>

<template>
  <div class="container mx-auto flex items-center justify-between pt-10 px-4 xl:px-0 font-mono text-white">
    <div>
      <h1 class="">
        <RouterLink
          to="/"
          class="text-blue-400 hover:text-blue-300 drop-shadow-lg drop-shadow-blue-300"
        >
          .claudiu()
        </RouterLink>
      </h1>
    </div>
    <ul class="md:flex justify-around items-center hidden md:gap-10">
      <li>
        <RouterLink
          to="/projects"
          class="text-blue-400 hover:text-blue-300"
          :class="route.name === 'projects' ? 'text-blue-300 underline' : ''"
        >
          .projects()
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/about"
          class="text-blue-400 hover:text-blue-300"
          :class="route.name === 'about' ? 'text-blue-300 underline' : ''"
        >
          .about()
        </RouterLink>
      </li>
      <li>
        <RouterLink
            to="/blog"
            class="text-blue-400 hover:text-blue-300"
            :class="route.name === 'blog' ? 'text-blue-300 underline' : ''"
        >
          .blog()
        </RouterLink>
      </li>
      <li>
        <a class="text-blue-400 hover:text-blue-300"
           target="_blank"
           href="/contents/resume.pdf">
          .resume()
        </a>
      </li>
      <li>
        <RouterLink
            to="/contact"
            class="text-blue-400 hover:text-blue-300"
            :class="route.name === 'contact' ? 'text-blue-300 underline' : ''"
        >
          .contact()
        </RouterLink>
      </li>
      <li>
        <a
          @click="$emit('openTerminal')"
          class="cursor-pointer"
        >
          <img
            class="w-8 h-8"
            src="@/assets/images/terminal.svg"
            alt="Open the temrinal version"
          >
        </a>
      </li>
    </ul>
    <span
      class="block md:hidden w-8 h-8 text-blue-400 hover:text-blue-300"
      @click="openMenu"
    >
      <img
        src="@/assets/images/menu.svg"
        alt="Open the menu"
      >
    </span>
  </div>

  <div
    v-show="isMenuOpen"
    class="absolute top-0 left-0 bg-blackish-dark text-white w-full h-full z-30"
  >
    <div class="w-full flex items-center justify-end p-5">
      <img
        src="@/assets/images/close.svg"
        alt="close menu"
        class="pointer"
        @click="closeMenu"
      >
    </div>
    <div class="flex flex-col items-center justify-center gap-y-10 text-4xl font-bold text-blue-400 h-full">
      <RouterLink
        to="/"
        class="drop-shadow-2xl hover:text-blue-300"
        @click="closeMenu"
      >
        .home()
      </RouterLink>
      <RouterLink
        to="/projects"
        class="drop-shadow-2xl hover:text-blue-300"
        @click="closeMenu"
      >
        .projects()
      </RouterLink>
      <RouterLink
          to="/about"
          class="drop-shadow-2xl hover:text-blue-300"
          @click="closeMenu"
      >
        .about()
      </RouterLink>
      <RouterLink
          to="/blog"
          class="text-blue-400 hover:text-blue-300"
          :class="route.name === 'blog' ? 'text-blue-300 underline' : ''"
      >
        .blog()
      </RouterLink>
      <a class="text-blue-400 hover:text-blue-300"
         target="_blank"
         href="/contents/resume.pdf">
        .resume()
      </a>
      <RouterLink
          to="/contact"
          class="drop-shadow-2xl hover:text-blue-300"
          @click="closeMenu"
      >
        .contact()
      </RouterLink>
    </div>
  </div>
</template>