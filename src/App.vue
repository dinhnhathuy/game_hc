<template>
  <component :is="layout">
    <router-view v-slot="{ Component }">
      <transition name="scale">
        <component class="wrapper" :is="Component" />
      </transition>
    </router-view>
  </component>
</template>

<script setup lang="ts">
import defaultLayout from '@/layouts/default.vue'
import { ref, watch, markRaw } from 'vue';
import { useRoute } from 'vue-router';

const layout = ref()
const route = useRoute()

watch(
  () => route.meta?.layout as string | undefined,
  async (metaLayout: any) => {
    try {
      const component = metaLayout && await import(/* @vite-ignore */ `@/layouts/${metaLayout}.vue`)
      layout.value = markRaw(component?.default || defaultLayout)
    } catch (error) {
      layout.value = markRaw(defaultLayout)
    }
  }
)
</script>

<style lang="scss">
@import "@/assets/scss/base.scss";
.wrapper {
  width: 100%;
  min-height: 100vh;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>