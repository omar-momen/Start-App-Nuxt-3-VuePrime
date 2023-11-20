<template>
  <InputText
    v-if="type == 'text' || type == 'email' || type == 'number'"
    :aria-label="`input ${type}`"
    :name="props.name || `input  ${type}`"
    :type="type"
    class="custom_input"
    :class="{ 'p-invalid': props.error }"
    v-bind:="$attrs"
    @input="updateValue"
  />
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  modelValue: {
    required: true,
  },
  type: {
    default: "text",
    type: String,
  },
  name: {
    type: String,
  },
  required: {
    required: false,
    default: false,
    type: Boolean,
  },
  error: {
    required: false,
    default: "",
    type: String,
  },
});

const emits = defineEmits(["update:modelValue"]);
const updateValue = (e) => {
  validate();
  emits("update:modelValue", e.target.value);
};
</script>
