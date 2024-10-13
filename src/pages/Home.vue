<script lang="ts" setup>

import InputNoteComponent from "@components/InputNoteComponent.vue";
import {useNotes} from "@stores/noteStore.ts";
import NoteComponent from "@components/NoteComponent.vue";
import {ref} from "vue";

const notes = useNotes();

const listNotes = notes.data || [];

let title = ref(false)


</script>

<template>
  <section class="m-5 w-full">
    <!--    <h1>Hola</h1>-->
    <InputNoteComponent :show-title="title"/>
    <div class="flex flex-wrap gap-x-4 ml-32 mt-12">
      <div v-for="note in listNotes" :key="note.id" class="">
        <NoteComponent :content="note.content" :title="note.title"/>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>