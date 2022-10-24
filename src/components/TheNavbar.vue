<script setup>

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
        >
          .projects()
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/about"
          class="text-blue-400 hover:text-blue-300"
        >
          .about()
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/contact"
          class="text-blue-400 hover:text-blue-300"
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
    <span class="block md:hidden w-8 h-8 text-blue-400 hover:text-blue-300">
      <img
        src="@/assets/images/menu.svg"
        alt="Open the menu"
      >
    </span>
  </div>
</template>