<template>
    <div id="main">
        <navbar/>
        <div class="container">
            <transition name="fade" mode="out-in">
                <router-view/>
            </transition>
        </div>
        <footerbar/>
    </div>

</template>

<script>
    import Navbar from './navbar/navbar.vue';
    import Footerbar from "./footerbar/footerbar.vue";
    export default {
        name: 'main-app',
        components:{
            Navbar,
            Footerbar
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