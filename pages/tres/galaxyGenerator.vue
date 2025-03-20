<template>
  <TresCanvas>
    <TresPerspectiveCamera :position="[20, 20, 20]" />
    <OrbitControls />
    <TresPoints>
      <TresBufferGeometry>
        <TresFloat32BufferAttribute :args="[positions, 3]" attach="attributes-position" />
        <TresFloat32BufferAttribute :args="[colors, 3]" attach="attributes-color" />
      </TresBufferGeometry>
      <TresPointsMaterial :size="parameters.size" :size-attenuation="parameters.sizeAttenuation" :vertex-colors="true"
        :blending="AdditiveBlending" />

    </TresPoints>

  </TresCanvas>
</template>

<script lang="ts" setup>
import { AdditiveBlending, Color, type Points } from 'three';
import { Pane } from 'tweakpane'

const parameters = reactive({
  count: 20000,
  size: 0.01,
  sizeAttenuation: true,
  radius: 10,
  branches: 3,
  spin: 1,
  randomness: 0.2,
  insideColor: '#00b1ff',
  outsideColor: '#ff6030',
  randomnessPower: 3
});
const points = ref<Points>();
let positions = ref<Float32Array>(new Float32Array(parameters.count * 3));
let colors = ref<Float32Array>(new Float32Array(parameters.count * 3));

const generateGalaxy = () => {
  const colorInside = new Color(parameters.insideColor)
  const colorOutside = new Color(parameters.outsideColor)

  for (let i = 0; i < parameters.count; i++) {

    const i3 = i * 3;
    const radius = Math.random() * parameters.radius
    const spinAngle = radius * parameters.spin
    const branchAngle = (i % parameters.branches) / parameters.branches * Math.PI * 2

    const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : - 1) * parameters.randomness * radius
    const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : - 1) * parameters.randomness * radius
    const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : - 1) * parameters.randomness * radius


    // position
    positions.value[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
    positions.value[i3 + 1] = randomY;
    positions.value[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;


    // color
    const mixedColor = colorInside.clone()
    mixedColor.lerp(colorOutside, radius / parameters.radius)
    colors.value[i3] = mixedColor.r
    colors.value[i3 + 1] = mixedColor.g
    colors.value[i3 + 2] = mixedColor.b
  }
}

onMounted(() => {
  const pane = new Pane()
  const folder = pane.addFolder({ title: 'Galaxy Generator' })
  folder.addBinding(parameters, 'count', { min: 100, max: 100000, step: 100 })
  folder.addBinding(parameters, 'size', { min: 0, max: 1, step: 0.01 })
  folder.addBinding(parameters, 'sizeAttenuation')
  folder.addBinding(parameters, 'radius', { min: 1, max: 100, step: 1 })
  folder.addBinding(parameters, 'branches', { min: 1, max: 10, step: 1 })
  folder.addBinding(parameters, 'spin', { min: 0, max: 10, step: 1 })
  folder.addBinding(parameters, 'randomness', { min: 0, max: 1, step: 0.01 })
  folder.addBinding(parameters, 'randomnessPower', { min: 0, max: 10, step: 1 })
  folder.addBinding(parameters, 'insideColor')
  folder.addBinding(parameters, 'outsideColor')
  generateGalaxy()
})


watch(parameters, () => {
  generateGalaxy()
})
</script>

<style scoped>
canvas {
  width: 100%;
  height: 100%;
  background-color: #000;
}
</style>