<template>
  <section class="py-16 sm:py-20">
    <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="flex flex-col gap-12 sm:gap-16">
        <h2 class="text-3xl font-medium tracking-tight sm:text-4xl">
          {{ $t("homePage.services") }}
        </h2>
        <div class="grid gap-8 lg:grid-cols-3">
          <div
            v-for="service in services"
            class="flex flex-col gap-12 rounded-3xl bg-primary-500/10 px-6 py-8 dark:bg-primary-400/10"
          >
            <p class="text-sm">{{ service.step }}</p>
            <div class="flex flex-col gap-4">
              <h3 class="text-xl font-medium">
                {{ $t(`homePage.${service.name}`) }}
              </h3>
              <p
                class="text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg"
              >
                {{ $t(`homePage.${service.description}`) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = ref([
  {
    step: "01",
    name: "design",
    description: "designDescription",
  },
  {
    step: "02",
    name: "develop",
    description: "developDescription",
  },
  {
    step: "03",
    name: "maintain",
    description: "maintainDescription",
  },
]);
</script>

<style scoped></style>
