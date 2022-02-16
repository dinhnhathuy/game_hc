<template>
    <nav>
        <ol class="breadcrumb">
            <li v-for="(crumb, index) in crumbs" :key="index">
                <button class="btn btn-link" :class="{ disable: isLast(index) }" @click="selected(crumb)">{{ crumb }}</button>
            </li>
        </ol>
    </nav>
</template>

<script setup lang="ts">
const props = defineProps({
    crumbs: {
        type: Array,
        required: true
    }
})
const emit = defineEmits(['selected'])
const isLast = (index: number) => index === props.crumbs.length - 1
const selected = (crumb: any) => emit('selected', crumb)
</script>

<style scoped>
.breadcrumb {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.37rem;
}
</style>