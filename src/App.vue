<script setup>
import Default from '@/layout/Default.vue'
</script>


<template>
  <Default />
</template>

<style>
.logo-block {
  margin-top: 40px;
    text-align: center;
}

.logo {
    width: 400px;
    height: auto;
}

.hover:hover {
    background-color: rgba(250, 183, 0, 0.459);
}

.hover-text:hover {
    color: rgb(255, 196, 0);
}

.v-dialog--custom {
    background-color: white;
    height: auto;
    overflow-x: hidden;
    /*overflow-y: hidden;*/
}

.check_bar {
    flex-direction: row;
    padding: 1em;
}

/* From uiverse.io */
.btn-pers {
    position: relative;
    left: 50%;

    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    transform: translateX(-50%);
}

.btn-pers:hover {
    background-color: rgb(250, 183, 0);
    box-shadow: 0px 10px 5px rgba(250, 183, 0, 0.4);
    color: #ffffff;
    transform: translate(-50%, -5px);
}

.btn-pers:active {
    transform: translate(-50%, -1px);
}
</style>