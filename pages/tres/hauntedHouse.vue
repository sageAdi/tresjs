<template>
  <TresCanvas :shadows="true" shadowMapType="PCFSoftShadowMap">
    <TresFog :args="['#262837', 1, 13]" />
    <TresScene>
      <TresPerspectiveCamera :position="[4, 2, 5]" :fov="75" :near="0.1" :far="100" />
      <OrbitControls />
      <Sky :turbidity="skyState.turbidity" :rayleigh="skyState.rayleigh" :mieCoefficient="skyState.mieCoefficient"
        :mieDirectionalG="skyState.mieDirectionalG" :elevation="skyState.elevation" />

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
import { OrbitControls, Sky, Smoke } from '@tresjs/cientos';
import { Pane } from 'tweakpane';
import { reactive } from 'vue';

const skyState = reactive({
  turbidity: 80,
  rayleigh: 10,
  mieCoefficient: 0.001,
  mieDirectionalG: 0.96,
  elevation: -0.4,
});

onMounted(() => {
  const pane = new Pane();
  const sky = pane.addFolder({ title: 'Sky' });
  sky.addBinding(skyState, 'turbidity');
  sky.addBinding(skyState, 'rayleigh');
  sky.addBinding(skyState, 'mieCoefficient');
  sky.addBinding(skyState, 'mieDirectionalG');
  sky.addBinding(skyState, 'elevation');
});

</script>

<style></style>
