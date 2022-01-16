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
        <div class="col-12 col-md-8 col-lg-8">
          <TabBar class="mb-3"></TabBar>
          <div v-for="(item, index) in 8" :key="index">
            <MainCard></MainCard>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-4">
          <div>
            <div class="row">
              <div class="col-8">
                <h5>Top Upcoming Games</h5>
              </div>
              <div class="col-4">
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                    data-bs-toggle="dropdown" aria-expanded="false">Dropdown button</button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li v-for="(item, index) in appInfo.machineType" :key="item.id">
                      <a class="dropdown-item" href="#">{{ item.name }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <ol class="list-group list-group-numbered">
                <ListMainItem v-for="(item, index) in games.topUpcomingGames" :key="item.id" :item="item"></ListMainItem>
              </ol>
            </div>
          </div>
          <div>
            <div class="row">
              <div class="col-8">
                <h5>Top Upcoming Games</h5>
              </div>
              <div class="col-4">
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                    data-bs-toggle="dropdown" aria-expanded="false">Dropdown button</button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li v-for="(item, index) in appInfo.machineType" :key="item.id">
                      <a class="dropdown-item" href="#">{{ item.name }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <ol class="list-group">
                <ListRatingItem v-for="(item, index) in games.topRatingGames" :key="item.id" :item="item"></ListRatingItem>
              </ol>
              <div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    The current link item
  </a>
  <a href="#" class="list-group-item list-group-item-action">A second link item</a>
  <a href="#" class="list-group-item list-group-item-action">A third link item</a>
  <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
  <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">A disabled link item</a>
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <pinaLogo></pinaLogo>
  </main>
</template>

<script setup lang="ts">
  import pinaLogo from '../components/pinaLogo.vue'
  import HighLightCard from '../components/template/home/HighLightCard.vue'
  import TopCard from '../components/template/home/TopCard.vue'
  import MainCard from '../components/template/home/MainCard.vue'
  import TabBar from '../components/template/home/TabBar.vue'
  import ListMainItem from '../components/template/home/ListItem.vue'
  import ListRatingItem from '../components/template/home/ListRatingItem.vue'
  import {
    appDetails
  } from '../stores/modules/app'
    import {
    gamesArticle
  } from '@/stores/modules/game'

  const games = gamesArticle()
  const appInfo = appDetails()

</script>