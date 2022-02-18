<template>
    <figure
        data-align="center"
        data-size="large"
        :data-img-src="imgSrc"
        :data-ratio="ratio"
        :data-width="imageWidth"
        data-embed-type="image"
        :style="{ width: imageWidth + 'px' }"
    >
        <div class="image-wrapper fit-img-wrapper" :style="{ 'padding-bottom': ratio * 100 + '%' }">
            <img
                :alt="imageCaption"
                :src="imgSrc"
                :srcset="`${imgSrc} 600w, ${srcset} 480w`"
                :sizes="imageSize"
                :data-width="imageWidth"
                class="fit-img"
            />
        </div>
        <figcaption>{{ imageCaption }}</figcaption>
    </figure>
</template>

<script setup lang="ts">
const props = defineProps({
    imgSrc: {
        type: String,
        required: true
    },
    imageCaption: {
        type: String,
        required: true
    },
    srcset: {
        type: String,
        default: ''
    },
    imageSize: {
        type: String,
        default: '(max-width: 600px) 100vw, 600px'
    },
    imageWidth: {
        type: Number,
        default: 600
    },
    ratio: {
        type: Number,
        default: 0.56166666666667
    }
})
</script>