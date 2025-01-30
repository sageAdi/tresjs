<template>
  <TresCanvas :shadows="true" shadowMapType="PCFSoftShadowMap">
    <TresScene>
      <TresPerspectiveCamera :position="[4, 2, 5]" :fov="75" :near="0.1" :far="100" />
      <OrbitControls />
      <!-- House -->
      <TresGroup>
        <Suspense>
          <Wall />
        </Suspense>
        <Suspense>
          <Roof />
        </Suspense>
        <Suspense>
          <Bushes />
        </Suspense>
        <Suspense>
          <Door />
        </Suspense>
      </TresGroup>
      <Suspense>
        <Graves />
      </Suspense>
      <Suspense>
        <Floor />
      </Suspense>


      <TresAmbientLight :color="'#86cdff'" :intensity="0.4" />
      <TresDirectionalLight :color="'#86cdff'" :intensity="1" :position="[3, 2, -8]" :castShadow="true"
        shadowMapSizeWidth="256" shadowMapSizeHeight="256" shadowCameraNear="1" shadowCameraFar="20"
        shadowCameraLeft="-8" shadowCameraRight="8" shadowCameraTop="8" shadowCameraBottom="-8" v-light-helper />

      <Suspense>
        <Ghosts />
      </Suspense>
    </TresScene>
  </TresCanvas>
</template>

<script lang="ts" setup>
import { OrbitControls } from '@tresjs/cientos';









</script>

<style></style>
