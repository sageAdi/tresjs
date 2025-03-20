<template>
  <TresCanvas>
    <TresPerspectiveCamera :position="[0, 0, 10]" />
    <OrbitControls />
    <TresMesh>
      <TresBoxGeometry />
      <TresMeshNormalMaterial />
    </TresMesh>
    <Suspense>
      <Environment background :files="environmentMapFile" ref="environmentMapRef" />
    </Suspense>
  </TresCanvas>
</template>

<script lang="ts" setup>
import { Environment } from '@tresjs/cientos';
const environmentMapFile = "/environmentMaps/harties_cliff_view_1k.hdr";
const environmentMapRef = shallowRef();
onMounted(() => {
  console.log(environmentMapRef.value);
});

watch(environmentMapRef, (newVal) => {
  console.log(newVal);
});

</script>

<style></style>