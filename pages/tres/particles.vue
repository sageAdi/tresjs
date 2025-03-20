<template>
  <TresCanvas>
    <TresScene>
      <TresPerspectiveCamera makeDefault :position="[0, 0, 5]" :rotation="[0, 0, 0]" />
      <OrbitControls />
      <Suspense>
        <Particle />
      </Suspense>
    </TresScene>
  </TresCanvas>
</template>

<script lang="ts" setup>

</script>

<style scoped>
canvas {
  width: 100%;
  height: 100%;
  background-color: #000;
}
</style>