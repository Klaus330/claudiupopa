<script setup>
  import ContactMorph from "@/components/ContactMorph.vue"
</script>

<template>
  <section
    id="contact"
    class="px-5 h-full w-full flex items-center justify-center bg-blackish"
  >
    <div class="lg:px-3 lg:px-0 lg:container lg:mx-auto flex flex-col lg:flex-row items-center justify-around lg:justify-center font-mono">
      <h2 class="text-blue-400 w-full flex items-center justify-center lg:hidden text-4xl mb-8">
        .contact()
      </h2>
      <div class="relative w-11/12 h-full">
        <ContactMorph />
      </div>
      <div class="lg:p-5 container mx-auto">
        <form>
          <div class="flex justify-between w-full gap-3">
            <div class="w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                class="appearance-none border-b-2 w-full py-3 px-3 leading-tight text-white focus:outline-none focus:shadow-outline border-blue-500 bg-transparent font-mono text-xl lg:text-3xl"
              >
            </div>
            <div class="w-full">
              <input
                type="email"
                name="email"
                placeholder="Email"
                class="appearance-none border-b-2 border-blue-500 bg-transparent w-full py-3 px-3 text-white leading-tight focus:outline-none focus:shadow-outline font-mono text-xl lg:text-3xl"
              >     
            </div>
          </div>
          <div class="mt-4">
            <textarea 
              placeholder="Message"
              class="appearance-none border-b-2 border-blue-500 bg-transparent w-full h-80 py-3 px-3 text-white resize-none leading-tight focus:outline-none focus:shadow-outline font-mono text-xl lg:text-3xl"
            />
          </div>
          <div class="flex justify-end w-full mt-4">
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded font-mono text-xl"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>