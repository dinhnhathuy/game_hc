<template>
  <main class="container">
    <div class="row">
      <div class="col-12 col-lg-8 py-3">
        <CardHighLight></CardHighLight>
      </div>
      <div class="col-12 col-lg-4 py-3">
        <CardHighLight></CardHighLight>
      </div>
    </div>
    <section>
      <div class="row">
        <div v-for="(item, index) in 8" :key="index" class="col-6 col-md-4 col-lg-3 mt-4 px-3">
          <CardTop></CardTop>
        </div>
      </div>
    </section>
    <section id="main-content" class="pt-3">
      <div class="row">
        <div class="col-12 col-md-8 col-lg-8">
          <TabBar class="mb-3"></TabBar>
          <div v-for="(item, index) in 8" :key="index">
            <CardMain></CardMain>
          </div>
          <div class="d-flex justify-content-center load-more">
            <button class="btn btn-primary mt-3"><span></span> Load more</button>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-4">
          <ListPopular></ListPopular>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
  import CardHighLight from '@/components/template/home/CardHighLight.vue'
  import CardTop from '@/components/template/home/CardTop.vue'
  import CardMain from '@/components/template/home/CardMain.vue'
  import TabBar from '@/components/template/home/TabBar.vue'
  import ListPopular from '@/components/template/home/ListPopular.vue'
  import {
    appDetails
  } from '@/stores/modules/app'
  import {
    gamesArticle
  } from '@/stores/modules/game'

  const games = gamesArticle()
  const appInfo = appDetails()
</script>