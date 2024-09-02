<template>
  <div class="mb-4">
    <label class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700"
      >{{ title }}
      <label v-if="required" class="inline-block font-bold text-xs text-red-500"
        >*</label
      >
    </label>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    title: String,
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
      required: true,
    },
    maxlength: {
      type: Number,
      default: 0,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
