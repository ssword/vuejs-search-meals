<template>

   <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue';

const store = useStore();
const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
   store.dispatch('searchMealsByIngredient', route.params.ingredient);
})



</script>