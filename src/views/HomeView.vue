<script setup lang="ts">
  import pinaLogo from '../components/pinaLogo.vue'
  import HighLightCard from '../components/template/home/HighLightCard.vue'
  import TopCard from '../components/template/home/TopCard.vue'
  import MainCard from '../components/template/home/MainCard.vue'
  import TabBar from '../components/template/home/TabBar.vue'
</script>

<template>
  <main class="container">
    <h1>this is home page</h1>
    <div class="row">
      <div class="col-6 col-md-8 col-lg-8">
        <HighLightCard></HighLightCard>
      </div>
      <div class="col-6 col-md-4 col-lg-4">
        <HighLightCard></HighLightCard>
      </div>
    </div>
    <section>
      <div class="row">
        <div v-for="(item, index) in 8" :key="index" class="col-6 col-md-4 col-lg-3 mt-4">
          <TopCard></TopCard>
        </div>
      </div>
    </section>
    <section id="main-content" class="pt-3">
      <div class="row">
        <div class="col-6 col-md-8 col-lg-8">
          <TabBar class="mb-3"></TabBar>
          <div v-for="(item, index) in 8" :key="index">
            <MainCard></MainCard>
          </div>
        </div>
        <div class="col-6 col-md-4 col-lg-4">
          <div></div>
        </div>
      </div>
    </section>
    <pinaLogo></pinaLogo>
  </main>
</template>