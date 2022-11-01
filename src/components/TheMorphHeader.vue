<template>
  <div class="relative">
    <h2 class="text-4xl text-white flex items-center justify-center w-full font-bold gap-1 py-5 morph-container">
      <span
        id="text1"
        ref="morph1"
        v-html="html1"
      />
      <span
        id="text2"
        ref="morph2"
        v-html="html2"
      />
      <!-- <span id="text3" ref="text3">/span> -->
    </h2>
    <svg id="filters">
      <defs>
        <filter id="threshold">
          <!-- Basically just a threshold effect - pixels with a high enough opacity are set to full opacity, and all other pixels are set to completely transparent. -->
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 255 -140"
          />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

let headerChoice = Math.floor(Math.random() * 3)

let text1 = '<span class="text-yellowish">${</span><span class="text-redish"> experience </span><span class="text-yellowish">}</span>'
let text2 = `<span class="text-yellowish">import</span> <span class="text-redish">Experience</span> <span class="text-yellowish">from</span> <span><span class="text-greenish">'</span><span class="text-blueish">experience</span><span class="text-greenish">'</span></span>`
let text3 = '<span class="text-yellowish">log</span><span>(<span class="text-redish">experience</span>)</span>'

let texts = [text1, text2, text3]
let textIndex = texts.length - 1;

let morph1 = ref(null);
let morph2 = ref(null);

let html1 = ref(text1);
let html2 = ref(text2);

let morphTime = 2;
let cooldownTime = 0.4;

let time = new Date();
let morph = 0
let cooldown = cooldownTime

let animate = () => {
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


    html1.value = texts[textIndex % texts.length];
	html2.value = texts[(textIndex + 1) % texts.length];

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


<style>
    .morph-container{
        position: absolute;
        top: 0;
        bottom: 0;
        filter: url(#threshold) blur(0.6px);
    }

    #text1, #text2, #text3{
        position: absolute;
        text-align: center;
        top: 0;
        left: 0;
        width: 100%;
	    display: inline-block;
        user-select: none;
    }
</style>