<template>
    <div>
        <header>
            <div>
                <router-link to="/"><img  class="logo" src="img/logo.svg"></router-link>
            </div>
            <nav>
                <ul>
                    <li><p class="hover-nav">Athlètes</p>
                        <div class="cont-link-navbar">
                            <router-link class="link-navbar" to="/all-athletes">Liste des athlètes</router-link>
                        </div>
                        <div class="cont-link-navbar">
                            <router-link class="link-navbar" to="/add-athlete">Ajouter un athlète</router-link>
                        </div>
                    </li>
                    <li>
                        <p class="hover-nav">Equipes</p>
                        <div class="cont-link-navbar">
                            <router-link class="link-navbar" to="/all-equipes">Liste des equipes</router-link>
                        </div>
                        <div class="cont-link-navbar">
                            <router-link class="link-navbar" to="/add-equipe">Ajouter un equipe</router-link>
                        </div>
                    </li>
                    <li>
                        <p class="hover-nav">Competitions</p>
                        <div class="cont-link-navbar">
                            <router-link class="link-navbar" to="/all-competitions">Liste des competitions</router-link>
                        </div>
                        <div class="cont-link-navbar">
                            <router-link class="link-navbar" to="/add-competition">Ajouter un competition</router-link>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
</template>
<style>
    .link-navbar{
        height: 0;
        opacity: 0;
        transition: 0.5s;
        text-decoration: none;
        color: #4F4D4D

    }
    .link-navbar:hover{
        color: #000;
        opacity: 1;

    }
    .cont-link-navbar{
        padding: 2vh 0 2vh 0;
        margin-left: 1vw;
        width: 100%;
    }
    nav ul li:hover .link-navbar{
        height: auto;
        opacity: 0.9;
    }
    nav ul li p{
        font-weight: 700;
        transition: 0.5s;
        cursor: pointer
    }
    nav ul li:hover p{
        color: #FF4B2B;;
    }
    nav ul li{
        height: 0;
        transition: 0.5s;
    }
    nav ul li:hover {
        height: 10vh;
    }

</style>