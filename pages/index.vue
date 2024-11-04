<script setup lang="ts">
import { RocketIcon } from '@radix-icons/vue'

definePageMeta({
  middleware: 'auth',
});

</script>

<template>
  <div>
    <div class="flex flex-col items-center justify-center p-4 h-screen bg-slate-300">
      <h1 class="text-3xl">Let's start building awesome apps!</h1>

      <Button class="mt-4">
        <RocketIcon class="w-4 h-4 mr-2" />
        Got it!
      </Button>
    </div>
  </div>
</template>

