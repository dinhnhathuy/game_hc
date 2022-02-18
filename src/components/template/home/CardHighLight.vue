<template>
    <div class="card bg-dark text-white high-light-card">
        <div class="card-img-wrapprer fit-img-wrapper">
            <img
                src="https://www.gamespot.com/a/uploads/screen_kubrick/1601/16018044/3925235-batman-oreo-2.jpg"
                class="card-img fit-card fit-img"
                alt="..."
            />
        </div>
        <div v-if="hasContent" class="card-img-overlay">
            <h5 class="card-title">Card title</h5>
            <p class="card-text line-clamp-2">
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
            </p>
            <p class="card-text">Last updated 3 mins ago</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    hasContent: {
        type: Boolean,
        default: true
    }
})
</script>

<style lang="scss" scoped>
.high-light-card {
    .fit-img-wrapper {
        padding-top: 60%;
        @media screen and (min-width: 1024px) {
            padding-top: 420px !important;
        }
    }

    .card-img-overlay {
        bottom: -100px !important;
        height: 150px;
        top: unset !important;
        transition: all 0.3s ease;
    }

    .card-text {
        height: 3.4rem;
        overflow: hidden;
    }
}
.high-light-card:hover {
    .card-img-overlay {
        bottom: 0 !important;
    }
}
</style>