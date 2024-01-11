<script setup lang="ts">
import type { Sensor } from '~/types';

interface Props {
  sensor: Sensor;
}

defineProps<Props>();
</script>

<template>
  <div
    class="dark:bg-zinc-800 bg-zinc-300 p-4 rounded-xl font-mono cursor-pointer hover:scale-105 transition-transform active:scale-100 relative"
  >
    <div class="absolute top-2 right-4 text-xl">
      <span
        class="i-material-symbols:settings-input-component-outline-rounded"
      />
    </div>
    <ul>
      <li><strong>Sucursal:</strong> {{ sensor.sucursal }}</li>
      <li><strong>Sector:</strong> {{ sensor.sector }}</li>
      <li><strong>Sensor:</strong> {{ sensor.nombre_sensor }}</li>
      <li>
        <strong>Último valor registrado:</strong>
        {{ getUltimoRegistro(sensor.data).prom }}
      </li>
      <li>
        <strong>Hora Registro:</strong>
        {{ getUltimoRegistro(sensor.data).fecha }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
