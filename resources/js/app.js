require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import{routes} from './routes'
import MainApp from './components/MainApp.vue'
import Navbar from "./components/navbar/navbar.vue";
import Footerbar from "./components/footerbar/footerbar.vue";

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
    routes,
});

const app = new Vue({
    el: '#app',
    router,
    components: {
        MainApp
    }
});

export default {
    // @ is an alias to /src
    components: {
        Navbar,
        Footerbar
    }
};
