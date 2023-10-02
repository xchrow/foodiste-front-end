<script>
export default {
    data: () => {
        return {
            show: true,
            newComment: "",
            comments: []
        };
    },

    methods: {
        addComment() {
            const value = this.newComment && this.newComment.trim();
            if (!value) {
                return;
            }
            this.comments.push({
                title: this.newComment
            });
            this.newComment = "";
        }
    },
};
</script>

<script setup>
</script>

<template>
    <v-container>
        <v-list-item>
            <v-list-item-content>
                <v-textarea v-model="newComment" id="newComment" name="newComment" label="Écrire un nouveau commentaire"
                    variant="outlined" class="pt-1" @keyup.enter="addComment" no-resize rows="3" />
            </v-list-item-content>
        </v-list-item>

        <v-list-item v-for="(comment, i) in comments">
            <template #default="{ active, toggle }">
                <v-list-item-title :class="{ done: active }">
                    <div class="d-flex">
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
                    <p class="pl-15">{{ comment.title }}</p>
                    <v-divider></v-divider>
                </v-list-item-title>
            </template>
        </v-list-item>
    </v-container>
</template>