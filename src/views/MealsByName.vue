<template>
    <div class="p-8">
        <input 
        type="text" 
        class="rounded border-2 border-gray-200 w-full bg-white" 
        placeholder="search your meals"
        v-model="keyword"
        @change="searchMeals"
        >
    </div>
    
    <Meals :meals="meals"/>

    <!-- <pre>{{ meals }}</pre> -->
</template>

<script setup>
import { computed, onMounted, ref  } from "vue";
import store from '../store';
import { useRoute } from "vue-router";
import YoutubeButton from "../components/YoutubeButton.vue";
import MealItem from "../components/MealItem.vue";
import Meals from '../components/Meals.vue'


    const keyword = ref('') 
    const route = useRoute()

    // components:{ YoutubeButton}

    const meals = computed(
        () =>store.state.searchedMeals
    )

    function searchMeals(){
        if(keyword.value){
         store.dispatch('searchMeals', keyword.value)
        } else {
            store.commit('setSearchedMeals', [])
        }
    }

    onMounted(()=>{
        keyword.value = route.params.name
        if(keyword.value){
            searchMeals()
        }
    })
</script>

<style>

</style>