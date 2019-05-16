<template>
    <div id="main">
        <navbar/>
        <div class="container">
            <transition name="fade" mode="out-in">
                <router-view/>
            </transition>
        </div>
    </div>

</template>

<script>
    import Navbar from './navbar/navbar.vue'
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




</style>