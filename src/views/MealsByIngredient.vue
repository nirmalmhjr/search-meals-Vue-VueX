<template>
    <Meals :meals="meals"/>
</template>

<script setup>
import { computed, onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import axiosClient from "../axiosClient"
import MealItem from "../components/MealItem.vue"
import store from "../store"
import Meals from '../components/Meals.vue'

const route = useRoute()

const meals = computed(() => store.state.mealsByIngredient)

onMounted(()=>{
    store.dispatch('searchMealsByIngredient', route.params.ingredient)
})
</script>

<style>

</style>