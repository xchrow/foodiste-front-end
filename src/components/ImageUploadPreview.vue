<template>
    <v-img :src="image ? imagePreview : 'https://picsum.photos/id/11/500/300'
        " lazy-src="https://picsum.photos/id/11/10/6" height="30vh"></v-img>
    <v-list-item-subtitle class="pa-3"></v-list-item-subtitle>
    <v-file-input v-model="image" accept="image/png, image/jpeg, image/bmp" placeholder="Pick an image"
        prepend-icon="mdi-camera" @change="selectImage" @click:clear="clearImagePreview()" label="Image"
        variant="filled"></v-file-input>
</template>

<script>
export default {
    name: 'ImageUploadPreview',
    data() {
        return {
            image: [],
            imagePreview: '',
        }
    },

    methods: {
        async selectImage(e) {
            const file = e

            if (!file) return

            const readData = (f) =>
                new Promise((resolve) => {
                    const reader = new FileReader()
                    reader.onloadend = () => resolve(reader.result)
                    reader.readAsDataURL(f)
                })

            const data = await readData(file)
            this.imagePreview = data
        },

        async clearImagePreview() {
            this.imagePreview = ''
        },
    },
}
</script>