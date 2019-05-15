<template>
    <div id="main">
        <navbar/>

        <div class="container">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>


    </div>

</template>

<script>
    import Navbar from './Navbar.vue'
    export default {
        name: 'main-app',
        components:{
            Navbar
        }
    }
</script>

<style>

    #main{
        display: flex;
    }
    .page{
        position: fixed;
        width: inherit;
    }
    fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.5s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }

</style>