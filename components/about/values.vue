<template>
  <section class="py-16 sm:py-20">
    <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="flex flex-col gap-8 lg:gap-12">
        <h2 class="text-3xl font-medium tracking-tight sm:text-4xl">
          {{ $t("aboutPage.ourValues") }}
        </h2>
        <div class="grid gap-8 lg:grid-cols-2">
          <div
            v-for="(column, index) in values"
            :class="['space-y-8', index === 1 && 'lg:mt-20']"
          >
            <div
              v-for="value in column"
              class="flex flex-col gap-12 rounded-3xl bg-primary-500/10 px-6 py-8 dark:bg-primary-400/10"
            >
              <p class="text-sm">{{ value.ref }}</p>
              <div class="flex flex-col gap-4">
                <h3 class="text-xl font-medium">
                  {{ $t(`aboutPage.${value.name}`) }}
                </h3>
                <p
                  class="text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg"
                >
                  {{ $t(`aboutPage.${value.description}`) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const values = ref([
  [
    {
      ref: "01",
      name: "ourValueName1",
      description: "ourValueDescription1",
    },
    {
      ref: "03",
      name: "ourValueName3",
      description: "ourValueDescription3",
    },
  ],
  [
    {
      ref: "02",
      name: "ourValueName2",
      description: "ourValueDescription2",
    },
    {
      ref: "04",
      name: "ourValueName4",
      description: "ourValueDescription4",
    },
  ],
]);
</script>

<style scoped></style>
