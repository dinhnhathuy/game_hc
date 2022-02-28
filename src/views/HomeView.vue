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
          <ListMainItem :items="games.topUpcomingGames">
          </ListMainItem>
          <ListRatingItem :items="games.topRatingGames">
          </ListRatingItem>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
  import CardHighLight from '../components/template/home/CardHighLight.vue'
  import CardTop from '../components/template/home/CardTop.vue'
  import CardMain from '../components/template/home/CardMain.vue'
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

<style lang="scss">
  .list {
    margin-bottom: 3rem;

    .list-title {
      margin-bottom: 1rem;
      h5 {
        color: #de004a;
        font-weight: 700;
      }
    }

    .list-dropdown {
      color: #5c636a;
      border-radius: 100px;
      border: 2px solid #e6e6e6;
      font-size: 0.8rem;
      font-weight: bold;
      background: none;
      text-align-last: center;
      padding: .2rem 1rem;
      position: relative;
      outline: none;

      &::after {
        position: relative;
        right: -0.6rem;
      }

      &:hover,
      &:focus {
        background: #fff;
        color: #5c636a;
      }
    }

    .dropdown-item__last {
      &::before {
        content: '';
      }
      a {
        color: #de004a;
        font-weight: 700;
        text-decoration: none;
      }
    }
  }
</style>
