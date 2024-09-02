<template>
  <div class="mb-4">
    <label class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700">
      {{ title }}
    </label>
    <select
      :value="status"
      @input="$emit('update:status', $event.target.value)"
      class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    title: String,
    status: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
      validator(value) {
        // Validate that the array contains objects with 'value' and 'text' keys
        return value.every((option) => 'value' in option && 'text' in option)
      },
    },
  },
})
</script>
