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
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // If not dynamic, could go here
        // component: () =>
        // import( "./components/about/about.vue")
    }
]

/////  ALEX
// import FormAddAthlete from './components/FormAddAthlete.vue';
// import AllAthletes from './components/AllAthletes.vue';
// import AllEquipes from './components/AllEquipes.vue';
// import Home from './components/Home.vue';
// import Athlete from './components/Athlete.vue';

// export const routes = [
//     { path: '/', component: Home},
//     // { path: '/add-athlete', component: FormAddAthlete },
//     // { path: '/all-athletes', component: AllAthletes },
//     // { path: '/all-equipes', component: AllEquipes },
//     { path: '/athlete/:id', component: Athlete },
//]
