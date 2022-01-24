<template>
  <div>
    <TopBar></TopBar>
    <TheHeader></TheHeader>
    <main >
      <router-view v-slot="{ Component }">
        <transition name="scale">
          <component class="wrapper" :is="Component" />
        </transition>
      </router-view>
    <TheFooter></TheFooter>
    </main>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "@/components/common/TheHeader.vue";
import TopBar from "@/components/common/TopBar.vue";
import TheFooter from "./components/common/TheFooter.vue";
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