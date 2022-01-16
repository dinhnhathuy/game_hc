<template>
  <li class="list-group-item list-item-main d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto max-w__60">
      <div class="fw-bold">{{ item.title }}</div>
      {{ item.realeseDate }}
    </div>
    <div class="list-item__image">
      <img src="https://www.gamespot.com/a/uploads/screen_small/1640/16407182/3927657-pzsmashwindow.jpg" alt="">
    </div>
  </li>
</template>

<script lang="ts">
  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  }
</script>