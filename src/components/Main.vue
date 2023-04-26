// --------------------------------- SCRIPT -------------------------------- ***
<script setup lang="ts">
import Modal from './Modal.vue';
import { ref } from 'vue';

const showModal = ref(false);
</script>
// ------------------------------------------------------------------------- ***
// -------------------------------- TEMPLATE ------------------------------- ***
<template>
  <Modal @close="showModal = false" v-if="showModal" />
  <main class="pt-5 flex flex-col items-center h-screen w-screen px-10">
    <header class="flex justify-between w-full max-w-[1024px]">
      <h1 class="text-3xl">ToDo Notes</h1>
      <button
        @click="showModal = true"
        class="border rounded-lg px-3 border-black py-1"
      >
        +
      </button>
    </header>
    <!-- Cards Container -->
    <div class="flex flex-wrap gap-5 pt-14 max-w-[1024px]">
      <div class="bg-orange-300 rounded-lg p-10">
        <p class="">Text</p>
        <p class="">Date</p>
      </div>
    </div>
    <!--  -->
  </main>
</template>
// ------------------------------------------------------------------------- ***
