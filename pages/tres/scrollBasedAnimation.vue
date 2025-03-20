<template>
  <TresCanvas>
    <TresPerspectiveCamera :position="[0, 0, 6]" />
    <TresMesh>
      <TresBoxGeometry />
      <TresMeshBasicMaterial color="red" />
    </TresMesh>
  </TresCanvas>
  <div class="container">
    <div class="section">
      <h1>My Portfolio</h1>
    </div>
    <div class="section">
      <h2>My projects</h2>
    </div>
    <div class="section">
      <h2>Contact me</h2>
    </div>
  </div>

</template>

<script lang="ts" setup>
const canvasClass = ref("my-canvas");

</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 100px;
}

.section {
  height: 100vh;
  border: 1px solid red;
}

#canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>