import FormAddAthlete from './components/FormAddAthlete.vue';
import AllAthletes from './components/AllAthletes.vue';
import AllEquipes from './components/AllEquipes.vue';
import Home from './components/Home.vue';
import Athlete from './components/Athlete.vue';

export const routes = [
    { path: '/', component: Home},
    { path: '/add-athlete', component: FormAddAthlete },
    { path: '/all-athletes', component: AllAthletes },
    { path: '/all-equipes', component: AllEquipes },
    { path: '/athlete/:id', component: Athlete },
]
