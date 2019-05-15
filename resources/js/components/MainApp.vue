<template>
    <div id="main">
        <navbar/>
        <div class="container">
            <router-view></router-view>
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
</style>