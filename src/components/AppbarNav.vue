<template>
    <v-app-bar color="primary">
        <v-img src="../assets/favicon.png" max-width="50px" class="ml-4"></v-img>


        <v-spacer></v-spacer>

        <v-btn variant="text">
            <router-link to="/" class="hover-text">
                Accueil
            </router-link>
        </v-btn>

        <!--<v-btn variant="text">
            <router-link to="/search" class="hover-text">
                Recherche
            </router-link>
        </v-btn>

        <v-btn variant="text">
            <router-link to="/profil" class="hover-text">
                Profil
            </router-link>
        </v-btn>

        <v-btn variant="text">
            <router-link to="/Login" class="hover-text">
                Se connecter
            </router-link>
        </v-btn>-->

        <v-menu open-on-hover>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props">
                    <div class="hover-text">Compte</div>
                </v-btn>
            </template>

            <v-list>
                <v-list-item>
                    <v-btn variant=text>
                        <router-link to="/Login" class="hover-text">
                            Se connecter
                        </router-link>
                    </v-btn>
                    <v-divider></v-divider>
                    <v-btn variant=text>
                        <router-link to="/profil" class="hover-text">
                            Mon profil
                        </router-link>
                    </v-btn>
                </v-list-item>
            </v-list>
        </v-menu>

    </v-app-bar>
</template>
  

<style>
a {
    color: inherit;
    text-decoration: none;
}
</style>