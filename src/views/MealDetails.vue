<template>
  <div class="max-w-[800px] mx-auto">
      <pre>{{ meal }}</pre> 
      <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
      <img :src="meal.strMealThumb" :alt="meal.strMealThumb" class="max-w-full">
        <div class="grid grid-cols-1 sm:grid-cols-3">
            <div>
                <strong>Category :</strong>  {{ meal.strCategory }}
            </div>
            <div>
                <strong class="font-bold" >Area :</strong>  {{ meal.strArea }}
            </div>
            <div>
                <strong>Tags:</strong> {{ meal.strTags }}
            </div>
        </div>

        <div class="my-3">{{ meal.strInstructions }}</div>

        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div>
           <h2 class="font-semibold text-2xl mb-3">Ingredients</h2>
            <ul>
                <template v-for="(el, ind) of new Array(20)" :key="ind">
                    <li v-if="meal[`strIngredient${[ind + 1]}`]">
                        {{ ind + 1 }}.  {{meal[`strIngredient${[ind + 1]}`]}}
                    </li>
                </template> 
            </ul>            
        </div>
        
        <div>
            <h2 class="font-semibold text-2xl mb-3">Measures</h2>
            <ul>
                <template v-for="(el, ind) of new Array(20)" :key="ind">
                    <li v-if="meal[`strMeasure${ind + 1 }`]">
                        {{ ind +1 }}. {{ meal[`strMeasure${ind + 1}`] }}
                    </li>
                </template>
            </ul>
        </div>
    </div>
    <div class="m-4">
        <YoutubeButton :href="meal.strYoutube">Watch it on Youtube</YoutubeButton>
        <a :href="meal.strSource"
            target="_blank"
            class="px-3 py-2  mx-4 border border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors">
            View Source
        </a>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import axiosClient from '../axiosClient'
import YoutubeButton from "../components/YoutubeButton.vue";


    const meal = ref('')
    const route = useRoute()


    onMounted(()=>{
        axiosClient.get(`lookup.php?i=${route.params.id}`)
        .then(({data}) =>{
            // debugger;
            meal.value = data.meals[0] || {}
        })
    })

</script>

<style>

</style>    