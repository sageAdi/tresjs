<template>
  <div class="px-4 py-2 rounded-md bg-gray-100 border border-gray-200 shadow-sm max-w-xs w-full flex flex-col gap-2">
    <img :src="image" :alt="title" class="w-full h-[100px] rounded-md object-cover" />
    <NuxtLink :href="href" class="flex items-center gap-2 text-sm font-medium">
      <span>{{ title }}</span>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
  title: string;
  href: string;
  image?: string;
}>();
</script>

<style></style>