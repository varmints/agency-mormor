<template>
  <header
    class="transition"
    :class="{
      'bg-primary-500/10 dark:bg-primary-400/10': isExpanded,
      'bg-primary-50 dark:bg-primary-950': !isExpanded,
    }"
  >
    <div
      class="mx-auto flex max-w-2xl items-center justify-between px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8"
    >
      <!-- Brand logo -->
      <div class="flex">
        <NuxtLink
          :to="localePath('/')"
          class="ml-[2px] rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-950 dark:group-focus-visible:outline-primary-200 sm:ml-1"
        >
          <Logo class="h-8" />
        </NuxtLink>
      </div>

      <!-- Actions -->
      <div class="-mr-2 flex items-center space-x-2 sm:space-x-3">
        <!-- Toggle theme mode -->
        <ColorModeSelector />

        <!-- Toggle menu -->
        <!-- @click="isExpanded = !isExpanded"
          @mousedown="if (isExpanded) $event.preventDefault();"
          :aria-expanded="isExpanded.toString()" -->
        <button
          type="button"
          class="inline-flex h-14 w-14 items-center justify-center rounded-full text-primary-950 ring-primary-950 transition hover:bg-primary-500/10 focus:outline-none focus-visible:ring-2 dark:text-primary-200 dark:hover:bg-primary-400/10"
          aria-controls="website-menu"
          aria-expanded="false"
          @click="handleCollapse"
        >
          <span class="sr-only">Toggle menu</span>
          <svg
            v-cloak
            class="h-8 w-8"
            :class="{ hidden: isExpanded, block: !isExpanded }"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19 8H5V10H19V8ZM19 14H5V16H19V14Z"></path>
          </svg>
          <svg
            v-cloak
            class="h-8 w-8"
            :class="{ block: isExpanded, hidden: !isExpanded }"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Menu content -->
    <Collapse :when="isExpanded" class="v-collapse">
      <div
        class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"
        id="website-menu"
      >
        <div class="grid grid-cols-1 gap-16 pb-24 pt-6 lg:grid-cols-2 lg:pt-12">
          <div
            class="hidden items-center justify-center rounded-3xl bg-primary-500/10 px-6 py-8 dark:bg-primary-400/10 lg:flex"
          >
            <p
              class="max-w-sm text-xl italic leading-loose text-primary-950/70 dark:text-primary-200/70"
            >
              {{ $t("headerText") }}
            </p>
          </div>

          <!-- Navigation -->
          <nav
            class="flex flex-col gap-1 divide-y divide-primary-900/10 dark:divide-primary-300/10"
          >
            <NuxtLink
              v-for="link in links"
              :key="link.id"
              :to="localePath(link.href)"
              class="group inline-flex py-6 text-3xl font-medium tracking-tight text-primary-950 transition focus-visible:outline-none dark:text-primary-200 sm:py-8 sm:text-4xl"
            >
              <div
                class="flex flex-1 items-center justify-between rounded-3xl group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-primary-950 dark:group-focus-visible:outline-primary-200"
              >
                <div class="flex items-center gap-6">
                  <span class="w-3 text-xs">{{ link.ref }}</span>
                  <span class="group-hover:underline">{{ $t(link.name) }}</span>
                </div>
                <svg
                  class="h-6 w-6 text-primary-600 dark:text-primary-400 sm:h-8 sm:w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
                  />
                </svg>
              </div>
            </NuxtLink>
            <LanguageSelector />
          </nav>
        </div>
      </div>
    </Collapse>
  </header>
</template>

<script setup>
import { Collapse } from "vue-collapsed";
import Logo from "../assets/logo.svg";

const links = ref([
  {
    ref: "01",
    name: "home",
    href: "/",
  },
  {
    ref: "02",
    name: "about",
    href: "/about",
  },
  {
    ref: "03",
    name: "pricing",
    href: "/pricing",
  },
  {
    ref: "04",
    name: "contact",
    href: "/contact",
  },
]);

const isExpanded = ref(false);

function handleCollapse() {
  isExpanded.value = !isExpanded.value;
}
</script>

<style scoped>
.v-collapse {
  transition: height 500ms ease;
  /* or transition: height var(--vc-auto-duration) ease-in-out */
}
</style>
