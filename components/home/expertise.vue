<template>
  <section class="py-16 sm:py-20">
    <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="grid gap-12 lg:grid-cols-3 lg:gap-8">
        <h2 class="text-3xl font-medium tracking-tight sm:text-4xl">
          {{ $t("homePage.expertise") }}
        </h2>
        <div class="lg:col-span-2">
          <dl class="-mt-3">
            <div
              v-for="(question, index) in questions"
              :key="question.title"
              class="rounded-3xl px-4 transition"
              :class="{
                'bg-primary-500/10 dark:bg-primary-400/10': question.isExpanded,
              }"
            >
              <dt
                class="border-b text-lg transition"
                :class="{
                  'border-transparent':
                    question.isExpanded || question.isNextOpen,
                  'border-primary-900/10 dark:border-primary-300/10': !(
                    question.isExpanded || question.isNextOpen
                  ),
                }"
              >
                <button
                  type="button"
                  class="group block w-full py-6 text-left transition focus-visible:outline-none"
                  aria-expanded="false"
                  :aria-expanded="question.isExpanded.toString()"
                  @click="handleAccordion(index)"
                >
                  <div
                    class="flex items-center justify-between rounded-3xl group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-primary-950 dark:group-focus-visible:outline-primary-200"
                  >
                    <span class="font-medium">
                      {{ $t(`homePage.${question.title}`) }}
                    </span>
                    <span class="ml-6 flex h-7 items-center">
                      <svg
                        class="h-6 w-6 transform text-primary-600 transition duration-200 ease-in-out dark:text-primary-400"
                        :class="
                          question.isExpanded ? '-rotate-180' : 'rotate-0'
                        "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"
                        />
                      </svg>
                    </span>
                  </div>
                </button>
              </dt>
              <Collapse as="dd" :when="question.isExpanded">
                <p
                  class="pb-6 pr-6 text-base text-primary-950/70 dark:text-primary-200/70"
                >
                  {{ $t(`homePage.${question.answer}`) }}
                </p>
              </Collapse>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Collapse } from "vue-collapsed";

const featuresRef = [
  {
    id: "expertise-1",
    title: "expertiseTitle1",
    answer: "expertiseAnswer1",
  },
  {
    id: "expertise-2",
    title: "expertiseTitle2",
    answer: "expertiseAnswer2",
  },
  {
    id: "expertise-3",
    title: "expertiseTitle3",
    answer: "expertiseAnswer3",
  },
  {
    id: "expertise-4",
    title: "expertiseTitle4",
    answer: "expertiseAnswer4",
  },
  {
    id: "expertise-5",
    title: "expertiseTitle5",
    answer: "expertiseAnswer5",
  },
  {
    id: "expertise-6",
    title: "expertiseTitle6",
    answer: "expertiseAnswer6",
  },
];

const questions = reactive(
  featuresRef.map(({ title, answer }, index) => ({
    title,
    answer,
    isExpanded: index === 2, // Initial values, display expanded on mount
    isNextOpen: index + 1 === 2,
  })),
);

function handleAccordion(selectedIndex) {
  questions.forEach((_, index) => {
    questions[index].isExpanded =
      index === selectedIndex ? !questions[index].isExpanded : false;
  });
  questions.forEach((_, index) => {
    questions[index].isNextOpen =
      index === selectedIndex - 1 ? !questions[index].isExpanded : false;
  });
}
</script>

<style scoped></style>
