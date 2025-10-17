<template>
  <header class="relative w-full flex flex-row justify-between border-b-2 hover:shadow-md transition-shadow duration-500 bg-brand-background_white">
    <img src="assets/images/Component 1.svg" alt="Site Logo" class="w-16 m-2 h-16 rounded-full shadow-lg bg-brand-primary p-2 justify-center"/>
    <div class="flex max-sm:justify-between items-center px-6 py-4">
      
      <div class="max-sm:flex hidden cursor-pointer justify-between" @click="switch_burger">
        <div v-if="!burger" class="space-y-1">
          <div class="w-6 h-1 bg-brand-primary"></div>
          <div class="w-6 h-1 bg-brand-primary"></div>
          <div class="w-6 h-1 bg-brand-primary"></div>
        </div>
        <div v-else class="w-6 h-6 flex items-center justify-center">
          <div class="w-6 h-1 bg-brand-primary rotate-45 absolute"></div>
          <div class="w-6 h-1 bg-brand-primary -rotate-45 absolute"></div>
        </div>
      </div>
    </div>

    <nav :class="['flex justify-center gap-4 mr-4 items-center text-lg font-medium text-brand-background_white bg-brand-background_white','max-sm:flex-col max-sm:items-center max-sm:w-full max-sm:absolute max-sm:top-full',burger ? 'max-sm:flex' : 'max-sm:hidden']">
      <NuxtLink to="/" class="hover:bg-brand-accent transition bg-brand-primary rounded-xl p-2 duration-500 max-sm:w-full max-sm:text-center">Home</NuxtLink>
      <div class="relative group max-sm:w-full">
        <button @click="switch_labs" class="hover:bg-brand-accent transition bg-brand-primary rounded-xl p-2 duration-500 max-sm:w-full max-sm:text-center">Labs</button>
        <div v-show="labs" class="absolute left-0 mt-2 hidden flex-col bg-brand-primary text-brand-background_white rounded-xl shadow-lg group-hover:flex z-50 max-sm:relative max-sm:mt-1 max-sm:w-full max-sm:flex">
          <NuxtLink to="/labs" class="px-4 py-2 w-[100px] hover:bg-brand-accent rounded-t-xl max-sm:w-full max-sm:text-center">Lab 3</NuxtLink>
          <NuxtLink to="/lab4" class="px-4 py-2 hover:bg-brand-accent max-sm:w-full max-sm:text-center">Lab 4</NuxtLink>
          <NuxtLink to="/lab5" class="px-4 py-2 hover:bg-brand-accent max-sm:w-full max-sm:text-center">Lab 5</NuxtLink>
          <NuxtLink to="/lab6" class="px-4 py-2 hover:bg-brand-accent rounded-b-xl max-sm:w-full max-sm:text-center">Lab 6</NuxtLink>
        </div>
      </div>
      <NuxtLink to="/login" class="hover:bg-brand-accent transition bg-brand-primary rounded-xl p-2 duration-500 max-sm:w-full max-sm:text-center">LogIn</NuxtLink>
      <NuxtLink to="/logout" class="hover:bg-brand-accent transition bg-brand-primary rounded-xl p-2 duration-500 max-sm:w-full max-sm:text-center">LogOut</NuxtLink>
    </nav>
  </header>

  <main class="p-5 flex bg-brand-background_white min-h-screen">
    <slot/>
  </main>

  <footer class="flex flex-row w-full bg-brand-primary border-t-2 justify-center px-4 py-2 gap-4 max-sm:items-center max-sm:gap-2">
    <a href="https://www.youtube.com/"><img src="assets/images/youtube.svg" class="w-12 h-12 max-md:w-10 max-md:h-10"/></a>
    <a href="https://github.com/Bu88lleGum/weblab"><img src="assets/images/github.svg" class="w-12 h-12 max-md:w-10 max-md:h-10"/></a>
    <a href="https://www.facebook.com/share/16bfsrA6Xi/"><img src="assets/images/facebook-logo-Black.png" class="w-12 h-12 max-md:w-10 max-md:h-10"/></a>
  </footer>
</template>

<script setup>
import { useHead } from "#app"
import { ref } from "vue"

const burger = ref(false)
const labs = ref(false)

function switch_burger() {
  burger.value = !burger.value
  if (!burger.value) labs.value = false
}
function switch_labs() {
  labs.value = !labs.value
}

useHead({
  script: [
    { async: true, src: "https://www.googletagmanager.com/gtag/js?id=G-QJ83R5NYB7" },
    { innerHTML: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-QJ83R5NYB7');`, type: "text/javascript" }
  ],
  __dangerouslyDisableSanitizerByTagID: { gtag: ["innerHTML"] }
})
</script>
