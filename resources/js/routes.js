import Home from "./components/home/home.vue";
import AllAthletes from './components/allathletes/allathletes.vue';
import FormAddAthlete from "./components/formaddathlete/formaddathlete.vue";
import FormAddEquipe from "./components/formaddequipe/formaddequipe.vue";
import FormAddCompetition from "./components/formaddcompetition/formaddcompetition.vue";
import Athlete from "./components/athlete/athlete.vue";
import Competition from "./components/competition/competition.vue";
import Equipe from "./components/equipe/equipe.vue";
import AllEquipes from "./components/allequipes/allequipes.vue";
import AllCompetitions from "./components/allcompetitions/allcompetitions.vue";
import Chatapp from "./components/chat-app/chat-app.vue";
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
        path: '/add-equipe',
        name: "add-equipe",
        component: FormAddEquipe
    },
    {
        path: '/add-competition',
        name: "add-competition",
        component: FormAddCompetition
    },
    {
        path: '/all-equipes',
        name: "all-equipes",
        component: AllEquipes
    },
    {
        path: '/all-competitions',
        name: "all-competitions",
        component: AllCompetitions
    },
    {
        path: '/athlete/:id',
        name: "/athlete/:id",
        component: Athlete
    },
    {
        path: '/competition/:id',
        name: "/competition/:id",
        component: Competition
    },
    {
        path: '/equipe/:id',
        name: "/equipe/:id",
        component: Equipe
    },
    {
        path: "/message",
        name: "message",
        component: Chatapp
    },
    {
        path: "/about",
        name: "about",
        component: About
    }
]


