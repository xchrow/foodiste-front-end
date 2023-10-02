<template>
    <div id="carouselExampleAutoplaying" class="carousel slide ml-auto mr-auto" style="width:40%;" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active ">
                <CardCaroussel />
            </div>
            <div class="carousel-item">
                <CardCaroussel />
            </div>
            <div class="carousel-item">
                <CardCaroussel />
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" style="background-color: black;" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" style="background-color: black;" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>




<script setup>

import CardCaroussel from './CardCaroussel.vue';

</script>