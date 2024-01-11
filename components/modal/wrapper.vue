<script setup lang="ts">
interface Props {
  isOpen: boolean;
}

interface Emits {
  (e: 'close'): void;
}

defineProps<Props>();

const emit = defineEmits<Emits>();
</script>

<template>
  <HUITransitionRoot appear :show="isOpen" as="template">
    <HUIDialog as="div" @close="emit('close')" class="relative z-10">
      <HUITransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </HUITransitionChild>
      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4">
          <HUITransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <HUIDialogPanel
              class="w-full min-w-sm max-w-50% rounded dark:bg-zinc-800 bg-zinc-200 p-4 rounded-lg"
            >
              <slot />
            </HUIDialogPanel>
          </HUITransitionChild>
        </div>
      </div>
    </HUIDialog>
  </HUITransitionRoot>
</template>

<style scoped></style>
