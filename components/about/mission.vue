<template>
  <section class="py-16 sm:py-20">
    <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <img
          class="mx-auto h-auto w-full max-w-xl rounded-3xl"
          width="576"
          height="864"
          src="/assets/about.webp"
          alt="Our experts working together"
        />
        <div class="flex flex-col gap-10">
          <div class="space-y-8 sm:space-y-12">
            <h2 class="text-3xl font-medium tracking-tight sm:text-4xl">
              {{ $t("aboutPage.ourMission") }}
            </h2>
            <div class="space-y-6">
              <p
                class="text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg"
              >
                {{ $t("aboutPage.ourMissionDescription1") }}
              </p>
              <p
                class="text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg"
              >
                {{ $t("aboutPage.ourMissionDescription2") }}
              </p>
              <p
                class="text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg"
              >
                {{ $t("aboutPage.ourMissionDescription3") }}
              </p>
            </div>
          </div>

          <!-- Stats -->
          <!-- <dl class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div
              v-for="stat in stats"
              class="rounded-3xl border border-primary-900/10 p-6 dark:border-primary-300/10"
            >
              <dt class="text-base">{{ stat.name }}</dt>
              <dd class="text-3xl font-medium tracking-tight">
                {{ stat.value }}
              </dd>
            </div>
          </dl> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = ref([
  {
    name: "Years",
    value: "",
  },
  {
    name: "Experts",
    value: "",
  },
  {
    name: "Projects",
    value: "",
  },
  {
    name: "Awards",
    value: "",
  },
]);
</script>

<style scoped></style>
