<template>
  <section class="py-16 sm:py-20">
    <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="sm:space-8 space-y-12">
        <h2 class="text-3xl font-medium tracking-tight sm:text-4xl">
          {{ $t("aboutPage.meetTeam") }}
        </h2>
        <ul
          role="list"
          class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <li
            v-for="item in team"
            class="rounded-3xl border border-primary-900/10 px-6 py-8 dark:border-primary-300/10"
          >
            <div class="space-y-6">
              <!-- <img
                class="mx-auto h-auto w-16 rounded-full"
                :src="item.image"
                :alt="item.name"
              /> -->
              <div class="text-center">
                <h3 class="text-lg font-medium">{{ item.name }}</h3>
                <p
                  class="text-base text-primary-950/70 dark:text-primary-200/70"
                >
                  {{ item.job }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const team = ref([
  {
    name: "Floyd Lowe",
    image: "/",
    job: "Senior Designer",
  },
  {
    name: "Emma Dorsey",
    image: "/",
    job: "Principal Designer",
  },
  {
    name: "Emily Mitchell",
    image: "/",
    job: "Senior Developer",
  },
]);
</script>

<style scoped></style>
