<template>
  <div>
    <TopBar></TopBar>
    <TheHeader></TheHeader>
    <slot></slot>
    <TheFooter></TheFooter>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "@/components/common/TheHeader.vue";
import TopBar from "@/components/common/TopBar.vue";
import TheFooter from "@/components/common/TheFooter.vue";
</script>
