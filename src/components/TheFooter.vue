<template>
  <div
    class="p-10 flex items-center justify-center text-white"
    style="background: #20242c"
  >
    <p>
      Website created by <RouterLink
        to="/"
        class="font-bold text-blue-400"
      >
        Claudiu Popa
      </RouterLink> @ {{(new Date()).getFullYear()}}
    </p>
  </div>
</template>