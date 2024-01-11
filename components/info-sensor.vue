<script setup lang="ts">
import type { Sensor } from '~/types';

interface Props {
  isOpen: boolean;
  sensor: Sensor;
}

interface Emits {
  (e: 'close'): void;
}

const props = defineProps<Props>();

const emit = defineEmits<Emits>();

const registros = computed(() => getMinMaxRegistro(props.sensor.data));

function formatHora(fecha?: string) {
  if (!fecha) return 'S/D';
  return useDateFormat(fecha, 'H:mm:ss').value;
}
</script>

<template>
  <ModalWrapper :is-open="isOpen" @close="emit('close')">
    <HUIDialogTitle
      as="h1"
      class="mb-4 text-xl font-bold leading-6 text-stone-900 dark:text-orange-50 flex justify-between items-center"
    >
      <span>{{ sensor.sucursal }} - {{ sensor.sector }}</span>
      <span
        class="i-material-symbols:settings-input-component-outline-rounded text-xl"
      />
    </HUIDialogTitle>
    <hr class="mb-4 border border-zinc-400 dark:border-zinc-600" />
    <ul class="flex flex-col gap-1 mb-6">
      <li><strong>Sensor:</strong> {{ sensor.nombre_sensor }}</li>
      <li>
        <strong>Temperatura Mínima:</strong>
        {{ registros.minimoRegistro?.prom || 'S/D' }} |
        <span class="i-material-symbols:nest-clock-farsight-analog-rounded" />
        {{ formatHora(registros.minimoRegistro?.fecha) }}
      </li>
      <li>
        <strong>Temperatura Máxima:</strong>
        {{ registros.maximoRegistro?.prom || 'S/D' }} |
        <span class="i-material-symbols:nest-clock-farsight-analog-rounded" />
        {{ formatHora(registros.maximoRegistro?.fecha) }}
      </li>
    </ul>

    <h2 class="text-lg font-medium mb-2">Registros Históricos</h2>
    <TablaHistoricaSensor :data="sensor.data" class="mb-5" />

    <section class="w-full flex justify-end">
      <button
        @click="emit('close')"
        class="border border-zinc-500/20 px-4 py-1 rounded-md bg-zinc-600 text-zinc-100 shadow-sm hover:bg-zinc-500"
      >
        Cerrar
      </button>
    </section>
  </ModalWrapper>
</template>

<style scoped></style>
