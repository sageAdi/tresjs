<template>
  <div class="flex justify-center h-screen overflow-hidden md:mb-0">
    <nav aria-label="Left navigation"
      class="gap-4 md:max-w-[15rem] w-full px-4 py-4 border-r hidden md:flex flex-col overflow-y-auto">
      <NuxtLink v-for="link in navLinks" :href="link.href" :class="{ 'nav-link': true, 'active': isActive(link.href) }">
        {{
          link.label }}
      </NuxtLink>
    </nav>
    <nav aria-label="Bottom navigation"
      class="flex gap-4 w-full py-2 px-4 fixed left-0 bottom-0 right-0 border-t md:hidden bg-gray-100 z-50 overflow-x-auto">
      <NuxtLink v-for="link in navLinks" :href="link.href" :class="{ 'nav-link': true, 'active': isActive(link.href) }">
        {{
          link.label
        }}</NuxtLink>
    </nav>
    <div class="flex-1 h-[calc(100dvh-4rem)] md:h-full p-4 overflow-hidden flex flex-col gap-4">
      <header class="flex gap-4 items-center border-b pb-2">
        <template v-if="navLinks.find(link => link.href === route.path)">
          <button :class="`hover:bg-gray-200 rounded-md p-2 flex items-center justify-center bg-gray-100`">
            <Icon name="heroicons:hashtag" class="w-6 h-6" />
          </button>
        </template>
        <template v-else>
          <button @click="previousPage"
            :class="`hover:bg-gray-200 rounded-md p-2 flex items-center justify-center bg-gray-100`">
            <Icon name="heroicons:arrow-left" class="w-6 h-6" />
          </button>
        </template>

        <h1 class="text-2xl font-bold">{{ allRoutes.find(r => r.href === route.path)?.label }}</h1>
      </header>
      <div class="h-full overflow-y-auto">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const { routes: tresRoutes } = storeToRefs(useTresJsStore());
const navLinks = [
  { href: '/tres', label: 'TresJS' },
  { href: '/demo', label: 'Demo' },
];

const allRoutes = computed(() => {
  return [...navLinks, ...tresRoutes.value]
})

const isActive = (href: string) => {
  return route.path.startsWith(href);
};

const isNavOpen = ref(false)
const previousPage = () => {
  window.history.back()
}
</script>

<style>
.nav-link {
  @apply text-gray-900 md:hover:text-white md:hover:bg-blue-300 border bg-gray-100 shadow rounded-md px-2 py-1 md:px-4;
}

.active {
  @apply bg-blue-500 text-white;
}
</style>
