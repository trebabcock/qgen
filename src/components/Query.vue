<template>
  <span
    class="
      block
      font-mono
      md:w-8/12
      lg:w-8/12
      w-full
      overflow-x-auto
      text-sm
      rounded-lg
      p-2
      bg-gray-600
      text-gray-200
      mb-3
    "
  >
    {{ query }}
  </span>
</template>

<script>
export default {
  props: {
    query: {
      type: String,
      required: true,
    },
  },
  mounted: {
    format() {},
  },
};
</script>
