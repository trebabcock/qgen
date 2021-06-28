<template>
  <div class="p-6 min-h-screen w-full bg-gray-700 text-gray-300">
    <div class="overflow-x-auto overflow-y-auto">
      <table class="border-2 border-gray-800 rounded-lg">
        <tbody>
          <tr v-for="arr in result" :key="arr">
            <td
              v-for="row in arr"
              :key="row"
              class="px-4 py-2 text-center border border-gray-800"
            >
              {{ row }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    result() {
      return this.$store.getters.getResult;
    },
  },
};
</script>
