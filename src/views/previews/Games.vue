<template>
  <main class="container">
    <ChangeTabs></ChangeTabs>
    <div class="row">
      <div class="col-12 col-lg-8 py-3">
        <CardHighLight :hasContent="false"></CardHighLight>
      </div>
      <div class="col-12 col-lg-4 py-3">
        <div class="highlight--preview">
          <h2>Horizon Forbidden West Review - Squad Goals</h2>
          <p>Horizon Forbidden West sometimes packs in so much that it gets in its own way, but the many well-drawn characters populating its quests keep it compelling.</p>
        </div>
      </div>
    </div>
    <section>
      <div class="row">
        <div v-for="(item, index) in 4" :key="index" class="col-6 col-md-4 col-lg-3 mt-4 px-3">
          <CardTop :hasScore="true"></CardTop>
        </div>
      </div>
    </section>
    <section id="main-content" class="pt-3">
      <div class="row">
        <div class="col-12 col-md-8 col-lg-8">
          <TabBar class="mb-3"></TabBar>
          <div v-for="(item, index) in 8" :key="index">
            <CardMain to="previews" :hasScore="true"></CardMain>
          </div>
          <div class="d-flex justify-content-center load-more">
            <button class="btn btn-primary mt-3">
              <span></span> Load more
            </button>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-4">
          <PostsFilter></PostsFilter>
          <ListMainItems :items="games.topUpcomingGames"></ListMainItems>
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
import ListMainItems from '@/components/template/preview/ListItems.vue'
import PostsFilter from '@/components/template/preview/PostsFilter.vue'
import {
  gamesArticle
} from '@/stores/modules/game'

const games = gamesArticle()
</script>