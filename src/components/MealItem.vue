<template>
    <div class="rounded-xl bg-white shadow">
        <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
            <img 
            class="rounded-t-xl h-48 w-full object-cover" :src="meal.strMealThumb" 
            :alt="meal.strMeal">
        </router-link>
        <div class="p-3">
            <h3 class=" font-bold">{{ meal.strMeal }}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sed provident ipsum illum corrupti, magnam sit </p>

        <div class="mt-4 flex justify-between items-center">
            <!-- <a :href="meal.strYoutube" target="_blank" class="px-3 py-2 border border-red-600 rounded hover:bg-red-600 hover:text-white transition-colors">watch on Youtube</a> -->
            <YoutubeButton :href="meal.strYoutube"/>
            <router-link to="/" class="px-3 py-2 border-2 border-purple-600 rounded  hover:bg-purple-600 hover:text-white">
                View
            </router-link>
        </div>
    </div>
    </div>
</template>

<script setup> 

import YoutubeButton from './YoutubeButton.vue';
const { meal } = defineProps({
    meal:Object
})

</script>