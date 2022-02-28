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
        <li class="list-group-item list-item-main d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto max-w__60">
            <div class="fw-bold">{{ content.title }}</div>
            {{ content.realeseDate }}
          </div>
          <div class="list-item__image">
            <img src="https://www.gamespot.com/a/uploads/screen_small/1640/16407182/3927657-pzsmashwindow.jpg" />
          </div>
        </li>
        <li class="list-group-item list-item-main d-flex align-items-start dropdown-item__last">
          <a class href="#">See all upcoming games</a>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {
    appDetails
  } from '@/stores/modules/app'
  const props = defineProps({
    content: {
      type: Object,
      required: true
    }
  })

  const appInfo = appDetails()
</script>