<template>
    <div id="main">
        <navbar/>
        <div class="container">
            <router-view></router-view>
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