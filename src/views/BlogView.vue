<template>
  <div class="flex justify-between flex-col items-center h-full">
    <TheNavbar @open-terminal="$emit('openTerminal')" />

    <div class="flex-1 py-3 max-w-5xl mx-auto px-10 py-10 m-10 container">
      <div class="bg-blue-300/10 px-10 py-5 mb-10 text-white rounded" v-if="topics.length !== 0">
        <h3 class="font-semibold pb-3">--topics</h3>
        <ul class="flex flex-wrap gap-x-3">
          <li v-for="(topic, index) in topics" :key="index">
            <RouterLink
              :to="'/blog?topic=' + topic"
              class="hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-500"
              :class="useRoute().query.topic === topic ? 'text-transparent bg-gradient-to-r from-blue-400 to-indigo-500' : ''"
            >
              #{{ topic }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <div class="gap-6 grid grid-cols-1">
        <div
          v-for="(post, index) in posts"
          :key="index"
          class="bg-blue-600/10 px-5 py-2 rounded text-white gap-1 shadow-xl flex flex-col items-start justify-start hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-500"
        >
          <h2 class="font-semibold text-2xl pt-3 pb-2 no-underline">
            <RouterLink :to="'/blog/' + post.slug" class="hover:no-underline">
              {{ post.title }}
            </RouterLink>
          </h2>
          <p class="font-light pb-2">
            {{ post.description }}
          </p>
          <div class="text-sm flex items-center justify-start gap-3">
            <RouterLink
              :to="'/blog/' + post.slug"
              class="rounded py-1 font-mono text-sm font-semibold underline-none"
              style="text-decoration: none"
            >
              <span class="text-indigo-400">@click</span><span class="text-xs">=</span
              ><span class="text-blue-400 ml-1 hover:text-blue-600">"read"</span>
            </RouterLink>
            <span class="font-semibold">
              by <span class="text-blue-400">{{ post.author }}</span>
            </span>
            <span class="">
              --{{
                new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
                  new Date(post.date)
                )
              }}
            </span>
          </div>
        </div>
      </div>

       <div
          class="w-full bg-blue-600/10 px-5 py-2 rounded text-white gap-1 shadow-xl flex flex-col items-start justify-start hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-500"
          v-if="posts.length === 0"
        >
          <h2 class="font-semibold text-2xl pt-3 pb-2 no-underline">
            Comming soon...
          </h2>
      </div>
    </div>


    <TheFooter class="w-full" />
  </div>
</template>

<script setup>
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
import topics from "@/contents/topics.json";
import postsData from "@/contents/posts.json";
import { computed } from "vue";
import { useRoute } from "vue-router";
defineEmits(["openTerminal"]);

let posts = computed(() => {
  const topic = useRoute().query.topic;
  if (!topic) {
    return postsData;
  }

  return postsData.filter((post) => {
    return post.tags.includes(useRoute().query.topic);
  });
});
</script>
