<template>
  <!-- Floor -->
  <TresMesh :rotation="[-Math.PI / 2, 0, 0]" :receiveShadow="true">
    <TresPlaneGeometry :args="[floorMeasurements.width, floorMeasurements.height, 100, 100]" />
    <TresMeshStandardMaterial :alphaMap="texture.alphaMap" :transparent="true" :map="texture.map"
      :displacementMap="texture.displacementMap" :normalMap="texture.normalMap" :aoMap="texture.aoMap"
      :metalnessMap="texture.metalnessMap" :displacementScale="displacementScale"
      :displacement-bias="displacementBias" />
  </TresMesh>
</template>

<script lang="ts" setup>
import { RepeatWrapping, SRGBColorSpace } from 'three'
import GUI from 'lil-gui'

const floorMeasurements = {
  width: 20,
  height: 20,
}

const texture = await useTexture({
  alphaMap: "/textures/floor/alpha.jpg",
  map: "/textures/floor/sparse_grass_1k/sparse_grass_diff_1k.jpg",
  normalMap: "/textures/floor/sparse_grass_1k/sparse_grass_nor_gl_1k.jpg",
  displacementMap: "/textures/floor/sparse_grass_1k/sparse_grass_disp_1k.jpg",
  aoMap: "/textures/floor/sparse_grass_1k/sparse_grass_arm_1k.jpg",
})
texture.map.repeat.set(8, 8)
texture.normalMap.repeat.set(8, 8)
texture.displacementMap.repeat.set(8, 8)
texture.aoMap.repeat.set(8, 8)

texture.map.wrapS = RepeatWrapping
texture.map.wrapT = RepeatWrapping
texture.map.colorSpace = SRGBColorSpace
texture.normalMap.wrapS = RepeatWrapping
texture.normalMap.wrapT = RepeatWrapping
texture.displacementMap.wrapS = RepeatWrapping
texture.displacementMap.wrapT = RepeatWrapping
texture.aoMap.wrapS = RepeatWrapping
texture.aoMap.wrapT = RepeatWrapping

const displacementScale = ref(0.3)
const displacementBias = ref(-0.17)

onMounted(() => {
  const gui = new GUI()
  gui.add(displacementScale, 'value').name('displacementScale').min(0).max(1).step(0.001)
  gui.add(displacementBias, 'value').name('displacementBias').min(-1).max(1).step(0.001)
  gui.close()
})

</script>

<style></style>
