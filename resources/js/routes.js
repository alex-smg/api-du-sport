import Home from "./components/home/home.vue";
import AllAthletes from './components/allathletes/allathletes.vue';
import FormAddAthlete from "./components/formaddathlete/formaddathlete.vue";
import Athlete from "./components/athlete/athlete.vue";
import AllEquipes from "./components/allequipes/allequipes.vue";
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
        path: '/all-athletes',
        name: "all-athletes",
        component: AllAthletes
    },
    {
        path: '/add-athlete',
        name: "add-athlete",
        component: FormAddAthlete
    },
    {
        path: '/all-equipes',
        name: "all-equipes",
        component: AllEquipes
    },
    {
        path: '/athlete/:id',
        name: "/athlete/:id",
        component: Athlete
    },
    {
        path: "/about",
        name: "about",
        component: About
    }
]


