<script setup>
import { ref, onMounted } from 'vue'

let text1 = `<h2 class="text-white text-4xl mb-3">
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
        </h2>`
let text2 = `<h2
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
        </h2>`

let texts = [text1, text2]
let textIndex = texts.length - 1;

let morph1 = ref(null);
let morph2 = ref(null);

let html1 = ref(text1);
let html2 = ref(text2);

let morphTime = 2.5;
let cooldownTime = 0.4;

let time = new Date();
let morph = 0
let cooldown = cooldownTime

let animate = () => {
    if(morph1.value === null || morph2.value === null)
    {
      return;
    }
    requestAnimationFrame(animate)
    
    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt =  (newTime - time) / 1000;
    time = newTime

    cooldown -= dt;

    if(cooldown <= 0)
    {
        if(shouldIncrementIndex)
        {
            textIndex++;
        }
        doMorph()
    }else {
        doCooldown()
    }
}


function doMorph() {
  if(morph1.value === null || morph2.value === null)
  {
    return;
  }
	morph -= cooldown;
	cooldown = 0;
	
	let fraction = morph / morphTime;
	
	if (fraction > 1) {
		cooldown = cooldownTime;
		fraction = 1;
	}
	
	setMorph(fraction);
}

function setMorph(fraction) {
	fraction = Math.cos(fraction * Math.PI) / -2 + .5;

  morph2.value.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
	morph2.value.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
	fraction = 1 - fraction;
	morph1.value.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
	morph1.value.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    html2.value = texts[textIndex % texts.length];
	html1.value = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
	morph = 0;
	
	morph2.value.style.filter = "";
	morph2.value.style.opacity = "100%";

  morph1.value.style.filter = "";
	morph1.value.style.opacity = "0%";
}

onMounted(() => {
    animate()
})
</script>

<template>
  <div class="w-full h-full hidden lg:flex items-start justify-center mb-5 flex-col h-full w-full morph-container">
    <div class="w-full relative h-full flex items-center justify-center">
      <div
        id="contact-text1"
        class="w-full"
        ref="morph1"
        v-html="html1"
      />

      <div
        id="context-text2"
        ref="morph2"
        class="w-full"
        v-html="html2"
      />
    </div>
  </div>
</template>

<style>
    #contact-text1, #context-text2{
        position: absolute;
        left: 0;
        user-select: none;
        overflow: hidden;
    }
</style>