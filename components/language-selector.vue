<template>
  <NuxtLink
    v-for="locale in availableLocales"
    :key="locale.code"
    :to="switchLocalePath(locale.code)"
    class="text-primary-950 dark:text-primary-200 group inline-flex py-6 text-3xl font-medium tracking-tight transition focus-visible:outline-none sm:py-8 sm:text-4xl"
  >
    <div class="flex items-center gap-6">
      <span class="text-xs uppercase w-3">{{ locale.code }}</span>
      <span class="group-hover:underline"> {{ locale.name }}</span>
    </div>
  </NuxtLink>
</template>

<script setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>
