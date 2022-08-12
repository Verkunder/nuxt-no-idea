<template>
    <div class="sidebar">
        <div class="sidebar__logo-content">
            <div class="sidebar__logo">
                <i class='bx bxl-c-plus-plus'></i>
                <div class="sidebar__logo-name">Verkunder</div>
            </div>
            <i class='bx bx-menu'></i>
        </div>
        <ul class="nav__list">
            <li>
                <i class='bx bx-search'></i>
                <input type="text" placeholder="Search..." />
                <!-- <span class="tooltip">Dashboard</span> -->
            </li>
            <li>
                <nuxt-link to="/"><i class='bx bx-grid-alt'></i>
                    <span class="links_name">Dashboard</span>
                </nuxt-link>
                <!-- <span class="tooltip">Dashboard</span> -->
            </li>
            <li>
                <nuxt-link to="/">
                    <i class='bx bxs-user'></i>
                    <span class="links_name">User</span>
                </nuxt-link>
                <!-- <span class="tooltip">Dashboard</span> -->
            </li>
            <li>
                <nuxt-link to="/">
                    <i class=' bx bxs-message'> </i>
                    <span class="links_name">Message</span>
                </nuxt-link>
                <!-- <span class="tooltip">Dashboard</span> -->
            </li>
            <li>
                <nuxt-link to="/">
                    <i class='bx bx-conversation'></i>
                    <span class="links_name">Chat</span>
                </nuxt-link>
                <!-- <span class="tooltip">Dashboard</span> -->
            </li>
            <li>
                <nuxt-link to="/">
                    <i class='bx bxs-pie-chart-alt'></i>
                    <span class="links_name">Analytics</span>
                </nuxt-link>
                <!-- <span class="tooltip">Dashboard</span> -->
            </li>
            <li>
                <nuxt-link to="/">
                    <i class='bx bx-folder'></i>
                    <span class="links_name">File Manager</span>
                </nuxt-link>
                <!-- <span class="tooltip">Dashboard</span> -->
            </li>
            <li>
                <nuxt-link to="/">
                    <i class='bx bx-cart'></i>
                    <span class="links_name">Order</span>
                </nuxt-link>
                <!-- <span class="tooltip">Dashboard</span> -->
            </li>
            <li>
                <nuxt-link to="/">
                    <i class='bx bx-heart'></i>
                    <span class="links_name">Saved</span>
                </nuxt-link>
                <!-- <span class="tooltip">Dashboard</span> -->
            </li>
            <li>
                <nuxt-link to="/">
                    <i class='bx bx-cog'></i>
                    <span class="links_name">Setting</span>
                </nuxt-link>
                <!-- <span class="tooltip">Dashboard</span> -->
            </li>
        </ul>
        <div class="profile__content">
            <div class="profile">
                <div class="profile__details">
                    <div class="name__job">
                        <div class="name">
                            Super Verkunder
                        </div>
                        <div class="job">FRONT!</div>
                    </div>
                </div>
                <i class='bx bx-log-out'></i>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="sass" scoped>
@import '@config'

.bx-menu
    color: #fff
    position: absolute
    left: 90%
    top: 6px
    font-size: 20px
    height: 50px
    width: 50px
    text-align: center
    line-height: 50px
    transform: translateX(-50%)





.sidebar
    height: 100%
    width: 240px
    background: #11101d
    position: fixed
    top: 0
    left: 0
    padding: 6px 14px
    &__logo
        color: #fff
        display: flex
        height: 50px
        width: 100%
        align-items: center

        &-name
            +poppins-r(20px, 150%)

        & i
            font-size: 28px
            margin-right: 5px

.nav__list
    margin-top: 20px

    & li
        height: 50px
        width: 100%
        position: relative
        margin: 0 5px

        & a
            color: white
            display: flex
            align-items: center
            transition: all 0.3s ease
            border-radius: 12px

            &:hover
                background: white
                color: #11101d

            & i
                height: 50px
                min-width: 50px
                border-radius: 12px
                line-height: 50px
                text-align: center
    
 
</style>