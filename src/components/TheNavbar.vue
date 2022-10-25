<script setup>
import { ref } from "vue"
let isMenuOpen = ref(false);

const openMenu = () => {
  isMenuOpen.value = true;
  document.dispatchEvent(new CustomEvent('blockScrolling'))
}

const closeMenu = () => {
  isMenuOpen.value = false;
  document.dispatchEvent(new CustomEvent('unblockScrolling'))
}

</script>

<template>
  <div class="container mx-auto flex items-center justify-between pt-10 px-4 xl:px-0 font-mono text-white">
    <div>
      <h1 class="">
        <RouterLink
          to="/"
          class="text-blueish-light hover:text-blue-300 drop-shadow-lg drop-shadow-blue-300"
        >
          .claudiu()
        </RouterLink>
      </h1>
    </div>
    <ul class="md:flex justify-around items-center hidden md:gap-10">
      <li>
        <RouterLink
          to="/projects"
          class="text-blueish-light hover:text-blue-300"
        >
          .projects()
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/about"
          class="text-blueish-light hover:text-blue-300"
        >
          .about()
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/contact"
          class="text-blueish-light hover:text-blue-300"
        >
          .contact()
        </RouterLink>
      </li>
      <li>
        <a
          href="https://term.claudiupopa.ro"
          target="_blank"
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
      class="block md:hidden w-8 h-8 text-blueish-light hover:text-blue-300"
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
    <div class="flex flex-col items-center justify-center gap-y-10 text-4xl font-bold text-blueish-light h-full">
      <RouterLink
        to="/"
        class="drop-shadow-2xl hover:text-blue-300"
      >
        .home()
      </RouterLink>
      <RouterLink
        to="/projects"
        class="drop-shadow-2xl hover:text-blue-300"
      >
        .projects()
      </RouterLink>
      <RouterLink
        to="/about"
        class="drop-shadow-2xl hover:text-blue-300"
      >
        .about()
      </RouterLink>
      <RouterLink
        to="/contact"
        class="drop-shadow-2xl hover:text-blue-300"
      >
        .contact()
      </RouterLink>
    </div>
  </div>
</template>