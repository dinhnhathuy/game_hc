<template>
    <div>
        <div
            data-embed-type="video"
            :data-src="`https://www.youtube.com/watch?v=${videoId}`"
            data-width="100%"
            data-height="100%"
            class="video__wrapper"
        >
            <iframe
                :src="`https://www.youtube-nocookie.com/embed/${videoId}`"
                height="100%"
                width="100%"
                scrolling="no"
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
            ></iframe>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    videoId: {
        type: String,
        required: true
    }
})
</script>

<style scoped>
.video__wrapper {
    width: 970px !important;
    max-width: 970px;
    height: 540px;
    margin-left: -100px;
    margin-right: -100px;
}
</style>