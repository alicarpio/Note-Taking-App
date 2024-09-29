<script lang="ts" setup>

import InputNoteComponent from "@components/InputNoteComponent.vue";
import {useNotes} from "@stores/noteStore.ts";
import NoteComponent from "@components/NoteComponent.vue";
import {ref} from "vue";

const notes = useNotes();

let title = ref(false)

const listNotes = [{
  title: "TITLE",
  content: "SKKDK FKLFLR FKLKFR FKFKJJK"
}]


</script>

<template>
  <section class=" m-5">
    <h1>Hola</h1>
    <InputNoteComponent :show-title="title"/>
    <div v-for="note in listNotes" class="flex gap-2 mx-32 mt-12">
      <NoteComponent :content="note.content" :title="note.title"/>
    </div>
  </section>
</template>

<style scoped>

</style>