<template>
    <header class="bg-white shadow-16 h-24 flex justify-between items-stretch">
            <router-link :to="{name:'home'}" class="inline-flex items-center h-full px-5">Home</router-link>
            <div class="flex gap-1 items-center">
                <router-link :to="{name:'byName'}" class="inline-flex items-center px-2 h-full transition-color hover:bg-purple-100">Search Meals</router-link>
                <router-link :to="{name:'byLetter'}" class="inline-flex items-center px-2 h-full transition-color hover:bg-purple-100">Meals by Letter</router-link>
                <router-link :to="{name:'ingredients'}" class="inline-flex items-center px-2 h-full transition-color hover:bg-purple-100">Meals by Ingredients</router-link>
            </div>
    </header>

</template>

<script setup>

</script>

<style>

</style>