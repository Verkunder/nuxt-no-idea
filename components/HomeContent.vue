<template>
    <div class="flex flex-col flex-1 gap-6 my-4">
        <h1 class="text-3xl font-semibold leading-loose text-white">Dashboard</h1>
        <div class="text-gray-200">Date: {{ output }}</div>
    </div>
    <hr class="border-gray-700" />
    <StatsCard />
    <OrderReport />
</template>

<script setup>
import StatsCard from './UI/StatsCard';
import OrderReport from './UI/OrderReport.vue'
let date = new Date();
let output = String( date.getDate() ).padStart( 2, '0' ) + '/' + String( date.getMonth() + 1 ).padStart( 2, '0' ) + '/' + date.getFullYear();
</script>

<style lang="scss" scoped>
</style>