<template>
    <div class="card card-main">
        <div class="row g-0 p-4">
            <div class="col-md-8">
                <div class="card-body">
                    <h6 class="card-text card-main__label">Card title</h6>
                    <h5 class="card-title card-main__title">This is a wider card with supporting text below as a natural
                        lead-in to
                        additional content. This content is a little bit longer.</h5>
                    <p class="card-text">
                        <span><img src="/images/icon/time.svg" class="time-icon"></span>
                        <small class="text-muted">Last updated 3 mins ago</small>
                        <span class="card-comment">
                            <span><img src="/images/icon/comment.svg" class="comment-icon"></span>
                            <small class="text-muted">16</small></span>
                        <span class="card-like">
                            <span><img src="/images/icon/like.svg" class="like-icon"></span>
                            <small class="text-muted">1</small>
                        </span>
                    </p>
                </div>
            </div>
            <div class="col-md-4 fit-img-wrapper">
                <img src="https://www.gamespot.com/a/uploads/screen_kubrick/1601/16018044/3925235-batman-oreo-2.jpg"
                    class="fit-img img-fluid rounded-start" alt="...">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "@/assets/scss/custom/variables";

    .card-main {
        border-radius: 0;
        border: none;
        border-bottom: 1px solid $gray-400;

        &__label {
            font-size: .9rem;
            font-weight: bold;
            margin-bottom: .5rem;
            color: $main-color;
        }

        &__title {
            font-weight: $font-bold;
        }

        .fit-img-wrapper {
            padding-top: 20%;

            img {
                border-radius: 1px !important;
            }
        }

        .time-icon,
        .comment-icon,
        .like-icon {
            filter: opacity(.5);
            width: 1rem;
        }

        .time-icon {
            margin-right: .5rem;
        }

        .comment-icon,
        .like-icon {
            margin-left: 1rem;
            margin-right: .3rem;
        }
    }
</style>