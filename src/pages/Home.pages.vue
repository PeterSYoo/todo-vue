// --------------------------------- SCRIPT -------------------------------- ***
<script setup lang="ts">
import { useAuth } from '../composables/auth/auth.composable';

const auth = useAuth();

const handleLoginWithGoogleClick = () => {
  auth.loginInWithGoogle();
};
</script>
// ------------------------------------------------------------------------- ***
// -------------------------------- TEMPLATE ------------------------------- ***
<template>
  <main
    class="justify-center flex flex-col items-center h-screen w-screen px-10"
  >
    <button
      @click="handleLoginWithGoogleClick"
      class="mt-2 border-b-2 border-black px-4 py-1 hover:text-black/50"
    >
      Google Login
    </button>
    <div class="border-b border-b-black w-32 mt-0.5"></div>
    <ul class="pt-2 max-w-[1024px]">
      <li>hasFailed: {{ auth.hasFailed }}</li>
      <li>isLoading: {{ auth.isLoading }}</li>
      <li>error: {{ auth.error }}</li>
      <li>
        user:
        <div class="flex flex-col">
          {{ auth.user.value }}
        </div>
      </li>
    </ul>
  </main>
</template>
// ------------------------------------------------------------------------- ***
