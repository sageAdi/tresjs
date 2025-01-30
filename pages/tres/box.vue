<template>
  <TresCanvas :clear-color="state.clearColor">
    <TresPerspectiveCamera makeDefault :position="[0, 0, 20]" :rotation="[0, 0, 0]" />
    <OrbitControls />
    <Stars :size="0.3" />
    <Suspense>
      <SphereAnimation />
    </Suspense>

    <TresMesh :position="[0, 0, 0]">
      <TresBoxGeometry :args="[1, 1, 1]" />
      <TresMeshNormalMaterial :color="state.boxColor" :wireframe="state.wireframe" />
    </TresMesh>
  </TresCanvas>
</template>

<script lang="ts" setup>
const state = reactive({
  clearColor: '#333333',
  boxColor: '#dedede',
  wireframe: false
})

</script>

<style></style>