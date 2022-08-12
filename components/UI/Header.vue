<template>
    <div :class="burger ? 'sidebar active' : 'sidebar'">
        <div class="sidebar__logo-content">
            <div class="sidebar__logo">
                <i class='bx bxl-vuejs'></i>
                <div class="sidebar__logo-name">NuxtDash</div>
            </div>
            <i class='bx bx-menu' @click="burger = !burger"></i>
        </div>
        <ul class="nav__list">
            <li>
                <i class='bx bx-search' @click="burger = !burger"></i>
                <input type="text" placeholder="Search..." />
                <span class="tooltip">Search</span>
            </li>
            <li>
                <nuxt-link to="/"><i class='bx bx-grid-alt'></i>
                    <span class="links_name">Dashboard</span>
                </nuxt-link>
                <span class="tooltip">Dashboard</span>
            </li>
            <li>
                <nuxt-link to="/">
                    <i class='bx bxs-user'></i>
                    <span class="links_name">User</span>
                </nuxt-link>
                <span class="tooltip">User</span>
            </li>
            <li>
                <nuxt-link to="/">
                    <i class=' bx bxs-message'> </i>
                    <span class="links_name">Message</span>
                </nuxt-link>
                <span class="tooltip">Message</span>
            </li>
            <li>
                <nuxt-link to="/">
                    <i class='bx bx-conversation'></i>
                    <span class="links_name">Chat</span>
                </nuxt-link>
                <span class="tooltip">Chat</span>
            </li>
            <li>
                <nuxt-link to="/">
                    <i class='bx bxs-pie-chart-alt'></i>
                    <span class="links_name">Analytics</span>
                </nuxt-link>
                <span class="tooltip">Analytics</span>
            </li>
            <li>
                <nuxt-link to="/">
                    <i class='bx bx-folder'></i>
                    <span class="links_name">File Manager</span>
                </nuxt-link>
                <span class="tooltip">File Manager</span>
            </li>
            <li>
                <nuxt-link to="/">
                    <i class='bx bx-cart'></i>
                    <span class="links_name">Order</span>
                </nuxt-link>
                <span class="tooltip">Order</span>
            </li>
            <li>
                <nuxt-link to="/">
                    <i class='bx bx-heart'></i>
                    <span class="links_name">Saved</span>
                </nuxt-link>
                <span class="tooltip">Saved</span>
            </li>
            <li>
                <nuxt-link to="/">
                    <i class='bx bx-cog'></i>
                    <span class="links_name">Setting</span>
                </nuxt-link>
                <span class="tooltip">Setting</span>
            </li>
        </ul>
        <div class="profile__content">
            <div class="profile">
                <div class="profile__details">
                    <img src="https://avatars.githubusercontent.com/u/41262238?v=4" alt="Avatar" />
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
const burger = ref( false )
const search = ref( false )
const sideBar = ref( false )

</script>

<style lang="sass">

</style>