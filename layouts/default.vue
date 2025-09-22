<template>
  <header class="relative w-full border-b-2 hover:shadow-md transition-shadow duration-500 bg-brand-background_white ">
    <!-- logo -->
    <div class="flex justify-center pt-4">
      <img src="assets/images/Component 1.svg" alt="Site Logo" class="w-20 h-20 rounded-full shadow-lg bg-brand-primary p-2 mt-2 mb-2" />
    </div>

    <!-- nav -->
    <nav class="flex justify-center gap-8 px-6 py-4 text-lg font-medium text-brand-background_white">
      <NuxtLink to="/" class="hover:bg-brand-accent transition bg-brand-primary rounded-xl p-2 duration-500">Home</NuxtLink>
      <NuxtLink to="/lab3" class="hover:bg-brand-accent transition bg-brand-primary rounded-xl p-2 duration-500">Lab3</NuxtLink>
      <NuxtLink to="/login" class="hover:bg-brand-accent transition  bg-brand-primary rounded-xl p-2 duration-500">LogIn</NuxtLink>
      <NuxtLink to="/logout" class="hover:bg-brand-accent transition bg-brand-primary rounded-xl p-2 duration-500" >LogOut</NuxtLink>
    </nav>
  </header>
  
  <main class="p-5 flex bg-brand-background_white h-screen">
    <slot/>
  </main>
  
  <footer class="flex flex-row w-full bg-brand-primary border-t-2 justify-center px-4 py-2 gap-4">
    <a href=""></a>
    <a href=""></a>
    <a href=""></a>
  </footer>
</template>
