<template>
  <section class="py-16 sm:py-20">
    <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="-mt-8 grid gap-8 lg:mt-0 lg:grid-cols-3">
        <div
          v-for="item in pricing"
          :class="[
            'relative flex flex-col gap-8 rounded-3xl p-8',
            item.isFlagged && 'bg-primary-500/10 dark:bg-primary-400/10',
          ]"
        >
          <div class="flex-1">
            <h2 class="text-xl font-medium">
              {{ $t(`pricingPage.${item.name}`) }}
            </h2>
            <p class="mt-4 flex items-baseline">
              <span class="text-4xl font-medium tracking-tight">
                {{ $t(`pricingPage.${item.price}`) }}
              </span>
              <span
                class="ml-1 text-sm font-medium text-primary-950/70 dark:text-primary-200/70"
              >
                {{ $t(`pricingPage.${item.periodicity}`) }}
              </span>
            </p>
            <p class="mt-6 text-primary-950/70 dark:text-primary-200/70">
              {{ $t(`pricingPage.${item.description}`) }}
            </p>

            <ul role="list" class="mt-6 space-y-6">
              <li v-for="feature in item.features" class="flex gap-3">
                <svg
                  class="h-6 w-6 flex-shrink-0 text-primary-600 dark:text-primary-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"
                  />
                </svg>
                <span>{{ $t(`pricingPage.${feature}`) }}</span>
              </li>
            </ul>
          </div>
          <NuxtLink
            to="contact"
            class="inline-flex w-full items-center justify-center rounded-full border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white transition hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:bg-primary-400 dark:text-primary-950 dark:hover:bg-primary-300 dark:focus-visible:outline-primary-400"
          >
            {{ $t("buyNow") }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const pricing = ref([
  {
    name: "basic",
    description: "basicDescription",
    periodicity: "basicPeriodicity",
    price: "basicPrice",
    action: "",
    features: [
      "basicFeatures1",
      "basicFeatures2",
      "basicFeatures3",
      "basicFeatures4",
    ],
  },
  {
    name: "pro",
    description: "proDescription",
    isFlagged: true,
    periodicity: "proPeriodicity",
    price: "proPrice",
    action: "",
    features: [
      "proFeatures1",
      "proFeatures2",
      "proFeatures3",
      "proFeatures4",
      "proFeatures5",
    ],
  },
  {
    name: "custom",
    description: "customDescription",
    periodicity: "customPeriodicity",
    price: "customPrice",
    action: "",
    features: [
      "customFeatures1",
      "customFeatures2",
      "customFeatures3",
      "customFeatures4",
      "customFeatures5",
      "customFeatures6",
    ],
  },
]);
</script>

<style scoped></style>
