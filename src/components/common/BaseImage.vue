<template>
    <figure
        data-align="center"
        data-size="large"
        :data-img-src="imgSrc"
        :data-ratio="ratio"
        :data-width="imageWidth"
        data-embed-type="image"
        :style="{ width: imageWidth + 'px', position: 'relative' }"
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
        <div class="next-icon" @click="$emit('next-image')"><span>></span></div>
        <div class="previos-icon" @click="$emit('previos-image')"><span>&lt</span></div>
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
        type: [Number, String],
        default: 'auto'
    },
    ratio: {
        type: Number,
        default: 0.56166666666667
    }
})
</script>

<style lang="scss">
.next-icon, .previos-icon {
    padding: 2px;
    width: 30px;
    height: 30px;
    background: #000;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    cursor: pointer;
    span {
        color: #fff;
        font-weight: 500;
    }
}
.next-icon {
    right: 0;
}
.previos-icon {
    left: 0;
}
</style>