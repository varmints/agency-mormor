<template>
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</template>

<script setup></script>

<style>
body {
  @apply bg-primary-50 text-primary-950 dark:bg-primary-950 dark:text-primary-200 antialiased transition;
}
</style>
