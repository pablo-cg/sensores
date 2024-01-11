<script setup lang="ts">
import type { Sensor } from '~/types';

const { data, isPending, isLoading, labelDate, selectedDate } =
  useSensorsData();

const sensorActual = ref<Sensor>();

const isInfoSensorOpen = ref(false);
const toggleInfoSensor = useToggle(isInfoSensorOpen);

function setInfoModal(sensor: Sensor) {
  sensorActual.value = sensor;
  toggleInfoSensor();
}
</script>

<template>
  <div class="container w-90% mx-auto">
    <header class="mb-6 flex flex-col gap-2">
      <h1 class="text-4xl font-bold text-center md:text-left">
        Información de Sensores &nbsp;
      </h1>
      <ClientOnly>
        <DatePickerPopup v-model="selectedDate" :label="labelDate" />
      </ClientOnly>
    </header>
    <LoaderIcon v-if="isPending || isLoading" class="w-20 h-20 mx-auto" />
    <template v-else>
      <main v-if="!data?.length">Sin Datos de Sensores</main>
      <main v-else class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <CardSensor
          @click="setInfoModal(sensor)"
          v-for="sensor in data"
          :key="sensor.codigo"
          :sensor="sensor"
        />
      </main>
    </template>

    <InfoSensor
      :sensor="sensorActual!"
      :is-open="isInfoSensorOpen"
      @close="toggleInfoSensor()"
    />
  </div>
</template>

<style scoped></style>
