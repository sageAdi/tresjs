<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full items-center gap-4">
    <Card v-for="route in routes" :key="route.id" :label="route.label" :href="route.href" :id="route.id" />
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useTresJsStore } from '~/stores/tresJs';

const store = useTresJsStore();
const { routes } = storeToRefs(store);
</script>

<style></style>