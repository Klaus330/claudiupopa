<script setup>
import TheHeader from "@/components/landing/TheHeader.vue";
import ContactForm from "@/components/ContactForm.vue";

let headerChoice = Math.floor(Math.random() * 3)
</script>

<template>
  <TheHeader />
  <section class="bg-blackish-dark p-10">
    <h2 class="text-4xl text-white flex items-center justify-center w-full font-bold gap-1 py-5">
      <span v-show="headerChoice == 0"><span class="text-yellowish">import</span> <span class="text-redish">Experience</span> <span class="text-yellowish">from</span> <span><span class="text-greenish">'</span><span class="text-blueish">experience</span><span class="text-greenish">'</span></span></span>
      <span v-show="headerChoice == 1"><span class="text-yellowish">log</span><span>(<span class="text-redish">experience</span>)</span></span>
      <span v-show="headerChoice == 2"><span class="text-yellowish">${</span><span class="text-redish">experience</span><span class="text-yellowish">}</span></span>
    </h2>
    <div class="min-h-screen py-10 w-full">
      
    </div>
  </section>
  <ContactForm class=" py-14 lg:py-64 min-h-screen " />
</template>