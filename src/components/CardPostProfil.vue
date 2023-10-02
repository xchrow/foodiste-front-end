<template>
    <v-card class="pa-5 ma-8 justify-center" variant="elevated" rounded="0" style="height: 60%;">
        <div class="d-flex align-center">
            <v-list-item>
                <v-avatar image="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"
                    rounded="0" size="40"></v-avatar>
            </v-list-item>
            <v-container class="d-flex align-center">
                <h3 class="pl-1 pr-1 pt-1">Nom du blog</h3>
                <h5 class="pl-1 pr-1 pt-2">@pseudo</h5>
            </v-container>
        </div>

        <v-divider></v-divider>

        <div class="row g-0 ">
            <div class="col">
                <v-img src="https://lh5.googleusercontent.com/p/AF1QipNcJMW6b0WsFEatnRlSTt4kRUsEXMkLx6LMqV04=w740-h420-k-no"
                    class="img-fluid rounded-start pa-2" style="width: 100%;"></v-img>
            </div>

            <div class="col-md-9">
                <div class="card-body pb-0 pl-2">

                    <div class="d-block">
                        <div class="d-flex justify-space-between align-center ma-3 mb-1">
                            <h4 class="card-title">Nom du restaurant</h4>
                            <div class="d-flex align-items-center ">
                                <h5 class="d-flex pa-1 pl-3 pr-3  bg-secondary rounded-pill">9/10</h5>
                            </div>
                        </div>

                        <div class="d-flex align-items-center">
                            <v-chip class="ma-2"> Catégorie </v-chip>
                            <v-chip class="ma-2"> Catégorie </v-chip>
                            <v-chip class="ma-2"> Catégorie </v-chip>
                            <v-chip class="ma-2"> Catégorie </v-chip>
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

                    <v-divider></v-divider>

                    <v-container class="pt-0 pb-0" style="height: 100%">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ullam quibusdam
                        eaque magni assumenda, excepturi illum minus sunt voluptatem? Laborum saepe voluptas natus inventore
                        eum non ea vero beatae sint! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
                        ullam quibusdam
                        eaque magni assumenda, excepturi illum minus sunt voluptatem? Laborum saepe voluptas natus inventore
                        eum non ea vero beatae sin! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
                        ullam quibusdam
                        eaque magni assumenda, excepturi illum minus sunt voluptatem? Laborum saepe voluptas natus inventore
                        eum non ea vero beatae sin...
                    </v-container>

                    <v-divider></v-divider>


                    <div class="d-flex">
                        <v-container class="d-flex pt-0 pb-0">
                            <p class="pl-1 pr-1"><small class="text-body-secondary">édité il y a 3 minutes</small></p>
                            <p class="vr ml-2 mr-2"><small></small></p>
                            <p class="pl-1 pr-1"><small class="text-body-secondary">repas à emporter -</small></p>
                            <p class="pl-1 pr-1"><small class="text-body-secondary">midi -</small></p>
                            <p class="pl-1 pr-1"><small class="text-body-secondary">entre 26 et 35e -</small></p>
                            <p class="pl-1 pr-1"><small class="text-body-secondary">visité le jj/mm/aaaa</small></p>
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

                    <v-btn variant="tonal" type="submit" class="btn-pers" id="publish_button">
                        <router-link to="/fullpost">
                            Voir la critique en entier
                        </router-link>
                    </v-btn>
                </div>
            </div>
        </div>
    </v-card>
</template>

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