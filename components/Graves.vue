<template>
  <!-- Graves -->
  <TresGroup>
    <TresMesh v-for="i in 30" :position="[getGravesPositions().x, getGravesPositions().y, getGravesPositions().z]"
      :rotation="[getGravesRotation().x, getGravesRotation().y, getGravesRotation().z]" :castShadow="true"
      :receiveShadow="true">
      <TresBoxGeometry :args="[0.6, 0.8, 0.2]" />
      <TresMeshStandardMaterial v-bind="texture" />
    </TresMesh>
  </TresGroup>
</template>

<script lang="ts" setup>
const getGravesPositions = () => {
  const angle = Math.random() * Math.PI * 2
  const radius = 3 + Math.random() * 4
  return {
    x: Math.sin(angle) * radius,
    y: Math.random() * 0.4,
    z: Math.cos(angle) * radius,
  }
}
const getGravesRotation = () => {
  const angle = Math.random() * Math.PI * 2
  return {
    x: Math.sin(angle) * 0.2,
    y: Math.random() * 0.2,
    z: Math.cos(angle) * 0.2,
  }
}
const texture = await useTexture({
  map: "/textures/grave/dry_riverbed_rock_1k/dry_riverbed_rock_diff_1k.jpg",
  normalMap: "/textures/grave/dry_riverbed_rock_1k/dry_riverbed_rock_nor_gl_1k.jpg",
  aoMap: "/textures/grave/dry_riverbed_rock_1k/dry_riverbed_rock_arm_1k.jpg",
  roughnessMap: "/textures/grave/dry_riverbed_rock_1k/dry_riverbed_rock_arm_1k.jpg",
  metalnessMap: "/textures/grave/dry_riverbed_rock_1k/dry_riverbed_rock_arm_1k.jpg",
})
</script>

<style></style>