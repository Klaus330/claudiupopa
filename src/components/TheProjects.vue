<script setup>
import projects from "@/contents/projects.json";
</script>

<template>
  <section class="px-3 lg:p-10 text-white min-h-full">
    <h2 class="text-4xl font-bold flex items-center justify-center w-full py-10 gap-2">
      <span class="text-redish">${ </span> projects <span class="text-redish"> }</span>
    </h2>

    <div class="my-14 container mx-auto">
      <div class=" grid grid-cols-1 lg:grid-cols-2 lg:gap-x-4 gap-y-6 text-white w-full">
        <div
          v-for="(project, index) in projects"
          :key="project.title + index"
          class="hover:border-none hover:border-purpleish hover:border-greenish hover:border-blueish hover:border-yellowish hover:border-redish"
        >
          <div :class="`shadow-2xl py-8 px-5 border-4 border-white hover:border-${index} rounded`">
            <div class="flex flex-col lg:flex-row items-start justify-start gap-y-2 pb-3 lg:pb-0 lg-gap-y-0 lg:items-center lg:justify-between">
              <h2 class="text-2xl font-semibold">
                {{ project.title }}
              </h2>
              <ul class="flex gap-3 items-center justify-end">
                <li>
                  <a
                    :href="`${project.github_link}`"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      :class="`fill-white hover:fill-${index}`"
                    ><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" /></svg>
                  </a>
                </li>
                <li>
                  <a
                    :href="`${project.site_link}`"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      :class="`fill-white hover:fill-${index}`"
                    ><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z" /></svg>
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-3 flex flex-col lg:flex-row items-start justify-start gap-y-1 lg:gap-y-0 lg:items-center lg:justify-between">
              <p>
                {{ project.description }}
              </p>
              <ul class="font-semibold flex gap-3 items-center justify-end">
                <li
                  v-for="(tech,id) in project.techs"
                  :key="id"
                >
                  {{ tech }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="text-3xl font-semibold flex justify-center items-center mt-10 w-full text-center">
        And others work in progress...
      </div>
    </div>
  </section>
</template>