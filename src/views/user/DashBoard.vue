<template>
  <div class="Dashboard row">
    <div class="col-3">
      <DefaultDashboard></DefaultDashboard>
    </div>
    <div class="contentDashboard col-9">
      <!-- <component :is="currentComponent" @createEntry="showEntry" @cancelEntry="offEntry"></component> -->

      <TableDashboard @createEntry="showEntry"></TableDashboard>
    </div>
  </div>
</template>

<script setup lang="ts">
import DefaultDashboard from '@/components/layouts/defaultDashboard.vue'
import TableDashboard from '../../components/dashboard/TableDashboard.vue'
import CreateEntry from '../../components/dashboard/CreateEntry.vue'
import { ref, reactive } from 'vue';

const currentComponent = ref<string>('TableDashboard')

const showEntry = () => currentComponent.value = "CreateEntry"
const offEntry = () => currentComponent.value = "TableDashboard"
</script>

<style>
.Dashboard {
  background-color: rgb(248 249 250);
  display: flex;
}
</style>