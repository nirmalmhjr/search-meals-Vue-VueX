<template>
    <p class="text-3xl italic p-10 ">Hello there!!! Search your meal</p> 
</template> 

<script setup>              
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from '../axiosClient.js'



onMounted( async()=>{
    let response = await axiosClient.get('/list.php?i=list')
    console.log(response.data );
    // ingredients.value = response.data
})
 
</script>