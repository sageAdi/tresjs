<template>
  <div class="flex border rounded-md p-2 gap-5 items-center">
    <div class="w-[50%] border bg-gray-200 rounded-md">
      <img :src="country.flag" alt="country flag" class="w-full h-full object-cover rounded-md">
    </div>
    <div class="flex flex-col gap-1 w-full">
      <p class="text-xl font-semibold">{{ country.name }}</p>
      <p class="text-sm font-medium">Captial: {{ country.capital }}</p>
      <p class="text-sm font-medium">Current date and time: {{ date.toLocaleDateString() }}</p>
      <div class="flex gap-2 mt-2 w-full">
        <button class="flex-1">Show Map</button>
        <NuxtLink :to="'/country/' + country.name" class="flex-1">Show Details</NuxtLink>
      </div>

    </div>

  </div>
</template>

<script lang="ts" setup>
import type { CountryProps } from '~/types/Country';

const date = new Date();
defineProps<{ country: CountryProps }>()
</script>

<style scoped>
button,
a {
  @apply bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 flex items-center justify-center
}
</style>