<script setup>
import TheHeader from "@/components/landing/TheHeader.vue";
import ContactForm from "@/components/ContactForm.vue";
import TheExperience from "@/components/TheExperience.vue";
import TheTerminalSection from "@/components/TheTerminalSection.vue";
import TheProjects from "@/components/TheProjects.vue";
</script>

<template>
  <TheHeader />
  <TheExperience />
  <TheProjects />
  <TheTerminalSection class="bg-blackish-dark" />
  <ContactForm class=" py-14 lg:py-64 min-h-screen " />
</template>