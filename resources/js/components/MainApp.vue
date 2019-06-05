<template>
    <div id="main">
        <navbar/>
        <div class="container">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
       <!-- <background/>-->
        <footerbar/>
    </div>

</template>

<script>
    import Navbar from './navbar/navbar.vue';
    import Footerbar from "./footerbar/footerbar.vue";
    import Background from "./background/background.vue";
    export default {
        name: 'main-app',
        components:{
            Navbar,
            Footerbar,
            Background
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
</style>