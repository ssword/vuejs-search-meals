<template>
   <div class="p-8">
      <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
      <router-link :to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient } }"
         v-for="ingredient of ingredients" :id="ingredient.idIngredient" class="block bg-white p-3 mb-3 shadow">
         <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
         <p>
            {{ ingredient.strDescription }}
         </p>
      </router-link>
   </div>
</template>

<script setup>
import { computed, onMounted, watch, ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import MealItem from '../components/MealItem.vue';
import axiosClient from '../axiosClient';

const store = useStore();
const route = useRoute();
const ingredients = ref([]);
onMounted(() => {
   axiosClient.get(`list.php?i=list`)
      .then(({ data }) => {
         console.log(data);
         ingredients.value = data.meals
      })
})



</script>