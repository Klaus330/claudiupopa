import{h as i,i as l,j as r,k as c,l as _,o as m,c as u,a,_ as p,b as d,u as f,f as w,n as h}from"./index.ad1ef776.js";import"./marked.esm.1676a623.js";const v=(n,o)=>{const e=n[o];return e?typeof e=="function"?e():Promise.resolve(e):new Promise((t,s)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+o)))})};const x={class:"flex justify-between flex-col items-center h-full"},g=["innerHTML"],T={__name:"PostView",emits:["openTerminal"],setup(n){let o=l().params.slug,e=r("");return c(e,()=>{h(()=>{console.log(window.hljs.highlightAll({theme:"nord"}))})}),v(Object.assign({"../contents/posts/post-1.md":()=>_(()=>import("./post-1.10fcf4af.js"),[])}),`../contents/posts/${o}.md`).then(t=>{console.log(t),e.value=t.html}).catch(t=>console.log(t)),(t,s)=>(m(),u("div",x,[a(p,{onOpenTerminal:s[0]||(s[0]=b=>t.$emit("openTerminal"))}),d("div",{id:"markdown",class:"max-w-7xl mx-auto px-4 lg:px-20 text-white py-10",innerHTML:f(e)},null,8,g),a(w,{class:"w-full"})]))}},P=i(T,[["__scopeId","data-v-0bffd719"]]);export{P as default};
