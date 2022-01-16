<template>
  <div class="Dashboard row">
    <div class="col-3">
      <DefaultDashboard></DefaultDashboard>
    </div>
    <div class="contentDashboard col-9">
      <component :is="currentComponent" @createEntry="showEntry" @cancelEntry="offEntry"></component>

      <!-- <TableDashboard @createEntry="showEntry"></TableDashboard>
       -->
    </div>
  </div>

</template>

<script>
  import DefaultDashboard from '@/components/layout/defaultDashboard.vue'
  import TableDashboard from '../../components/dashboard/TableDashboard.vue'
  import CreateEntry from '../../components/dashboard/CreateEntry.vue'
  export default {
    components: {
      TableDashboard,
      DefaultDashboard,
      CreateEntry
    },
    data() {
      return {
        currentComponent: 'TableDashboard',
      };
    },
    methods: {
      showEntry() {

        this.currentComponent = 'CreateEntry'
        console.log(this);
      },
      offEntry() {

        this.currentComponent = "TableDashboard"
        console.log(this);
      },
    },
  };
</script>

<style>
  .Dashboard {
    background-color: rgb(248 249 250);
    display: flex;
  }
</style>