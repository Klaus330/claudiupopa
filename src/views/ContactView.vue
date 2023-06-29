<script setup>
    import TheNavbar from "@/components/TheNavbar.vue"
    import ContactForm from "@/components/ContactForm.vue";
defineEmits(['openTerminal'])

</script>
<template>
    <TheNavbar @open-terminal="$emit('openTerminal')"/>
  <div class="bg-blackish h-full flex items-center jusitfy-center mx-auto">
    <ContactForm />
  </div>
</template>