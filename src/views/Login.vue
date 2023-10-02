<template>
    <v-app>
        <v-dialog v-model="dialog" max-width="900" content-class="v-dialog--custom">
            <v-container class="pa-6">
                <div class="logo-block">
                    <img class="logo" src="../assets/logo.png">
                </div>

                <div class="login">
                    <h1>Connexion</h1>

                    <div>
                        <form @submit.prevent="submit">
                            <v-text-field class="pa-2" v-model="pseudo" :rules="pseudoRules" type="text"
                                label="Entrer pseudo" variant="outlined"></v-text-field>
                            <v-text-field class="pt-2 pr-2 pl-2" v-model="password" :rules="passwordRules" type="password"
                                label="Entrer mot de passe" variant="outlined" append-inner-icon='mdi-eye-off'></v-text-field>
                            <v-list-item class="justify-end">
                                <a href="">Mot de passe oublié ? </a>
                            </v-list-item>
                            <v-btn variant="tonal" type="submit" class="btn-pers ma-1" id="login_button">Se connecter</v-btn>
                        </form>
                    </div>
                </div>
                <v-container class="pa-10">
                </v-container>
                <!--
                <v-list-item class="pa-5 justify-center">
                    <router-link to="/LoginRestaurant">Se connecter en tant que restaurant</router-link>
                </v-list-item>
                -->
                <v-divider></v-divider>
                <v-list-item class="pt-5 justify-center">
                    <div class="pb-2">Pas encore de compte ?</div>
                    <v-btn variant="tonal" type="submit" class="btn-pers" id="register_button" router-link to="/register">
                        Se créer un nouveau compte</v-btn>  
                        <v-list-item-subtitle class="pa-1"></v-list-item-subtitle>
                </v-list-item>
            </v-container>
        </v-dialog>
    </v-app>
</template>
  
<script>
export default {
    data: () => ({
        dialog: {
            get() {
                return this.value
            },
            set(value) {
                var me = this
                me.$emit('input', value)
            }
        },
        pseudo: '',
        pseudoRules: [
            value => {
                if (value) return true
                return 'Veuillez entrer un pseudo.'
            },
        ],
        password: '',
        passwordRules: [
            value => {
                if (value?.length > 8) return true
                return 'Le mot de passe doit contenir au moins 8 caractères.'
            },
        ],
    }),
};
</script>
  
<style>
</style>
  