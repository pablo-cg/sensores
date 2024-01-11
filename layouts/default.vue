<script setup lang="ts">
const isDark = useDark();
const toggleDark = useToggle(isDark);

useHead({
  bodyAttrs: {
    class:
      'font-inter bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 relative',
  },
  titleTemplate: (title) => {
    return title ? `${title} - Sensores` : 'Sensores';
  },
});

useSeoMeta({
  ogTitle: 'Sensores',
  description: 'Información sobre sensores varios',
  ogDescription: 'Información sobre sensores varios',
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <div class="">
    <section class="flex justify-end w-full px-4">
      <ClientOnly>
        <button class="p-2 text-xl" @click="toggleDark()">
          <span
            :class="
              isDark
                ? 'i-material-symbols:light-mode-rounded'
                : 'i-material-symbols:light-mode-outline-rounded'
            "
          />
        </button>
      </ClientOnly>
    </section>
    <slot />
  </div>
</template>

<style scoped></style>
