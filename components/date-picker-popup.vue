<script setup lang="ts">
interface Props {
  label: string;
}

const isDark = useDark();

defineProps<Props>();

const model = defineModel();

watch(model, () => {
  if (!model.value) {
    model.value = new Date();
  }
});
</script>

<template>
  <HUIPopover class="relative flex justify-center md:justify-start">
    <HUIPopoverButton
      class="text-xl border border-zinc-900 hover:bg-zinc-200 dark:border-zinc-100 hover:dark:bg-zinc-700 px-4 py-1 flex items-center gap-2 rounded-md"
    >
      <span class="i-material-symbols:calendar-month-outline-rounded" />
      {{ label }}
    </HUIPopoverButton>
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <HUIPopoverPanel class="absolute z-10">
        <DatePicker
          :is-dark="isDark"
          v-model="model"
          :max-date="new Date()"
          borderless
        />
      </HUIPopoverPanel>
    </Transition>
  </HUIPopover>
</template>

<style scoped></style>
