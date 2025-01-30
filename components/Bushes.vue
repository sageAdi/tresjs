<template>
  <!-- Bushes -->
  <TresMesh :position="[0.8, 0.2, 2.3]" :rotation="[-0.75, 0, 0]">
    <TresSphereGeometry :args="[0.5, 16, 16]" />
    <TresMeshStandardMaterial v-bind="texture" :color="'#ccffcc'" />
  </TresMesh>
  <TresMesh :position="[1.4, 0.1, 2.1]" :rotation="[-0.75, 0, 0]">
    <TresSphereGeometry :args="[0.25, 16, 16]" />
    <TresMeshStandardMaterial v-bind="texture" :color="'#ccffcc'" />
  </TresMesh>
  <TresMesh :position="[-0.8, 0.1, 2.2]" :rotation="[-0.75, 0, 0]">
    <TresSphereGeometry :args="[0.4, 16, 16]" />
    <TresMeshStandardMaterial v-bind="texture" :color="'#ccffcc'" />
  </TresMesh>
  <TresMesh :position="[-1, 0.05, 2.6]" :rotation="[-0.75, 0, 0]">
    <TresSphereGeometry :args="[0.15, 16, 16]" />
    <TresMeshStandardMaterial v-bind="texture" :color="'#ccffcc'" />
  </TresMesh>
</template>

<script lang="ts" setup>
import { RepeatWrapping } from 'three'


const texture = await useTexture({
  map: "/textures/bush/leaves_forest_ground_1k/leaves_forest_ground_diff_1k.jpg",
  normalMap: "/textures/bush/leaves_forest_ground_1k/leaves_forest_ground_nor_gl_1k.jpg",
  aoMap: "/textures/bush/leaves_forest_ground_1k/leaves_forest_ground_arm_1k.jpg",
  roughnessMap: "/textures/bush/leaves_forest_ground_1k/leaves_forest_ground_arm_1k.jpg",
  metalnessMap: "/textures/bush/leaves_forest_ground_1k/leaves_forest_ground_arm_1k.jpg",
})

texture.map.repeat.set(2, 1)
texture.normalMap.repeat.set(2, 1)
texture.aoMap.repeat.set(2, 1)
texture.roughnessMap.repeat.set(2, 1)
texture.metalnessMap.repeat.set(2, 1)

texture.map.wrapS = RepeatWrapping
texture.normalMap.wrapS = RepeatWrapping
texture.aoMap.wrapS = RepeatWrapping





</script>

<style></style>