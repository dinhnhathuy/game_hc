<template>
    <div class="list">
        <div class="row">
            <div class="col-8 list-title">
                <h5>
                    <slot name="title"></slot>
                </h5>
            </div>
        </div>
        <div>
            <ol class="list-group">
                <li
                    v-for="(item, index) in items"
                    :key="index"
                    class="list-group-item list-item-main d-flex justify-content-between align-items-start overflow-hidden row"
                >
                    <div class="col-3 list-item__image">
                        <img
                            src="https://www.gamespot.com/a/uploads/screen_small/1640/16407182/3927657-pzsmashwindow.jpg"
                        />
                    </div>
                    <div class="col-8 ms-2 me-auto">
                        <div class="fw-bold">{{item.title}}</div>
                        <span>{{item.realeseDate}}</span>
                        
                    </div>
                </li>
                <li
                    class="list-group-item list-item-main d-flex align-items-start dropdown-item__last"
                >
                    <a class href="#">See all upcoming games</a>
                </li>
            </ol>
        </div>
    </div>
</template>

<script setup lang="ts">
import { post } from "@/components/types/index";
import { PropType } from "vue";
const props = defineProps({
    items: {
        type: Array as PropType<post[]>,
        required: true
    }
})

</script>