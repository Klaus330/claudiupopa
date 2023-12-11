<template>
  <div
    class="p-10 flex items-center justify-center text-white"
    style="background: #20242c"
  >
    <p>
      Made with <span class="fa fa-heart text-red-100">❤️</span> by <RouterLink
        to="/"
        class="font-bold text-blue-400 underline-none"
      >
        Claudiu Popa
      </RouterLink> @ {{(new Date()).getFullYear()}}
    </p>
  </div>
</template>