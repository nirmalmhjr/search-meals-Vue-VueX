<template>
    <div >
        <h1 class="font-bold text-4xl py-4">Ingredients</h1>
        <input 
        type="text" 
        class="rounded border-2 border-gray-200 w-full bg-white my-3" 
        v-model="keyword"
        placeholder="search for Ingredients"
        >
        <div class="p-8">
            <router-link :to="{
                name: 'byIngredient', 
                params:{ingredient: ingredient.strIngredient}}"
                v-for="ingredient of computedIngredients" 
                :key="ingredient.idIngredient"
                class=" block bg-white rounded p-3 mb-3 shadow"
                >
                <h3 class=" text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
            <p>{{ ingredient.strDescription }}</p>
            <!-- <pre>{{ ingredient }}</pre> -->
            </router-link>
            
        </div>
    </div>

</template>

<script setup>
import { computed, onMounted, ref } from "vue"
import axiosClient from "../axiosClient"

const keyword = ref('')
const ingredients = ref([]) 

const computedIngredients = computed(()=>{
    if(!computedIngredients) return ingredients
    return ingredients.value.filter(i =>{
        return i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
    }
        )
})

onMounted(()=>{
    axiosClient.get('list.php?i=list')
    .then(({data})=>{
        ingredients.value = data.meals
    })    
})

</script>

<style>

</style>