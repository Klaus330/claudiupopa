<template>
  <section
    id="contact"
    class="px-5 h-full w-full flex items-center justify-center bg-blackish"
  >
    <div class="lg:px-3 lg:px-0 lg:container lg:mx-auto flex flex-col lg:flex-row items-center justify-around lg:justify-center font-mono">
      <h2 class="text-blue-400 w-full flex items-center justify-center lg:hidden text-4xl mb-8">
        .contact()
      </h2>
      <div class="w-full hidden lg:flex items-start justify-center mb-5 flex-col h-full w-full">
        <div v-if="Math.random() > 0.5">
          <h2 class="text-white text-4xl mb-3">
            <span class="text-yellowish">let</span> <span class="text-purpleish">contact</span> = <span class="text-yellowish">()</span> <span class="text-purpleish">=></span> <span class="text-redish">{</span>
          </h2>
          <ul class="text-3xl ml-6 flex flex-col gap-y-3 text-white">
            <li>
              <span class="text-greenish">email</span>:  <span class="text-greenish">"</span><a
                href="mailto:claudiupopa330@gmail.com"
                class="text-blueish hover:text-blueish-dark"
              >claudiupopa330@gmail.com</a><span class="text-greenish">"</span>,
            </li>
            <li>
              <span class="text-greenish">github</span>: <span class="text-greenish">"</span><a
                href="https://github.com/Klaus330"
                target="_blank"
                class="text-blueish hover:text-blueish-dark"
              >github.com/Klaus330</a><span class="text-greenish">"</span>,
            </li>
            <li>
              <span class="text-greenish">linkedin</span>: <span class="text-greenish">"</span><a
                href="https://ro.linkedin.com/in/popa-claudiu"
                target="_blank"
                class="text-blueish hover:text-blueish-dark"
              >linkedin.com/popa-claudiu</a><span class="text-greenish">"</span>
            </li>
          </ul>
          <h2 class="text-redish text-4xl mt-3">
            }
          </h2>
        </div>

        <div v-else>
          <h2
            class="text-4xl text-blueish mb-1"
          >
            <span
              class="text-purpleish"
            >function</span> contact<span class="text-yellowish">() <span class="text-redish">{</span></span>
          </h2>
          <span
            class="ml-5 text-2xl text-redish mb-2"
          >return <span class="text-purpleish">[</span></span>
          <ul class="ml-5 text-2xl flex flex-col gap-y-2">
            <li class="ml-5 text-white">
              <span class="text-greenish">"</span><span class="text-blueish">email</span><span class="text-greenish">"</span> <span class="text-white font-bold">=></span> 
              <span class="text-greenish ml-2">"</span><a
                href="mailto:claudiupopa330@gmail.com"
                class="text-blueish hover:text-blueish-dark"
              >claudiupopa@gmail.com</a><span class="text-greenish">"</span>,
            </li>
            <li class="ml-5 text-white">
              <span class="text-greenish">"</span><span class="text-blueish">github</span><span class="text-greenish">"</span> <span class="text-white font-bold">=></span> 
              <span class="text-greenish ml-2">"</span><a
                href="https://github.com/Klaus330"
                target="_blank"
                class="text-blueish hover:text-blueish-dark"
              >github.com/Klaus330</a><span class="text-greenish">"</span>,
            </li>
            <li class="ml-5 text-white">
              <span class="text-greenish">"</span><span class="text-blueish">linkedin</span><span class="text-greenish">"</span> <span class="text-white font-bold">=></span> 
              <span class="ml-2 text-greenish">"</span><a
                href="https://ro.linkedin.com/in/popa-claudiu"
                target="_blank"
                class="text-blueish hover:text-blueish-dark"
              >linkedin.com/popa-claudiu</a><span class="text-greenish">"</span>
            </li>
          </ul>
          <span class="ml-5 text-2xl text-purpleish mt-2">]<span class="text-white">;</span></span>
          <h2 class="text-4xl mt-3 text-redish">
            }
          </h2>
        </div>
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