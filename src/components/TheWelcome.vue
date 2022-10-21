<script setup>
import TheHeader from "@/components/landing/TheHeader.vue";

</script>

<template>
  <TheHeader />

  <section
    id="contact"
    class="px-4 py-10"
    style="background: #2E3440"
  >
    <div class="w-full flex items-center justify-center mb-5">
      <h2 class="text-4xl text-blue-400">
        .contact()
      </h2>
    </div>

    <div class="p-5 container mx-auto">
      <form>
        <div class="flex justify-between w-full gap-3">
          <div class="w-full">
            <input
              type="text"
              name="name"
              placeholder="Name"
              class="shadow appearance-none border-b-2 rounded w-full py-3 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline border-blue-500 bg-transparent"
            >
          </div>
          <div class="w-full">
            <input
              type="email"
              name="email"
              placeholder="Email"
              class="shadow appearance-none border-b-2 border-blue-500 bg-transparent rounded w-full py-3 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
            >     
          </div>
        </div>
        <div class="mt-4">
          <textarea 
            placeholder="Message"
            class="shadow appearance-none border-b-2 border-blue-500 bg-transparent rounded w-full h-80 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="flex justify-end w-full mt-4">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </section>
</template>