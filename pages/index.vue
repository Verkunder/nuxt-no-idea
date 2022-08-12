<template>
    <div>
        <Header />
        <div class="homeContent">
            <HomeContent />
        </div>
    </div>
</template>

<script setup>
import Header from '~~/components/UI/Header.vue';
import HomeContent from '~~/components/HomeContent.vue';
const hello = ref( 'Hello World!' )
useHead( {
    titleTemplate: 'Site Title'
} )

</script>

<style lang="sass" scoped>

</style>