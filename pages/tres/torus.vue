<template>
  <TresCanvas :clear-color="state.clearColor">
    <TresPerspectiveCamera makeDefault :position="[0, 0, 20]" :rotation="[0, 0, 0]" />
    <OrbitControls />
    <Sky :size="0.3" />
    <TresMesh :position="[0, 0, 0]">
      <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
      <TresMeshBasicMaterial :color="state.torusColor" />
    </TresMesh>
  </TresCanvas>
</template>

<script lang="ts" setup>
const state = reactive({
  clearColor: '#f3f3f3',
  torusColor: '#dedede',
})

</script>

<style></style>