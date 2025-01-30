<template>
  <!-- Door -->
  <TresMesh :position="[0, 1, 2 + 0.01]">
    <TresPlaneGeometry :args="[doorMeasurements.width, doorMeasurements.height, 100, 100]" />
    <TresMeshStandardMaterial v-bind="texture" :transparent="true" :displacement-bias="-0.04"
      :displacement-scale="0.15" />
  </TresMesh>
  <TresPointLight :position="[0, 2.2, 2.5]" :color="'#ff7d46'" :intensity="5" />
</template>

<script lang="ts" setup>
import { SRGBColorSpace } from 'three';

const doorMeasurements = {
  width: 2.2,
  height: 2.2,
}

const texture = await useTexture({
  map: "/textures/door/color.jpg",
  normalMap: "/textures/door/normal.jpg",
  roughnessMap: "/textures/door/roughness.jpg",
  metalnessMap: "/textures/door/metalness.jpg",
  alphaMap: "/textures/door/alpha.jpg",
  aoMap: "/textures/door/ambientOcclusion.jpg",
  displacementMap: "/textures/door/height.jpg",
})
texture.map.colorSpace = SRGBColorSpace
</script>

<style></style>