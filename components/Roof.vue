<template>
  <!-- Roof -->
  <TresMesh :position="[0, houseMeasurements.height + roofMeasurements.height / 2, 0]" :rotation="[0, Math.PI / 4, 0]"
    :castShadow="true">
    <TresConeGeometry :args="[roofMeasurements.radius, roofMeasurements.height, roofMeasurements.segments]" />
    <TresMeshStandardMaterial v-bind="texture" />
  </TresMesh>
</template>

<script lang="ts" setup>
import { RepeatWrapping } from 'three'

const houseMeasurements = {
  width: 4,
  height: 2.5,
  depth: 4,
}

const roofMeasurements = {
  radius: 3.5,
  height: 1.5,
  segments: 4,
}

const texture = await useTexture({
  map: "/textures/roof/clay_roof_tiles_03_1k/clay_roof_tiles_03_diff_1k.jpg",
  normalMap: "/textures/roof/clay_roof_tiles_03_1k/clay_roof_tiles_03_nor_gl_1k.jpg",
  aoMap: "/textures/roof/clay_roof_tiles_03_1k/clay_roof_tiles_03_arm_1k.jpg",
  roughnessMap: "/textures/roof/clay_roof_tiles_03_1k/clay_roof_tiles_03_arm_1k.jpg",
  metalnessMap: "/textures/roof/clay_roof_tiles_03_1k/clay_roof_tiles_03_arm_1k.jpg",
})

texture.map.repeat.set(3, 1)
texture.normalMap.repeat.set(3, 1)
texture.aoMap.repeat.set(3, 1)
texture.roughnessMap.repeat.set(3, 1)
texture.metalnessMap.repeat.set(3, 1)

texture.map.wrapS = RepeatWrapping
texture.normalMap.wrapS = RepeatWrapping
texture.aoMap.wrapS = RepeatWrapping





</script>

<style></style>