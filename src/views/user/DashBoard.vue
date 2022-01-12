<template>
<div class="Dashboard">
  <div>
      <DefaultDashboard></DefaultDashboard>
    </div>
    <div>
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
    background-color: rgba(213, 248, 246, 0.315);
    display: flex;
  }
</style>