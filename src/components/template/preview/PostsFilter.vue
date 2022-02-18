<template>
    <div class="filter">
        <h5 class="filter__title font-bold text-center">
            <span>Find Reviews</span>
        </h5>
        <form action="" class="filter__form">
            <div class="row filter__item" v-for="(input, index) in formInputsData" :key="index">
                <label class="col-4 form-label filter__label text-end font-semibold" for="">{{ input.title }}</label>
                <div class="col-8">
                    <input class="filter__input form-control" v-if="input.type !== 'select'" v-model="input.selected" :type="input.type">
                    <select class="filter__select form-select form-select-sm" v-model="input.selected" v-else name="cars" id="cars">
                        <option value="" disabled selected>{{ input.placeHolder }}</option>
                        <option v-for="(item, index) in input.options" :key="index" :value="item" class="filter__option">{{ item }}</option>
                    </select>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
const formInputsData = reactive([
    {
        title: 'Platform',
        placeHolder: 'Current platforms',
        options: ['test1','test2','test3','test4'],
        selected: '',
        isAdvanced: false,
        type: 'select'
    },
    {
        title: 'Genre',
        placeHolder: 'All Genre',
        options: ['test1','test2','test3','test4'],
        selected: '',
        isAdvanced: false,
        type: 'select'
    },
    {
        title: 'Release Date',
        placeHolder: 'All-time',
        options: ['Last','test2','test3','test4'],
        selected: '',
        isAdvanced: false,
        type: 'select'
    },
    {
        title: 'Minimum Score',
        placeHolder: 'Current platforms',
        options: ['test1','test2','test3','test4'],
        selected: '',
        isAdvanced: true,
        type: 'select'
    },
    {
        title: 'Theme',
        placeHolder: 'Current platforms',
        options: ['test1','test2','test3','test4'],
        selected: '',
        isAdvanced: true,
        type: 'select'
    },
    {
        title: 'Region',
        placeHolder: 'Current platforms',
        options: ['test1','test2','test3','test4'],
        selected: '',
        isAdvanced: true,
        type: 'select'
    },
    {
        title: 'Publishers',
        placeHolder: 'Current platforms',
        options: ['test1','test2','test3','test4'],
        selected: '',
        isAdvanced: true,
        type: 'text'
    },
    {
        title: 'Developers',
        placeHolder: 'Current platforms',
        options: ['test1','test2','test3','test4'],
        selected: '',
        isAdvanced: true,
        type: 'text'
    },
]) 
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
    .filter {
        &__item {
            padding: .5rem 0;
            border: 1px solid $gray-100;
        }
        &__title span {
            border-top: 2px solid $primary;
        }
    }
</style>