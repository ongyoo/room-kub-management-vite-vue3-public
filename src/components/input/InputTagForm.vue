<template>
  <div class="mb-4">
    <label class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700"
      >{{ title }}
      <label v-if="required" class="inline-block font-bold text-xs text-red-500"
        >*</label
      >
    </label>

    <div class="w-full p-2 border rounded flex flex-wrap items-center">
      <div
        v-for="(tag, index) in tags"
        :key="index"
        class="bg-blue-500 text-white rounded-full px-3 py-1 mr-2 mb-2"
      >
        {{ tag }}
        <button @click="removeTag(index)" class="ml-1 text-white">
          &times;
        </button>
      </div>
      <input
        v-model="newTag"
        @keyup.enter="addTag"
        class="outline-none border-none flex-grow p-1"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'

export default defineComponent({
  name: 'TagsInput',
  props: {
    title: String,
    placeholder: String,
    required: {
      type: Boolean,
      default: false,
    },
    initialTags: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
  setup(props) {
    const tags = ref<string[]>(props.initialTags)
    const newTag = ref<string>('')

    const addTag = () => {
      const trimmedTag = newTag.value.trim()
      console.log('initialTags :' + props.initialTags)
      console.log(tags.value)
      if (trimmedTag !== '' && !tags.value.includes(trimmedTag)) {
        tags.value.push(trimmedTag)
        newTag.value = ''
      }
    }

    const removeTag = (index: number) => {
      tags.value.splice(index, 1)
    }

    return {
      tags,
      newTag,
      addTag,
      removeTag,
    }
  },
})
</script>

<style scoped>
input::placeholder {
  color: #cbd5e0;
}
</style>
