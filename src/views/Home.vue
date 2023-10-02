<script setup>
import CardRestoList from '../components/CardRestoList.vue'
import CardPost from '../components/CardPost.vue'
</script>

<script>
export default {
  data: () => ({
    model: null,
    tags: [
      'Paris',
      'Nantes',
      'Toulouse',
      'Lilles',
      'Bordeaux',
      'Marseille',

    ],
  }),
}
</script>
  
<template>
  <v-container>
    <div class="logo-block pb-10">
      <img class="logo" src="../assets/logo.png">
    </div>


    <v-text-field class="pa-2" type="text" label="Rechercher un Restaurant" variant="outlined"
      append-inner-icon="mdi-magnify"></v-text-field>

      <v-row class="pt-0 pl-3 pb-3" justify="justify-align space-around">
        <h5 class="pa-2">Rechercher par villes : </h5>
        <v-chip-group mandatory selected-class="text-primary">
          <v-chip v-for="tag in tags" :key="tag">
            {{ tag }}
          </v-chip>
        </v-chip-group>
    </v-row>

    <v-divider></v-divider>

    <h2>Restaurants populaires</h2>

    <v-slide-group v-model="model" class="pa-4 mx-auto" selected-class="bg-primary" show-arrows>
      <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
        <v-card :class="['ma-4', selectedClass]" @click="toggle">
          <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <CardRestoList />
            </v-scale-transition>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>

    <v-divider></v-divider>

    <h2>Dernières critiques</h2>

    <CardPost />
    <CardPost />
    

    <v-divider></v-divider>
  </v-container>
</template>