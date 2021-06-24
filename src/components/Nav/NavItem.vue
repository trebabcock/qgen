<template>
  <router-link
    class="
      block
      px-4
      py-2
      mt-2
      text-sm
      font-semibold
      rounded-lg
      truncate
      transition
      duration-200
      ease-in-out
      hover:bg-opacity-100 hover:text-red-800
    "
    v-bind:class="{
      'bg-red-300 text-red-800': isActive,
      'bg-red-300 bg-opacity-20 text-red-500 ': !isActive,
    }"
    :to="route"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    route: {
      type: String,
      required: true,
    },
  },
  computed: {
    isActive() {
      return this.$route.path === this.route;
    },
  },
};
</script>
