// --------------------------------- SCRIPT -------------------------------- ***
<script setup lang="ts"></script>
// ------------------------------------------------------------------------- ***
// -------------------------------- TEMPLATE ------------------------------- ***
<template>
  <section
    class="h-screen w-screen bg-black/20 flex justify-center items-center absolute top-0 left-0 cursor-pointer"
    @click="$emit('close')"
  >
    Modal
  </section>
</template>
// ------------------------------------------------------------------------- ***
