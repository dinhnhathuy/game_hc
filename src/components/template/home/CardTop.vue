<template>
    <div class="card top-card">
        <div class="card-img-wrapprer fit-img-wrapper">
            <img
                src="https://www.gamespot.com/a/uploads/screen_kubrick/1601/16018044/3925235-batman-oreo-2.jpg"
                class="card-img-top fit-card fit-img"
                alt="..."
            />
            <div class="top-card-cmt">
                <img src="/images/icon/comment.svg" class="comment-icon" />
                1
            </div>
        </div>
        <div class="card-body">
            <router-link :to="{name: 'article', params: {id: 123}}">
                <h5 class="card-title line-clamp-3">
                    Some quick example text to build on the card title and make up the bulk of the card's
                    content.
                </h5>
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
a {
    color: $gray-900;
    text-decoration: none;
}
.top-card {
    border: none;
    .card-img-wrapprer {
        padding-top: 60%;
    }
    .card-title {
        height: 4.5rem;
        overflow: hidden;

    }
    &:hover {
        .card-title {
            color: $main-color;
        }
    }
    .top-card-cmt {
        position: absolute;
        color: #fff;
        bottom: 0.3rem;
        right: 0.3rem;
        .comment-icon {
            filter: brightness(0) invert(1);
        }
    }
}
</style>