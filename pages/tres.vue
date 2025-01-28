<script lang="ts" setup>
import GUI from 'lil-gui'
import { onMounted, reactive } from 'vue'
const state = reactive({
  clearColor: '#c0ffee',
  wireframe: false,
  boxColor: '#82DBC5',
  torusColor: 'orange'
})
onMounted(() => {
  const gui = new GUI()
  gui.addColor(state, 'clearColor')
  gui.add(state, 'wireframe')
  gui.addColor(state, 'boxColor')
  gui.addColor(state, 'torusColor')
})

</script>

<template>
  <TresCanvas window-size :clear-color="state.clearColor">
    <OrbitControls />
    <TresAxesHelper />
    <TresPerspectiveCamera makeDefault :position="[0, 0, 15]" :rotation="[0, 0, 0]" />
    <TresMesh :position="[3, 0, 0]">
      <TresBoxGeometry :args="[1, 1, 1]" />
      <TresMeshBasicMaterial :color="state.boxColor" :wireframe="state.wireframe" />
    </TresMesh>
    <TresMesh :position="[-2, 0, 0]">
      <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
      <TresMeshBasicMaterial :color="state.torusColor" />
    </TresMesh>
  </TresCanvas>
</template>



<style></style>
