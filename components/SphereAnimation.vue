<script lang="ts" setup>
const state = reactive({
  color: '#82DBC5',
  wireframe: false
})
const { onBeforeRender } = useLoop()
const sphereRef = shallowRef()


onBeforeRender(({ delta, elapsed }) => {
  if (sphereRef.value) {
    // sphereRef.value.rotation.y += delta
    sphereRef.value.position.y = Math.sin(elapsed) * 2
    sphereRef.value.position.x = Math.cos(elapsed) * 2
  }
})

</script>

<template>
  <TresMesh ref="sphereRef" :position="[1, 0, 0]">
    <TresSphereGeometry :args="[1, 100, 100]" />
    <TresMeshBasicMaterial :color="state.color" :wireframe="state.wireframe" />
  </TresMesh>
</template>
