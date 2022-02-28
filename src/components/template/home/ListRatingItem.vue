<template>
  <div class="list">
    <div class="row">
      <div class="col-8 list-title">
        <h5>Top Upcoming Games</h5>
      </div>
      <div class="col-4">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle list-dropdown" type="button" id="dropdownMenuButton1"
            data-bs-toggle="dropdown" aria-expanded="false">overall</button>
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
        <a v-for="(item, index) in items" :key="index"
          class="list-group-item list-item-main d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto max-w__70">
            <div class="fw-bold">{{ item.title }}</div>
            {{ item.platform }}
          </div>
          <div class="list-item__rating">
            <span class="list-item__rating-core">
              <progressCircle :percent="percent(+item.score)"></progressCircle>
            </span>
            <span class="list-item__rating-review">{{ getRating(+item.score) }}</span>
          </div>
        </a>
        <li class="list-group-item list-item-main d-flex align-items-start dropdown-item__last">
          <a class href="#">See all upcoming games</a>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {
    PropType
  } from 'vue'
  import progressCircle from '../../common/CircularProgess.vue'
  import {
    game
  } from "@/components/types/index";
  import {
    appDetails
  } from '@/stores/modules/app'
  const appInfo = appDetails()

  const props = defineProps({
    items: {
      type: Array as PropType < game[] > ,
      required: true
    }
  })
  const getRating = (score: number) => {
    if (score && +score > 0) {
      if (score >= 9) return 'Suberd'
      if (score >= 8 && score < 9) return 'Great'
      if (score >= 7 && score < 8) return 'Good'
      if (score >= 6 && score < 7) return 'Fair'
      if (score >= 5 && score < 6) return 'Mediocre'
      if (score < 5) return 'Bad'
    }
    return 'Undefined'
  }
  const percent = (score: number) => (score / 10) * 100
</script>