<template>
  <nav class="navbar navbar-expand-lg top-nav px-5">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li
        v-for="(item, index) in navItems"
        :key="index"
        class="nav-item top-nav-item"
        :class="{ active: item.active }"
      >
        <a class="nav-link active" aria-current="page" href="#">{{ item.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { navItem } from "../types/index";

const navItems = reactive([
  {
    name: "Where is Xur",
    to: "/",
    icon: "/",
  },
  {
    name: "Trials Rewards This Week",
    to: "/",
    icon: "/",
  },
  {
    name: "2022 Upcoming Games",
    to: "/",
    icon: "/",
  },
  {
    name: "Rocket League Review",
    to: "/",
    icon: "/",
  },
  {
    name: "January Game Pass Games",
    to: "/",
    icon: "/",
  },
  {
    name: "PS Plus January Games",
    to: "/",
    icon: "/",
  },
]) as Array<navItem>

</script>
