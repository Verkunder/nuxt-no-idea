<template>
    <div class="flex gap-6 py-4">
        <div v-for="(stat, idx) in stats" :key="idx" class="flex flex-col p-4 w-1/3 bg-gray-900 rounded-lg gap-y-3">
            <div class="flex items-center gap-x-3">
                <span class="text-xs font-medium"
                    :class="stat.status === 'up' ? 'text-accent-green' : 'text-accent-red'">
                    {{ stat.percentage }}
                </span>
                <div class="p-0.5 rounded-full"
                    :class="stat.status === 'up' ? 'bg-accent-green/20' : 'bg-accent-red/20'">
                    <ArrowUpIcon v-if="stat.status === 'up'" class="fill-current text-accent-green" />
                    <ArrowDownIcon v-else class="fill-current text-accent-red" />
                </div>
            </div>
            <div class="text-3xl font-semibold text-white">{{ stat.value }}</div>
            <div class="text-sm tracking-wide text-gray-500">{{ stat.title }}</div>
        </div>
    </div>
</template>

<script setup>
const stats = [
    {
        title: "Total Revenue",
        percentage: "+32.40%",
        value: "$10,243.00",
        status: "up",
    },
    {
        title: "Total Dish Ordered",
        percentage: "-12.40%",
        value: "23,456",
        status: "down",
    },
    {
        title: "Total Customer",
        percentage: "+2.40%",
        value: "1,234",
        status: "up",
    },
];
</script>

<style lang="scss" scoped>
</style>