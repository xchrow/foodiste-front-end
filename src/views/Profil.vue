<template>
    <v-container>
        <v-card color="rgba(250, 183, 0, 0.5)">
        <v-list-item class="justify-center pa-5">
            <v-card class="pa-5" color="white">
            <v-list-item-content>
                <v-avatar
                    image="https://png.pngtree.com/png-vector/20230808/ourmid/pngtree-junk-food-vector-png-image_6946038.png"
                    rounded="0" size="220"></v-avatar>
                <v-list-item-title class="title d-flex justify-content-center" style="margin-top:20px;">Nom du
                    blog</v-list-item-title>
                <p class="d-flex justify-center">@pseudo</p>
                <div class="d-flex justify-center mb-5">
                    <div class="d-flex mr-5">nb critiques</div>
                    <div class="vr"></div>
                    <div class="d-flex ml-5">nb followers</div>
                </div>
            </v-list-item-content>
        </v-card>
        </v-list-item>
    </v-card>

<v-container class="d-flex justify-start pa-5">
    <Caroussel />
        <v-card variant=text class="ma-5" width="100vh">
            <h2>Présentation du blog</h2>
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

        <v-tabs fixed-tabs bg-color="primary" class="mt-1 mb-2">
            <v-tab class="hover-text"> Critiques </v-tab>
            <v-tab class="hover-text"> J'aimes </v-tab>
        </v-tabs>

        <CardPostProfil />

    </v-container>
</template>


<script setup>
import CardRestaurant from "../components/CardRestaurant.vue"
import Caroussel from "../components/Caroussel.vue"
import CardPostProfil from "../components/CardPostProfil.vue"
</script>

<style>
.profil{
    background: white;
}
</style>