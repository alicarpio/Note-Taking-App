<script lang="ts" setup>

const props = defineProps<{
  title?: string;
  content: string;
}>()


</script>

<template>
  <div class="border p-6 border-1 border-black rounded-lg w-[19.5rem]">
    <h1 class="font-bold">{{ props.title }}</h1>
    <p>{{ props.content }}</p>
  </div>
</template>

<style scoped>

</style>