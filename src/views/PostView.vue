<template>
  <div class="flex justify-between flex-col items-center h-full">
    <TheNavbar @open-terminal="$emit('openTerminal')" />

    <div class="max-w-7xl flex flex-col items-start justify-start gap-10 mt-10">
      <img :src="metadata.thumbnail" alt="Thumbnail" class="aspect-video w-full rounded shadow-xl" v-if="metadata.thumbnail"/>
      <h1 class="text-8xl drop-shadow-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
        {{ metadata.title }}
      </h1>
      <div class="flex gap-5 items-center justify-start font-mono text-white font-bold">
        <RouterLink to="/blog" class="text-white bg-blue-500/20 py-1 px-2 font-bold no-underline hover:bg-blue-100 hover:text-black ease-in duration-200" style="text-decoration: none;">
          redirect()-><span class="text-indigo-400">back()</span>
        </RouterLink>
         <span class="bg-blue-500/20 py-1 px-2 no-underline" style="text-decoration: none;">
          by {{ metadata.author }}
        </span>
        <span>
          --{{ new Intl.DateTimeFormat('en-US', {dateStyle: 'long'}).format(new Date(metadata.publishedAt)) }}
        </span>
        <span>
          in
        </span>
        <span>
          <RouterLink :to="'/blog?topic=' + tag" v-for="(tag, index) in metadata.tags" :key="index" 
                      class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 hover:from-blue-300 hover:to-indigo-300">
            #{{ tag }}
          </RouterLink>
        </span>
      </div>
    </div>

    <div
      id="markdown"
      class="max-w-7xl mx-auto px-4 lg:px-20 text-white py-10"
      v-html="post"
    ></div>

    <TheFooter class="w-full" />
  </div>
</template>

<script setup>
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
import { useRoute } from "vue-router";
import { marked } from "marked";
import { ref, watch, nextTick } from "vue";

let slug = useRoute().params.slug;
let post = ref("");
let metadata = ref({});

watch(post, () => {
  nextTick(() => {
    window.hljs.highlightAll();
  });
});

import(`@/contents/posts/${slug}.md`)
  .then((content) => {
    console.log(content);
    post.value = content.html;
    metadata.value = content.attributes;
  })
  .catch((error) => console.log(error));

defineEmits(["openTerminal"]);
</script>

<style type="text/css" scoped>
:deep(#markdown h1) {
  font-size: 6em;
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
  margin: 4rem 0;
}

:deep(#markdown p) {
  margin: 1rem 0;
}

:deep(#markdown pre) {
  margin: 1rem 0;
}
</style>
