<template>
  <div class="form-floating">
    <input
      autocomplete="off"
      required= true
      :type="inputType"
      :class="inputClass"
      :id="inputId"
      :placeholder="placeHolder"
      :value="modelValue"
      @input="updateValue($event.target.value)"
    />
    <label :for="inputId">{{ labelText }}</label>
  </div>
</template>

<script setup>
import { defineProps,defineEmits } from "vue"

const props = defineProps({
  inputType: String,
  inputId: String,
  placeHolder: String,
  modelValue: String,
  labelText: String,
  inputClass: {
    type: Object,
    default: {'form-control': true}
  }
})

//Define Custom Event 
const emit = defineEmits(["update"]);

const updateValue = (value) => {
  emit("update", value);
};
</script>

<style scoped></style>
