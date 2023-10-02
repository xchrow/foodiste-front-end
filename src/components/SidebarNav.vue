<template>
    <v-navigation-drawer color="background" v-model="drawer" :rail="rail" permanent @click="rail = false">
        <v-list-item class="pt-6"
            prepend-avatar="https://png.pngtree.com/png-vector/20230808/ourmid/pngtree-junk-food-vector-png-image_6946038.png"
            nav>
            <v-list-item router to="/profil" class="hover">
                <h6>Nom du blog</h6>
                <h7>pseudo</h7>
            </v-list-item>
            <template v-slot:append>
                <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
            </template>
        </v-list-item>

        <v-divider></v-divider>

        <template v-slot:append>
            <div>
                <v-list class="pb-4" density="compact" nav>
                    <v-list-item prepend-icon="mdi-list-box" title="Mes listes" value="lists" router to="/lists"
                        class="hover">
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-calendar" title="Mon journal" value="calendar" router to="/agenda"
                        class="hover">
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-file-edit" title="Écrire une critique" value="write" router to="/write"
                        class="hover">
                    </v-list-item>
                </v-list>
            </div>
        </template>

    </v-navigation-drawer>
</template>
  
<script>
export default {
    data() {
        return {
            drawer: true,
            rail: true,
        }
    },
}
</script>
