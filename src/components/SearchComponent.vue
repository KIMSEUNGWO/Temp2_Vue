<template>
  <div class="input-box">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.74998 14.1667C11.7415 14.1667 14.1666 11.7415 14.1666 8.75C14.1666 5.75846 11.7415 3.33333 8.74998 3.33333C5.75844 3.33333 3.33331 5.75846 3.33331 8.75C3.33331 11.7415 5.75844 14.1667 8.74998 14.1667Z" stroke="#767676" stroke-width="1.5" stroke-miterlimit="10"/>
      <path d="M16.1363 17.197C16.4292 17.4899 16.9041 17.4899 17.197 17.197C17.4899 16.9041 17.4899 16.4292 17.197 16.1363L16.1363 17.197ZM11.9697 13.0303L16.1363 17.197L17.197 16.1363L13.0303 11.9697L11.9697 13.0303Z" fill="#767676"/>
    </svg>
    <input v-model="word" @keyup.enter="onChange" type="text" class="inputBox" name="word" id="searchWord" :placeholder="placeholder">
  </div>
</template>

<script setup>

import {ref} from "vue";

const emit = defineEmits(['update:modelValue']);

const word = ref('');
const props = defineProps({
  modelValue : {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  onChanged: {
    type: Function,
    default: null
  }
})

function onChange() {
  emit('update:modelValue', word.value);
  if (props.onChanged) {
    props.onChanged(word.value);
  }
}
</script>


<style scoped>
.inputBox {
  width: 100%;
}
</style>