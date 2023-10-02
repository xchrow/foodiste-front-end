<script setup>
const notes = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
</script>

<template>
    <v-container class="note-container">
    <v-select :items="notes" density="compact" label="Note"></v-select>
</v-container>
</template>

<style>
.note-container{
    width: 130px;
}
</style>