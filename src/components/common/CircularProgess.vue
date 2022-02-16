<template>
    <svg viewBox="0 0 36 36" class="circular-chart">
        <text x="14" y="23" class="small">{{ percent / 10 }}</text>
        <path
            class="circle"
            :stroke-dasharray="`${percent} 100`"
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
    </svg>
</template>

<script setup lang="ts">
const props = defineProps({
    percent: {
        type: Number,
        default: 80
    }
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
.circular-chart {
    display: block;
    margin: 0 auto;
    max-width: 80%;
    max-height: 100px;
    height: $progress-size;
    position: relative;
}

.circle {
    stroke: $red;
    fill: none;
    stroke-width: 2.8;
    stroke-linecap: round;
    animation: progress 1s ease-out forwards;
}

.small {
    font-size: .8rem;
    font-weight: bold;
}

@keyframes progress {
    0% {
        stroke-dasharray: 0 100;
    }
}
</style>