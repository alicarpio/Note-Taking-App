<script lang="ts" setup>
import {Field, Form} from "vee-validate";
import {ref} from "vue";

let content = ref("");
let title = ref("");

const isTitleFocused = ref(false);
const isTextareaFocused = ref(false);
const height = ref("0%");

const handleTitleFocus = () => {
  isTitleFocused.value = true;
  height.value = "100%";

};

const handleTitleBlur = () => {
  isTitleFocused.value = false;
  height.value = "12rem";
};

const handleTextareaFocus = () => {
  isTextareaFocused.value = true;
  height.value = "100%";
};

const handleTextareaBlur = () => {
  isTextareaFocused.value = false;
  height.value = "12rem";


};

const isTitleVisible = ref(false);
const handleShowTitle = () => {
  isTitleVisible.value = true;
};

const toggleTitleVisibility = () => {
  isTitleVisible.value = isTitleFocused.value || isTextareaFocused.value || isTitleVisible.value;
};

</script>

<template>
  <div :class="height"
       class="w-1/2 m-auto border rounded-lg border-gray-200 shadow-xl p-6">
    <Form class="flex flex-col gap-y-2">
      <Field
          v-if="isTitleVisible"
          v-model="title"
          class="input-field border-none outline-none text-lg bg-gray-50 focus:outline-none focus:shadow-none focus:ring-0"
          name="title"
          placeholder="Title"
          type="text"
          @blur="handleTitleBlur"
          @focus="handleTitleFocus"
      />

      <Field
          ref="textarea"
          v-model="content"
          :style="{ resize: 'none', maxHeight: '200px' }"
          as="textarea"
          class="textarea-field border-none outline-none text-lg bg-gray-50 focus:outline-none focus:shadow-none focus:ring-0"
          name="content"
          placeholder="Create a note..."
          @blur="() => { handleTextareaBlur(); toggleTitleVisibility(); }"
          @focus="() => { handleTextareaFocus(); handleShowTitle(); }"
      />
      <div class="flex justify-end">
        <button
            class="w-32 text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
            type="submit"
        >
          Add
        </button>
      </div>
    </Form>
  </div>
</template>

<style scoped>
.input-field::placeholder {
  color: #9ca3af;
}

.textarea-field::placeholder {
  color: #9ca3af;
}
</style>
