<script setup>
import ImageCaroussel from '../components/ImageCaroussel.vue'
</script>

<template>
  <v-container>
    <h1 class="pa-2 pb-0">Nom du restaurant</h1>

    <v-container class="d-flex justify-start pa-5">
            <ImageCaroussel/>
            <v-card variant=text class="ma-5" width="100vh">
                <h2>Description du restaurant</h2>
                <v-container height="300px">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ullam quibusdam
                        eaque magni assumenda, excepturi illum minus sunt voluptatem? Laborum saepe voluptas natus inventore
                        eum non ea vero beatae sint!</p>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ullam quibusdam
                        eaque magni assumenda, excepturi illum minus sunt voluptatem? Laborum saepe voluptas natus inventore
                        eum non ea vero beatae sint! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
                        ullam quibusdam
                        eaque magni assumenda, excepturi illum minus sunt voluptatem? Laborum saepe voluptas natus inventore
                        eum non ea vero beatae sint!</p>

                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ullam quibusdam
                    eaque magni assumenda, excepturi illum minus sunt voluptatem? Laborum saepe voluptas natus inventore
                    eum non ea vero beatae sint!
                </v-container>
            </v-card>
        </v-container>

    <v-divider></v-divider>

    <h2>Information</h2>

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


    <div>Adresse</div>
    <div>Fourchette de prix</div>
    <div>Services proposés</div>
    <div>Site web</div>

    <v-divider></v-divider>

    <h2>Note globale</h2>
    <div>Noté par X utilisateurs</div>
    <div>Notes par catégories</div>

    <v-divider></v-divider>
    <h2>Menu</h2>

    <v-divider></v-divider>
    <h2>Critiques des utilisateurs</h2>
    <div>filtrer les critiques</div>

  </v-container>
</template>