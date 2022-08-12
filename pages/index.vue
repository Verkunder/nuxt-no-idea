<template>
    <div>
        <Header />
    </div>
</template>

<script setup>
import Header from '~~/components/UI/Header.vue';
const hello = ref( 'Hello World!' )
useHead( {
    titleTemplate: 'Site Title'
} )

</script>

<style lang="scss" scoped>
</style>