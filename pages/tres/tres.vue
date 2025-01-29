<script lang="ts" setup>
import { Stars, OrbitControls } from '@tresjs/cientos';
import GUI from 'lil-gui'

const boxRef = shallowRef()

const state = reactive({
  clearColor: '#333333',
  wireframe: false,
  boxColor: '#82DBC5',
  torusColor: 'orange',
  texture: null
})


onMounted(() => {
  const gui = new GUI()
  const box = gui.addFolder('box')
  box.addColor(state, 'boxColor')
  box.add(state, 'wireframe')
  const torus = gui.addFolder('torus')
  torus.addColor(state, 'torusColor')
})
</script>

<template>
  <TresCanvas window-size :clear-color="state.clearColor">
    <TresPerspectiveCamera makeDefault :position="[0, 0, 20]" :rotation="[0, 0, 0]" />
    <OrbitControls />
    <TresAxesHelper />
    <Stars :size="0.3" />
    <BoxAnimation />
    <TresMesh :ref="boxRef" :position="[5, 0, 0]">
      <TresBoxGeometry :args="[1, 1, 1]" />
      <TresMeshBasicMaterial :color="state.boxColor" :wireframe="state.wireframe" />
    </TresMesh>
    <TresMesh :position="[-5, 0, 0]">
      <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
      <TresMeshBasicMaterial :color="state.torusColor" />
    </TresMesh>
    <TresMesh :position="[0, 5, 0]">
      <TresSphereGeometry :args="[1, 100, 100]" />
      <TresMeshBasicMaterial :color="state.boxColor" :wireframe="state.wireframe" />
    </TresMesh>
  </TresCanvas>
</template>



<style></style>
