<script setup lang="ts">
import type { Datum } from '~/types';

interface Props {
  data: Datum[];
}

const props = defineProps<Props>();

function formatHora(fecha: string) {
  return useDateFormat(fecha, 'H:mm:ss').value;
}

function formatFecha(fecha: string) {
  return useDateFormat(fecha, 'DD-MM-YYYY').value;
}

const ordenData = ref<'ASC' | 'DESC'>('ASC');

const dataOrdenada = computed(() =>
  getDataOrdenada(props.data, ordenData.value),
);

function cambiarOrdenTabla() {
  if (ordenData.value === 'ASC') {
    ordenData.value = 'DESC';
  } else {
    ordenData.value = 'ASC';
  }
}
</script>

<template>
  <div class="border border-zinc-600 rounded-md overflow-x-auto">
    <table class="w-full text-left">
      <thead class="border-b border-zinc-600 dark:bg-zinc-900 bg-zinc-300">
        <tr>
          <th class="px-2 py-1">
            <div class="flex items-center justify-between gap-2">
              Fecha/Hora
              <button
                @click="cambiarOrdenTabla"
                class="text-lg rounded px-1 hover:bg-zinc-500 hover:text-zinc-100 active:scale-95"
              >
                <span
                  class="i-material-symbols:keyboard-double-arrow-up-rounded"
                  :class="{ 'rotate-180 transform': ordenData === 'DESC' }"
                />
              </button>
            </div>
          </th>
          <th class="px-2 py-1">Temperatura</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="!data.length">
          <tr>
            <td colspan="2" class="text-center font-bold">
              Sin Datos Históricos
            </td>
          </tr>
        </template>
        <template v-else>
          <tr
            v-for="registro in dataOrdenada"
            :key="registro.fecha"
            class="border-b border-zinc-600 last:border-none odd:bg-zinc-100 even:bg-zinc-200 odd:dark:bg-zinc-900/30 even:dark:bg-zinc-800"
          >
            <td class="px-2 py-1">
              <span class="i-material-symbols:calendar-month-outline-rounded" />
              {{ formatFecha(registro.fecha) }}
              <span
                class="i-material-symbols:nest-clock-farsight-analog-rounded"
              />
              {{ formatHora(registro.fecha) }}
            </td>
            <td>{{ registro.prom }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
