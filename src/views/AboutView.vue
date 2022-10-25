<script setup>
import TheNavbar from "@/components/TheNavbar.vue"
import TheFooter from "@/components/TheFooter.vue"
import { onMounted } from 'vue';
import { marked } from 'marked';

import { html }  from "@/contents/impossibleList.md";

let impossibleList = html

</script>

<template>
  <TheNavbar />
  <div class="container mx-auto my-10 about flex flex-col lg:flex-row p-3 lg:p-0 justify-start items-start gap-5 text-white font-mono">
    <div class="flex flex-col gap-3 w-full">
      <div class="relative">
        <img
          src="@/assets/images/profile.webp"
          alt="Profile picture"
          class="border-4 border-blue-400 h-full rounded w-full lg:w-96"
        >
        <div class="absolute bottom-0 left-0 w-full h-14 bg-blue-400 flex items-center justify-center rounded">
          <span
            class="text-4xl font-bold lg:text-jusitfy"
            title="Human Version 3"
          >HV3</span>
        </div>
      </div>
      <p
        class="font-mono hidden lg:block"
        style="font-family:monospace"
      >
        Software craftsman. Arduino fanatic. FPV drone flights enthusiast.
      </p>
    </div>
    <div>
      <h2 class="text-3xl">
        👋 H3ll0 W0rld!
      </h2>
      <p class="mt-3">
        My name is Claudiu Popa and I am a 22 year old, mostly self-taught, software engineer, currently living in Romania. I'm passionate about software engineering,
        robotics and everything in-between. I've worked with tools such as: <span class="text-purpleish">[</span><span class="text-greenish">"</span><span class="text-blueish">PHP</span><span class="text-greenish">"</span>, <span class="text-greenish">"</span><span class="text-blueish">JS/TS</span><span class="text-greenish">"</span>, <span class="text-greenish">"</span><span class="text-blueish">Python</span><span class="text-greenish">"</span>, <span class="text-greenish">"</span><span class="text-blueish">Java</span><span class="text-greenish">"</span>, <span class="text-greenish">"</span><span class="text-blueish">MySQL</span><span class="text-greenish">"</span><span class="text-purpleish">]</span> and <b>many others</b> (You can find the list below).
        I love to constantly learn new concepts and techniques that help me improve the projects I'm working on. At the moment I'm learning about microservices and AWS in depth.
      </p>

      <div class="mt-6 bg-blackish-dark p-3 rounded">
        <p># claudiupopa --help</p>
        <p>Usage: claudiupopa [OPTIONS]</p>
        <p class="mt-3">
          Options:
        </p>
        <ul class="flex flex-col gap-2">
          <li>
            <span class="font-bold">--work</span> <span>Software developer at <a
              class="text-purpleish"
              href="https://www.emag.ro"
            >eMAG</a></span>
          </li>
          <li>
            <span class="font-bold">--architectures</span> <span>MVC, MVVM, Domain-Driven Design, Event Driven Arch.</span>
          </li>
          <li>
            <span class="font-bold">--tools</span> <span>Laravel, Symfony, Vue, Livewire, Docker, Alpinejs, Linux, PHP, JS</span>
          </li>
          <li>
            <span class="font-bold">--experience</span> <span>2 years of professional experience</span>
          </li>
          <li>
            <span class="font-bold">--principles</span> <span>PSR, SOLID, KISS, DRY, DESIGN PATTERNS</span>
          </li>
          <li>
            <span class="font-bold">--projects</span> <span>Click <RouterLink
              to="/projects"
              class="text-purpleish"
            >here</RouterLink> to see all my projects</span>
          </li>
          <li>
            <span class="font-bold">--learning</span> <span>Currently learning microservices & AWS</span>
          </li>
          <li>
            <span class="font-bold">--social</span> <span><a
              class="text-purpleish"
              href="https://ro.linkedin.com/in/popa-claudiu"
              target="_blank"
            >Linkedin</a>, <a
              class="text-purpleish"
              href="https://github.com/Klaus330"
              target="_blank"
            >Github</a>, <a
              class="text-purpleish"
              href="mailto:claudiupopa330@gmail.comso"
              target="_blank"
            >Email</a></span>
          </li>
          <li>
            <span class="font-bold text-blueish">--resume</span> <span>Click <a
              href="src/contents/resume.pdf"
              class="text-purpleish"
              target="_blank"
            >here</a> to see my resume</span>
          </li>
          <li>
            <span class="font-bold">--version</span> <span>Latest</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <section class="text-white bg-blackish-dark py-4">
    <div class="my-4 container mx-auto">
      <div class="w-full flex flex-col justify-center items-center">
        <h2 class="text-4xl font-black drop-shadow uppercase">
          My Impossible list
        </h2>
        <p
          class="mt-4 whitespace-pre-wrap w-10/12 lg:w-6/12 xl:w-5/12"
        >
          I got this ideea from Thomas Frank the owner of <a
            href="https://www.collegeinfogeek.com"
            target="_blank"
            class="text-purpleish"
          >collegeinfogeek.com</a>. To put it
          symply, the impossible list is a collection of bucket lists that are ever-evolving and that are related with each other.
          This is mine, which is, of course, ever-evolving.
        </p>
      </div>
      <div
        id="markdown"
        class="mt-5 px-20"
        v-html="impossibleList"
      />
    </div>
  </section>

  <section class="flex flex-col w-full items-center justify-center p-10">
    <h2 class="text-4xl font-bold text-white">
      Haven't you seen my terminal version of this website?
    </h2>
    <a 
      href="https://term.claudiupopa.ro"
      target="_blank"
      class="mt-5 bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded font-mono text-xl flex gap-3 items-center justify-center"
    >
      <svg
        clip-rule="evenodd"
        class="w-7 h-7 fill-white"
        fill-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="#3B82F6"
      ><path
        d="m21 4c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-13.678 6.365c-.207-.146-.318-.378-.318-.614 0-.603.684-.962 1.182-.612l3.505 2.235c.199.141.318.369.318.613 0 .245-.119.473-.318.614l-3.511 2.257c-.5.353-1.182-.012-1.182-.613 0-.235.111-.467.318-.613l2.641-1.645zm9.678 3.873c0 .414-.336.75-.75.75h-3.5c-.413 0-.75-.336-.75-.75s.337-.75.75-.75h3.5c.414 0 .75.336.75.75z"
        fill-rule="nonzero"
      /></svg>
      Open the terminal
    </a>
  </section>
  <TheFooter />
</template>
