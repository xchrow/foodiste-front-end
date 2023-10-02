<script>
export default {
    data: () => {
        return {
            show: true,
            newDish: "",
            dishs: [],
            isDishExist: false
        };
    },

    computed: {
        dishExists() {
            return this.isDishExist
                ? "Le plat a déjà été ajouté."
                : "";
        }
    },

    methods: {
        addDish() {
            this.isDishExist = false;
            const value = this.newDish && this.newDish.trim();
            if (!value) {
                return;
            }
            const isDishExists = this.dishs.find((dish) => dish.title === value);
            if (!isDishExists) {
                this.dishs.push({
                    title: this.newDish,
                    done: false
                });
                this.newDish = "";
            }
            if (isDishExists) {
                this.isDishExist = true;
            }
        },
        removeDish(index) {
            this.dishs.splice(index, 1);
        },
    },
};
</script>

<script setup>
import ImageUploadPreview from '../components/ImageUploadPreview.vue'
</script>

<template>
    <v-container>
        <v-list-item>
            <v-list-item-content>
                <v-text-field v-model="newDish" id="newDish" name="newDish" label="Entrer le nom du plat" variant="outlined"
                    class="pt-1" @keyup.enter="addDish" :hint="dishExists" persistent-hint />
            </v-list-item-content>
        </v-list-item>

        <v-list-item v-for="(dish, i) in dishs">
            <template #default="{ active, toggle }">
                <v-list-item-title :class="{ done: active }">
                    <h3>{{ dish.title }}</h3>
                    <v-container fluid class="pt-8 d-inline">
                        <ImageUploadPreview />
                        <v-textarea label="Ajouter une description" variant="outlined" no-resize rows="5"
                            :model-value="value"></v-textarea>
                    </v-container>
                    <v-btn variant="tonal" class="btn-pers" active-class="removeDish(i)" @click="removeDish(i)">
                        Retirer le plat "{{ dish.title }}"
                        <v-icon class="pl-5">mdi-close</v-icon>
                    </v-btn>
                    <v-divider></v-divider>
                </v-list-item-title>
            </template>
        </v-list-item>
    </v-container>

</template>

