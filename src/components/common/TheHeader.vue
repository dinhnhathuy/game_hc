<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Game-hc</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-for="(item, index) in navItems" :key="index" class="nav-item" :class="{ active: item.active }">
            <RouterLink :to="item.to" class="nav-link active" aria-current="page" href="#">{{ item.name }}</RouterLink>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { reactive, ref } from 'vue'
import { navItem } from "../types/index";  

export default {
  setup() {
    const navItems = reactive([{
        name: "Home",
        to: "/",
        icon: "home",
        active: true
      },
      {
        name: "sign in",
        to: "/sign-in",
        icon: "lock",
        active: false
      },
      {
        name: "register",
        to: "/register",
        icon: "key",
        active: false
      },
      {
        name: "dashboard",
        to: "/dashboard",
        icon: "key",
        active: false
      }]) as Array<navItem>
    return { navItems }
  },
}
</script>

<style lang="scss" scoped>
.router-link-exact-active {
    font-weight: 800;
    }
</style>