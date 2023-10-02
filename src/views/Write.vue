<script setup>
import ImageUploadPreview from '../components/ImageUploadPreview.vue'
import ChooseNote from '../components/ChooseNote.vue'
import FormAddDish from '../components/FormAddDish.vue'
</script>

<script>
export default {
    data: () => ({
        select: null,
        prices: [
            'Entre 0 et 15',
            'Entre 16 et 25',
            'Entre 26 et 35',
            'Entre 36 et 55',
            'Entre 56 et 75',
            'Entre 76 et 100',
            'Plus de 100'
        ],
        NomResto: '',
        NomRestoRules: [
            value => {
                if (value) return true
                return 'Veuillez entrer un restaurant.'
            },
        ],
    })
}
</script>

<template>
    <v-container @submit.prevent>
        <v-container>
            <h2>Écrire une critique</h2>
            <v-text-field class="pa-2" v-model="NomResto" :rules="NomRestoRules" type="text"
                label="Entrer le nom du Restaurant" variant="outlined"></v-text-field>
        </v-container>

        <v-divider></v-divider>

        <v-container class="pt-8">
            <ImageUploadPreview />
            <v-textarea label="Critique" variant="outlined" no-resize rows="10" :model-value="value"></v-textarea>
        </v-container>

        <v-divider></v-divider>

        <v-container class="pt-8">
            <h2>Notes détaillées</h2>

            <v-list>
                <v-list-group>
                    <template v-slot:activator="{ props }" class="d-flex d-sm-block">
                        <v-sheet class="d-flex flex-wrap">
                            <v-sheet class="flex-1-0 ma-2 pa-2">
                                <v-list-item v-bind="props" title="Cuisine" append-icon="mdi-plus" hide-details>
                                </v-list-item>
                            </v-sheet>
                            <v-sheet class="">
                                <ChooseNote />
                            </v-sheet>
                        </v-sheet>
                    </template>
                    <v-container fluid class="pt-8">
                        <ImageUploadPreview />
                        <v-textarea label="Ajouter une description" variant="outlined" no-resize rows="5"
                            :model-value="value"></v-textarea>
                    </v-container>
                </v-list-group>
                <v-divider></v-divider>
            </v-list>

            <v-list>
                <v-list-group>
                    <template v-slot:activator="{ props }" class="d-flex d-sm-block">
                        <v-sheet class="d-flex flex-wrap">
                            <v-sheet class="flex-1-0 ma-2 pa-2">
                                <v-list-item v-bind="props" title="Service" append-icon="mdi-plus" hide-details>
                                </v-list-item>
                            </v-sheet>
                            <v-sheet class="">
                                <ChooseNote />
                            </v-sheet>
                        </v-sheet>
                    </template>
                    <v-container class="pt-8">
                        <ImageUploadPreview />
                        <v-textarea label="Ajouter une description" variant="outlined" no-resize rows="5"
                            :model-value="value"></v-textarea>
                    </v-container>
                </v-list-group>
                <v-divider></v-divider>
            </v-list>

            <v-list>
                <v-list-group>
                    <template v-slot:activator="{ props }" class="d-flex d-sm-block">
                        <v-sheet class="d-flex flex-wrap">
                            <v-sheet class="flex-1-0 ma-2 pa-2">
                                <v-list-item v-bind="props" title="Ambiance" append-icon="mdi-plus" hide-details>
                                </v-list-item>
                            </v-sheet>
                            <v-sheet class="">
                                <ChooseNote />
                            </v-sheet>
                        </v-sheet>
                    </template>
                    <v-container class="pt-8">
                        <ImageUploadPreview />
                        <v-textarea label="Ajouter une description" variant="outlined" no-resize rows="5"
                            :model-value="value"></v-textarea>
                    </v-container>
                </v-list-group>
                <v-divider></v-divider>
            </v-list>

            <v-list>
                <v-list-group>
                    <template v-slot:activator="{ props }" class="d-flex d-sm-block">
                        <v-sheet class="d-flex flex-wrap">
                            <v-sheet class="flex-1-0 ma-2 pa-2">
                                <v-list-item v-bind="props" title="Qualité prix" append-icon="mdi-plus" hide-details>
                                </v-list-item>
                            </v-sheet>
                            <v-sheet class="">
                                <ChooseNote />
                            </v-sheet>
                        </v-sheet>
                    </template>
                    <v-container class="pt-8">
                        <ImageUploadPreview />
                        <v-textarea label="Ajouter une description" variant="outlined" no-resize rows="5"
                            :model-value="value"></v-textarea>
                    </v-container>
                </v-list-group>
            </v-list>
        </v-container>

        <v-divider></v-divider>

        <v-container class="pt-8">
            <h2 class="pb-3">Plats commandés</h2>
            <FormAddDish />
        </v-container>

        <v-container class="pt-8">
            <h2 class="pb-3">Informations de la visite</h2>

            <h6>Date de la visite :</h6>
            <v-text-field type="date"></v-text-field>

            <h6>Repas :</h6>
            <v-radio-group inline>
                <v-radio label="Sur place" value="1"> </v-radio>
                <v-radio label="Emporté" value="2"></v-radio>
                <v-radio label="Commandé" value="3"></v-radio>
            </v-radio-group>

            <h6>Horaire :</h6>
            <v-radio-group inline>
                <v-radio label="Matin" value="1"></v-radio>
                <v-radio label="Midi" value="2"></v-radio>
                <v-radio label="Soir" value="3"></v-radio>
            </v-radio-group>

            <h6>Fourchette de prix :</h6>
            <v-select v-model="select" :items="prices" label="Prix"></v-select>

        </v-container>

        <v-btn variant="tonal" type="submit" class="btn-pers" id="publish_button">Publier</v-btn>
    </v-container>
</template>

<style>
</style>