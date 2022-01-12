<template>
<div class="Dashboard">
  <div>
      <DefaultDashboard></DefaultDashboard>
    </div>
    <div class="contentDashboard">
      <TableDashboard></TableDashboard>
    </div>
</div>
 
</template>

<script>
import DefaultDashboard from '@/components/layout/defaultDashboard.vue'
import TableDashboard from '../../components/dashboard/TableDashboard.vue'
export default {
  components: {TableDashboard, DefaultDashboard}
}
</script>

<style>
  .Dashboard {
    background-color: rgb(248 249 250);
    display: flex; 
  }
  .Dashboard .contentDashboard {
    margin: 0 20px;
  }
</style>