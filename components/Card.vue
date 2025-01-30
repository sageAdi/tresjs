<template>
  <div class="px-4 py-2 rounded-md bg-gray-100 border border-gray-200 shadow-sm max-w-xs w-full flex flex-col gap-2">
    <NuxtLink :href="href" class="flex items-center gap-2 text-sm font-medium">
      <div>{{ id + 1 }}.</div>
      <span>{{ label }}</span>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const { routes } = storeToRefs(useTresJsStore());
const props = defineProps<{
  label: string;
  href: string;
  id: number;
}>();
</script>

<style></style>