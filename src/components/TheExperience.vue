<script setup>
import experience from "@/contents/experience.json";

console.log(experience);

let headerChoice = Math.floor(Math.random() * 3)
</script>
<template>
  <section class="bg-blackish-dark p-10">
    <h2 class="text-4xl text-white flex items-center justify-center w-full font-bold gap-1 py-5">
      <span v-show="headerChoice == 0"><span class="text-yellowish">import</span> <span class="text-redish">Experience</span> <span class="text-yellowish">from</span> <span><span class="text-greenish">'</span><span class="text-blueish">experience</span><span class="text-greenish">'</span></span></span>
      <span v-show="headerChoice == 1"><span class="text-yellowish">log</span><span>(<span class="text-redish">experience</span>)</span></span>
      <span v-show="headerChoice == 2"><span class="text-yellowish">${</span><span class="text-redish"> experience </span><span class="text-yellowish">}</span></span>
    </h2>
    <div class="min-h-full py-10 w-full container mx-auto text-white flex flex-col justify-center">
      <ul class="flex flex-col justify-center items-start gap-y-5 border-none border-blueish border-redish border-purpleish">
        <li
          v-for="(item, index) in experience"
          :key="index"
          :class="`border-l-8 border-${index} px-3`"
        >
          <h3 class="text-3xl font-semibold drop-shadow-2xl">
            <span :class="`text-${index}`">${</span> {{ item['title'] }} <span :class="`text-${index}`">}</span> <span class="text-sm text-gray-500">// {{ item["country"] }}</span>
          </h3>
          <div class="ml-3 mt-2">
            <span class="text-xl font-semibold"><span class="text-greenish">description</span>: <span :class="`text-${index}`">{</span></span>
            <ul class="mt-1 ml-10 flex flex-col items-start justify-start gap-y-1">
              <li class="text-xl">
                <span class="text-greenish">duration</span>: <span class="text-greenish">"</span><span class="text-blueish">{{ item['duration'] }}</span><span class="text-greenish">"</span> ,
              </li>
              <li class="text-xl">
                <span class="text-greenish">tools</span>: <span class="text-purpleish">[ </span>
                <span
                  v-for="(tool, i) in item['tools']"
                  :key="item['title'] + i"
                ><span class="text-greenish">"</span><span class="text-blueish">{{ tool }}</span><span class="text-greenish">"</span><span v-if="i < item['tools'].length - 1">, </span></span>
                <span class="text-purpleish"> ]</span>
              </li>
              <li class="text-xl">
                <span class="text-greenish">responsabilities</span>: 
                <span v-if="!Array.isArray(item['responsabilities'])">
                  <span class="text-greenish">"</span><span class="text-blueish">{{ item["responsabilities"] }}</span><span class="text-greenish">"</span>
                </span>
                <span v-else>
                  <span class="text-purpleish"> [ </span>
                  <span
                    v-for="(resp, idx) in item['responsabilities']"
                    :key="idx + item['title']"
                  ><span class="text-greenish">"</span><span class="text-blueish">{{ resp }}</span><span class="text-greenish">"</span><span v-if="idx < item['responsabilities'].length - 1">, </span> </span>
                  <span class="text-purpleish"> ]</span>
                </span>
              </li>
            </ul>
            <span :class="`text-xl font-semibold text-${index}`">}</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>