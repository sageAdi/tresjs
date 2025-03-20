<template>
  <TresPoints ref="particle">
    <TresPointsMaterial :size="0.2" :size-attenuation="true" :alpha-map="texture.alphaMap" :transparent="true"
      :depth-write="false" :vertex-colors="true" />
    <TresBufferGeometry>
      <TresFloat32BufferAttribute :args="[positions, 3]" attach="attributes-position" />
      <TresFloat32BufferAttribute :args="[colors, 3]" attach="attributes-color" />
    </TresBufferGeometry>

  </TresPoints>
</template>

<script lang="ts" setup>
import { useTexture } from '@tresjs/core';
import { AdditiveBlending, Points, PointsMaterial } from 'three';

const particle = ref<Points>();

const count = 5000;
const positions = new Float32Array(count * 3);
const colors = new Float32Array(count * 3);

for (let i = 0; i < count * 3; i += 3) {
  positions[i] = (Math.random() - 0.5) * 10;     // x
  positions[i + 1] = (Math.random() - 0.5) * 10; // y
  positions[i + 2] = (Math.random() - 0.5) * 10; // z
  colors[i] = Math.random();
  colors[i + 1] = Math.random();
  colors[i + 2] = Math.random();
}

const textureUrl = '/textures/kenney_particle-pack/PNG (Transparent)/circle_05.png';

const texture = await useTexture({
  map: textureUrl,
  alphaMap: textureUrl,

});
const { onLoop } = useRenderLoop();
onLoop(({ elapsed }) => {
  if (particle.value) {
    particle.value.position.y = -Math.sin(elapsed * 0.5) * 1;
  }
});
</script>

<style></style>