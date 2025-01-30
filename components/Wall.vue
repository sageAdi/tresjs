<template>
  <!-- Walls -->
  <TresMesh :position="[0, houseMeasurements.height / 2, 0]" :castShadow="true" :receiveShadow="true">
    <TresBoxGeometry :args="[houseMeasurements.width, houseMeasurements.height, houseMeasurements.depth]" />
    <TresMeshStandardMaterial v-bind="texture" />
  </TresMesh>
</template>

<script lang="ts" setup>
const houseMeasurements = {
  width: 4,
  height: 2.5,
  depth: 4,
}

const texture = await useTexture({
  map: "/textures/wall/worn_brick_floor_1k/worn_brick_floor_diff_1k.jpg",
  normalMap: "/textures/wall/worn_brick_floor_1k/worn_brick_floor_nor_gl_1k.jpg",
  aoMap: "/textures/wall/worn_brick_floor_1k/worn_brick_floor_arm_1k.jpg",
  roughnessMap: "/textures/wall/worn_brick_floor_1k/worn_brick_floor_arm_1k.jpg",
  metalnessMap: "/textures/wall/worn_brick_floor_1k/worn_brick_floor_arm_1k.jpg",
})
</script>

<style></style>