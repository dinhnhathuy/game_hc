<template>
  <div>
    <TheHeader></TheHeader>
    <main class="wrapper">
      <router-view v-slot="{ Component }">
        <transition name="scale">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import TheHeader from "@/components/common/TheHeader.vue";

export default {
  components: {
    HelloWorld,
    TheHeader,
  },
  setup() {
  },
};
</script>

<style lang="scss">
@import "@/assets/base.css";
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