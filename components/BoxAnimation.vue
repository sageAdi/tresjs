<script lang="ts" setup>
const state = reactive({
  color: '#82DBC5',
  wireframe: false
})
const { onBeforeRender } = useLoop()
const boxRef = shallowRef()


onBeforeRender(({ delta,elapsed }) => {
  // state.color = `hsl(${Math.sin(elapsed) * 100}, 100%, 50%)`
  if(boxRef.value) {
    // boxRef.value.rotation.y += delta
    boxRef.value.position.y = Math.sin(elapsed) * 2
    boxRef.value.position.x = Math.cos(elapsed) * 2
  }
})

</script>

<template>
  <TresMesh ref="boxRef" :position="[1, 0, 0]">
    <TresSphereGeometry :args="[1, 100, 100]" />
    <TresMeshBasicMaterial :color="state.color" :wireframe="state.wireframe" />
  </TresMesh>
</template>


