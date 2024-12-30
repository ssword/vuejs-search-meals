<template>
  <div class="flex flex-col p-8">


  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
// import store from '../store';
import { useStore } from 'vuex';
import axiosClient from '../axiosClient';

const store = useStore();


onMounted(async () => {
  const response = await axiosClient
    .get('./list.php?i=list')

  console.log(response);

});

</script>
