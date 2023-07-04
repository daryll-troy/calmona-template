<script setup>
import { RouterLink, RouterView } from "vue-router";
import 'flowbite'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'




// initialize    based on data attribute selectors
onMounted(() => {
    initFlowbite()
})
</script>

<template>
    
 <RouterView/>
   
</template>


