<template>
    <div>
        <div class="row list">
            <div class="col-8 list-title">
                <h5>Top Upcoming Games</h5>
            </div>
            <div class="col-4">
                <div class="dropdown list-dropdown">
                    <button class="btn btn-secondary dropdown-toggle list-dropdown-title" type="button" id="dropdownMenuButton1"
                        data-bs-toggle="dropdown" aria-expanded="false">Dropdown button</button>
                    <ul class="dropdown-menu list-dropdown" aria-labelledby="dropdownMenuButton1">
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
</template>

<script setup lang="ts">
  import {
    gamesArticle
  } from '@/stores/modules/game'

  const games = gamesArticle()
</script>