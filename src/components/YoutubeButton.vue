<template>
     <a :href="href" target="_blank" class="px-3 py-2 border border-red-600 rounded hover:bg-red-600 hover:text-white transition-colors"><slot>Youtube</slot></a>

</template>

<script setup>
    const props = defineProps({
        href: String
    })

</script>