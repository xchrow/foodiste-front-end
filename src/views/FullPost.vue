<script setup>
import FormAddComment from '../components/FormAddComment.vue'
</script>

<script>
export default {
    data() {
        return {
            heartPlaying: false,
            bookmarkPlaying: false
        }
    },

    methods: {
        heartIsPlaying() {
            this.heartPlaying = !this.heartPlaying;
        },
        bookmarkIsPlaying() {
            this.bookmarkPlaying = !this.bookmarkPlaying;
        }
    }
}
</script>

<template>
    <v-container>
        <h2>Critique</h2>

        <v-divider></v-divider>

        <div class="d-flex">
            <v-list-item router to="/profil">
                <v-avatar image="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"
                    rounded="0" size="40"></v-avatar>
            </v-list-item>
            <div class="d-flex mt-5">
                <h6 class="pr-3">Nom du blog </h6>
                <p>@pseudo</p>
            </div>
        </div>

        <v-divider></v-divider>

        <v-list-item router to="/Restaurant">
            <h3>Nom du restaurant</h3>
        </v-list-item>

        <div class="d-flex justify-space-between">
            <div class="d-flex align-items-center">
                <v-chip class="ma-2 mt-0"> Catégorie </v-chip>
                <v-chip class="ma-2 mt-0"> Catégorie </v-chip>
                <v-chip class="ma-2 mt-0"> Catégorie </v-chip>
                <v-chip class="ma-2 mt-0"> Catégorie </v-chip>
            </div>

            <div class="d-flex align-items-center pa-2">
                <v-icon class="ma-2"> mdi-leaf </v-icon>
                <v-icon class="ma-2"> mdi-food-halal </v-icon>
                <div class="vr"></div>
                <v-icon class="ma-2"> mdi-table-chair </v-icon>
                <v-icon class="ma-2"> mdi-moped-outline </v-icon>
                <v-icon class="ma-2"> mdi-food-takeout-box-outline </v-icon>
                <div class="vr"></div>
                <v-icon class="ma-2"> mdi-wheelchair </v-icon>
                <div class="vr"></div>
                <v-icon class="ma-2"> mdi-wifi </v-icon>
            </div>
        </div>


        <div class="d-flex pt-2 pb-2 pl-4">
            <v-icon class="pr-2">mdi-map-marker</v-icon>
            1 rue de la faim
        </div>

        <v-divider></v-divider>

        <h3>Notes</h3>
        <div class="d-flex align-items-center pa-2 ">
                <h3 class="d-flex pl-5 pr-5 pa-1 bg-secondary rounded-pill">9/10</h3>

        </div>

        <v-divider></v-divider>

            <v-container class="d-flex justify-start pa-5">
                <v-img img src="https://lh5.googleusercontent.com/p/AF1QipNcJMW6b0WsFEatnRlSTt4kRUsEXMkLx6LMqV04=w740-h420-k-no"
            alt="image de la critique" height="70vh"></v-img>
        <v-card variant=text class="ma-5" width="100vh">
            <h2>Texte de la critique</h2>
            <v-container height="300px">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ullam quibusdam
                eaque magni assumenda, excepturi illum minus sunt voluptatem? Laborum saepe voluptas natus inventore
                eum non ea vero beatae sint!</p>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ullam quibusdam
                eaque magni assumenda, excepturi illum minus sunt voluptatem? Laborum saepe voluptas natus inventore
                eum non ea vero beatae sint! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ullam quibusdam
                eaque magni assumenda, excepturi illum minus sunt voluptatem? Laborum saepe voluptas natus inventore
                eum non ea vero beatae sint!</p>

                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ullam quibusdam
                eaque magni assumenda, excepturi illum minus sunt voluptatem? Laborum saepe voluptas natus inventore
                eum non ea vero beatae sint!
            </v-container>
        </v-card>
    </v-container>
        

        <v-divider></v-divider>

        <h2>Notes détaillées</h2>

        <h4 class="pt-6 pb-1">Cuisine</h4>
        <div class="d-flex ">
            <v-img img src="https://lh5.googleusercontent.com/p/AF1QipNcJMW6b0WsFEatnRlSTt4kRUsEXMkLx6LMqV04=w740-h420-k-no"
                alt="image de la critique" height="20vh" width="30vh"></v-img>
            <v-container height="300px" class="scroll">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ullam quibusdam
                eaque magni assumenda, excepturi illum minus sunt voluptatem? Laborum saepe voluptas natus inventore
                eum non ea vero beatae sint!
            </v-container>
        </div>

        <h4 class="pt-6 pb-1">Service</h4>
        <div class="d-flex ">
            <v-img img src="https://lh5.googleusercontent.com/p/AF1QipNcJMW6b0WsFEatnRlSTt4kRUsEXMkLx6LMqV04=w740-h420-k-no"
                alt="image de la critique" height="20vh" width="30vh"></v-img>
            <v-container height="300px" class="scroll">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ullam quibusdam
                eaque magni assumenda, excepturi illum minus sunt voluptatem? Laborum saepe voluptas natus inventore
                eum non ea vero beatae sint!
            </v-container>
        </div>

        <h4 class="pt-6 pb-1">Ambiance</h4>
        <div class="d-flex ">
            <v-img img src="https://lh5.googleusercontent.com/p/AF1QipNcJMW6b0WsFEatnRlSTt4kRUsEXMkLx6LMqV04=w740-h420-k-no"
                alt="image de la critique" height="20vh" width="30vh"></v-img>
            <v-container height="300px" class="scroll">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ullam quibusdam
                eaque magni assumenda, excepturi illum minus sunt voluptatem? Laborum saepe voluptas natus inventore
                eum non ea vero beatae sint!
            </v-container>
        </div>

        <h4 class="pt-6 pb-1">Qualité prix</h4>
        <div class="d-flex ">
            <v-img img src="https://lh5.googleusercontent.com/p/AF1QipNcJMW6b0WsFEatnRlSTt4kRUsEXMkLx6LMqV04=w740-h420-k-no"
                alt="image de la critique" height="20vh" width="30vh"></v-img>
            <v-container height="300px" class="scroll">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ullam quibusdam
                eaque magni assumenda, excepturi illum minus sunt voluptatem? Laborum saepe voluptas natus inventore
                eum non ea vero beatae sint!
            </v-container>
        </div>

        <v-divider></v-divider>


        <h2>Plats commandés</h2>

        <h4>Plat 1</h4>

        <v-divider></v-divider>

        <div class="d-flex">
            <v-container class="d-flex pt-0 pb-0 pt-3">
                <p class="pl-1 pr-1 text-body-secondary">édité il y a 3 minutes</p>
                <p class="vr ml-2 mr-2"><small></small></p>
                <p class="pl-1 pr-1 text-body-secondary">repas à emporter -</p>
                <p class="pl-1 pr-1 text-body-secondary">midi -</p>
                <p class="pl-1 pr-1 text-body-secondary">entre 26 et 35e -</p>
                <p class="pl-1 pr-1 text-body-secondary">visité le jj/mm/aaaa</p>
            </v-container>

            <v-container class="pa-0 ma-0 d-flex justify-content-end">
                <v-btn variant=text icon @click="heartIsPlaying">
                    <v-icon v-if="heartPlaying">mdi-heart</v-icon>
                    <v-icon v-else>mdi-heart-outline</v-icon>
                </v-btn>

                <v-btn variant=text icon router to="/FullPost">
                    <v-icon>mdi-comment-multiple-outline</v-icon>
                </v-btn>


                <v-btn variant=text icon @click="bookmarkIsPlaying">
                    <v-icon v-if="bookmarkPlaying">mdi-bookmark</v-icon>
                    <v-icon v-else>mdi-bookmark-outline</v-icon>
                </v-btn>

            </v-container>
        </div>

        <v-divider></v-divider>


        <h5 class="pt-3">Publier un commentaire</h5>

        <FormAddComment />

        <v-list-item-title class="pl-8">
            <div class="d-flex ">
                <v-list-item router to="/profil">
                    <v-avatar
                        image="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"
                        rounded="0" size="30"></v-avatar>
                </v-list-item>
                <div class="d-flex mt-5">
                    <h6 class="pr-3">Nom du blog </h6>
                    <p>@pseudo</p>
                </div>
            </div>
            <p class="pl-15">Commentaire</p>
            <v-divider></v-divider>
        </v-list-item-title>
    </v-container>
</template>

<style>
.scroll {
    overflow-y: scroll
}
</style>