<template>
  <a class="list-group-item list-item-main d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto max-w__60">
      <div class="fw-bold">{{ item.title }}</div>
      {{ item.platfrom }}
    </div>
    <div class="list-item__rating">
      <span class="list-item__rating-core">{{ item.score }}</span>
      <span class="list-item__rating-review">{{ review }}</span>
    </div>
  </a>
</template>

<script lang="ts">
  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    computed: {
      review() {
        if(this.item.score && +this.item.score > 0) {
          const score  = +this.item.score
          if (score >= 9) return 'Suberd'
          if (score >= 8 && score < 9) return 'Great'
          if (score >= 7 && score < 8) return 'Good'
          if (score >= 6 && score < 7) return 'Fair'
          if (score >= 5 && score < 6) return 'Mediocre'
          if (score < 5) return 'Bad'
        }
        return 'Undefined'
      }
    }
  }
</script>