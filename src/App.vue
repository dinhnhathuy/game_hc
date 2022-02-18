<template>
  <component :is="$route.meta.layout || 'div'">
    <router-view v-slot="{ Component }">
      <transition name="scale">
        <component class="wrapper" :is="Component" />
      </transition>
    </router-view>
  </component>
</template>

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