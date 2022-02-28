<template>
  <section
    class="article__banner"
    :style="bannerStyle"
  >
    <div class="article__banner--overlay">
      <div class="article__banner--content">
        <span>preview</span>
        <h3 class="article__banner--title">Grapple Dog Review - Bionic Commandog</h3>
        <p class="article__banner--release-date">First Released Feb 10, 2022</p>
        <p class="article__banner--platform">NS</p>
        <ul class="article__banner--subnav-list">
          <li class="article__banner--subnav-item item-first"></li>
          <li class="article__banner--subnav-item">Reviews</li>
          <li class="article__banner--subnav-item">News & Features</li>
          <li class="article__banner--subnav-item">video</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  backgroundImg: {
    type: String,
    default: "https://www.gamespot.com/a/uploads/screen_kubrick_wide/1585/15855271/3941293-ss_955817273e7cc1dbf6d73ace3be2ac7f6d18d2b8.600x338.jpg"
  }
})

const bannerStyle = computed(() => ({
  'background': `linear-gradient(to top, rgba(0, 0, 0, 0.52), rgba(255, 248, 248, 0.15)) 0% 0% / cover, url(' ${ props.backgroundImg }')`,
  'background-size': '1460px auto',
  'background-position': '50% 50%',
  'background-repeat': 'no-repeat',
  'background-color': ' #000'
}))


</script>
