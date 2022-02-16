<template>
  <a class="list-group-item list-item-main d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto max-w__70">
      <div class="fw-bold">{{ item.title }}</div>
      {{ item.platfrom }}
    </div>
    <div class="list-item__rating">
      <span class="list-item__rating-core">
        <progressCircle :percent="percent(+item.score)"></progressCircle>
      </span>
      <span class="list-item__rating-review">{{ review }}</span>
    </div>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import progressCircle from '../../common/CircularProgess.vue'
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
const review = computed(() => {
    if (props.item.score && +props.item.score > 0) {
    const score = +props.item.score
    if (score >= 9) return 'Suberd'
    if (score >= 8 && score < 9) return 'Great'
    if (score >= 7 && score < 8) return 'Good'
    if (score >= 6 && score < 7) return 'Fair'
    if (score >= 5 && score < 6) return 'Mediocre'
    if (score < 5) return 'Bad'
  }
  return 'Undefined'
})
const percent = (score: number) => (score / 10) * 100
</script>