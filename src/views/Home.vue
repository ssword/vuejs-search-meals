<template>
  <pre>{{ meals }} </pre>
  Home
</template>

<script setup>
import { computed } from 'vue';
// import store from '../store';
import { useStore } from 'vuex';

const store = useStore();
const meals = computed(() => store.state.meals);
console.log(meals);


</script>
