import Home from "./components/home/home.vue";
import AllAthletes from './components/allathletes/allathletes.vue';
import FormAddAthletes from "./components/formaddathletes/formaddathletes.vue";
import About from "./components/about/about.vue";

export const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/home",
        name: "home",
        component: Home
    },
    {
        path: '/allathletes',
        name: "allathletes",
        component: AllAthletes
    },
    {
        path: '/formaddathletes',
        name: "formaddathletes",
        component: FormAddAthletes
    },
    {
        path: "/about",
        name: "about",
        component: About
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // If not dynamic, could go here
        // component: () =>
        // import( "./components/about/about.vue")
    }
]