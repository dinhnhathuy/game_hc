<template>
    <div class="card card-main">
        <div class="row card-main__wrapper g-0 p-4">
            <div :class="hasScore ? 'col-md-7' : 'col-md-8'">
                <div class="card-body">
                    <h6 class="card-text card-main__label">Article</h6>
                    <h5 class="card-title card-main__title">
                        <RouterLink :to="{ name: to }">
                            This is a wider card with supporting text below as a natural
                            lead-in to
                            additional content. This content is a little bit longer.
                        </RouterLink>
                    </h5>
                    <p class="card-text">
                        <span>
                            <img src="/images/icon/time.svg" class="time-icon" />
                        </span>
                        <small class="text-muted">Last updated 3 mins ago</small>
                        <span class="card-comment">
                            <span>
                                <img src="/images/icon/comment.svg" class="comment-icon" />
                            </span>
                            <small class="text-muted">16</small>
                        </span>
                        <span class="card-like">
                            <span>
                                <img src="/images/icon/like.svg" class="like-icon" />
                            </span>
                            <small class="text-muted">1</small>
                        </span>
                    </p>
                </div>
            </div>
            <div v-if="hasScore" class="col-md-2 card-main__score">
                <progressCircle></progressCircle>
            </div>
            <div :class="hasScore ? 'col-md-3' : 'col-md-4'" class="fit-img-wrapper">
                <img src="https://www.gamespot.com/a/uploads/screen_kubrick/1601/16018044/3925235-batman-oreo-2.jpg"
                    class="fit-img img-fluid rounded-start" alt="..." />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import progressCircle from '../../common/CircularProgess.vue'
    const props = defineProps({
        hasScore: {
            type: Boolean,
            default: false
        },
        to: {
            type: String,
            default: 'home'
        }
    })
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/variables";

    .card-main {
        .card-main__wrapper {
            @media screen and (max-width: 1024px) {
                flex-direction: column-reverse;
            }
        }

        border-radius: 0;
        border: none;
        border-bottom: 1px solid $gray-400;

        &__label {
            font-size: 0.9rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
            color: $main-color;
        }

        &__title {
            font-weight: $font-bold;
            line-height: 1.5;
        }

        &__score {
            border-left: 1px solid $gray-400;
            display: flex;
            align-items: center;
        }

        .fit-img-wrapper {
            @media screen and (min-width: 1024px) {
                padding-top: 20%;
            }

            padding-top: 50%;

            img {
                border-radius: 1px !important;
            }
        }

        .time-icon,
        .comment-icon,
        .like-icon {
            filter: opacity(0.5);
            width: 1rem;
        }

        .time-icon {
            margin-right: 0.5rem;
        }

        .comment-icon,
        .like-icon {
            margin-left: 1rem;
            margin-right: 0.3rem;
        }
    }
</style>