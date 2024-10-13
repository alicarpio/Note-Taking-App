<script lang="ts" setup>

const props = defineProps<{
  title?: string;
  content: string;
}>()


</script>

<template>
  <div class="flex justify-between border p-5 border-1 border-gray-300 rounded-lg w-[19rem]">
    <div class="mt-0">
      <h1 class="font-bold">{{ props.title }}</h1>
      <p>{{ props.content }}</p>
    </div>
    <span class="icon-[ph--trash]"></span>

  </div>
</template>

<style scoped>

</style>