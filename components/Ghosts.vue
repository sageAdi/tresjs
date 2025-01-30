<template>
  <TresPointLight ref="ghost1" :color="'#8800ff'" :intensity="6" :position="[0, 0, 0]" :castShadow="true"
    shadowMapSizeWidth="256" shadowMapSizeHeight="256" shadowCameraFar="10" />
  <TresPointLight ref="ghost2" :color="'#ff0088'" :intensity="6" :position="[0, 0, 0]" :castShadow="true"
    shadowMapSizeWidth="256" shadowMapSizeHeight="256" shadowCameraFar="10" />
  <TresPointLight ref="ghost3" :color="'#ff0000'" :intensity="6" :position="[0, 0, 0]" :castShadow="true"
    shadowMapSizeWidth="256" shadowMapSizeHeight="256" shadowCameraFar="10" />
</template>

<script lang="ts" setup>
import type { Mesh } from 'three';

const { onBeforeRender } = useLoop()

const ghost1 = shallowRef()
const ghost2 = shallowRef<Mesh>()
const ghost3 = shallowRef<Mesh>()

onBeforeRender(({ elapsed }) => {
  if (ghost1.value) {
    const ghost1Angle = elapsed * 0.5
    ghost1.value.position.x = Math.cos(ghost1Angle) * 4
    ghost1.value.position.y = Math.sin(ghost1Angle) * 4
    ghost1.value.position.z = Math.sin(ghost1Angle) * Math.sin(ghost1Angle * 2.34) * Math.sin(ghost1Angle * 2.45) * 4
  }

  if (ghost2.value) {
    const ghost2Angle = -elapsed * 0.38
    ghost2.value.position.x = Math.sin(ghost2Angle) * 5
    ghost2.value.position.z = Math.cos(ghost2Angle) * 5
    ghost2.value.position.y = Math.sin(ghost2Angle) * Math.cos(ghost2Angle * 2.34) * Math.sin(ghost2Angle * 2.45) * 5
  }

  if (ghost3.value) {
    const ghost3Angle = elapsed * 0.23
    ghost3.value.position.x = Math.cos(ghost3Angle) * 6
    ghost3.value.position.z = Math.sin(ghost3Angle) * 6
    ghost3.value.position.y = Math.sin(ghost3Angle) * Math.cos(ghost3Angle * 2.34) * Math.sin(ghost3Angle * 2.45) * 6
  }



})
</script>

<style></style>