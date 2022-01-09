<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light px-4 main-nav">
    <div class="container-fluid">
      <a class="navbar-brand my-3" href="#">Game-hc</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-for="(item, index) in categories" :key="index" class="nav-item">
            <div v-if="item.child && item.child.length" >
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {{ item.name }}
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li v-for="(childNav, index) in item.child" :key="index"><span class="dropdown-item" href="#">{{childNav.name}}</span></li>
              </ul>
            </div>
            <RouterLink v-else :to="item.to" class="nav-link active" aria-current="page" href="#">{{ item.name }}</RouterLink>
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

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { navItem, navItemChild } from "../types/index";  

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

const categories = reactive([{
  name: "News",
  to: "/news",
  icon: "news",
},
{
  name: "Videos",
  to: "/videos",
  icon: "videos",
},
{
  name: "reviews",
  to: "/reviews",
  icon: "reviews",
},
{
  name: "gears",
  to: "/gears", 
  icon: "gears",
},
{
  name: "deals",
  to: "/deals",
  icon: "deals",
},
{
  name: "games",
  to: "/games",
  icon: "games",
  child: [{
    name: "PC gaming",
    to: "/games/pc",
  },{
    name: "PS5",
    to: "/games/ps5",
  },{
    name: "PS4",
    to: "/games/ps4",
  },{
    name: "Mobile",
    to: "/games/mobile",
  },{
    name: "Xbox",
    to: "/games/xbox",
  },{
    name: "Switch",
    to: "/games/switch",
  }]
}])

</script>

<style lang="scss" scoped>
.router-link-exact-active {
  font-weight: 800;
}
</style>