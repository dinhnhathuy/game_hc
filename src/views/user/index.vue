<template>
    <div class="Dashboard row">
        <div class="col-3">
            <div class="layout-dashboard">
                <div class="tools">
                    <div class="groupicon1">
                        <i class="fa fa-gamepad"></i>
                        <hr />
                    </div>

                    <div class="groupicon2">
                        <i class="fa fa-database"></i>
                        <hr />
                        <i class="fa fa-object-group"></i>
                        <i class="fa fa-folder"></i>
                        <i class="fa fa-info-circle"></i>
                    </div>
                    <hr />
                    <div class="groupicon3">
                        <i class="fa fa-square"></i>
                        <i class="fa fa-bell"></i>
                        <i class="fa fa-cog"></i>
                    </div>
                    <hr />
                </div>
                <div class="content">
                    <div class="top-content">
                        <h4>Content</h4>
                        <i class="fa fa-search"></i>
                    </div>
                    <hr />
                    <div class="b-content">
                        <ul>COLLECTION TYPES</ul>
                        <ul>SINGLE TYPES</ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="contentDashboard col-9">
            <component :is="currentComponent" @createEntry="showEntry" @cancelEntry="offEntry"></component>

            <TableDashboard @createEntry="showEntry"></TableDashboard>
        </div>
    </div>
</template>

<script setup lang="ts">
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
.layout-dashboard {
    display: flex;
    height: 100%;
    font-family: Segoe UI;
    border-right: 1px solid #bec7c8;
}
.tools {
    width: 80px;
    background-color: white;
    text-align: center;
    color: gray;
}

.tools i {
    display: block;
    font-size: 18px;
    margin-top: 25px;
}

.content {
    width: 230px;
    height: 100%;
    padding-left: 10px;
}
.content ul {
    margin-left: -40px;
}
.content .top-content {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
}
.content .top-content > i {
    background-color: white;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border-radius: 10px;
}
.content .b-content {
    padding-left: 10px;
}
</style>