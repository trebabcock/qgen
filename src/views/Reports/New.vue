<template>
  <div class="bg-gray-700 min-h-screen w-full p-6 text-gray-300">
    <h1 class="text-4xl mb-4">New Query</h1>
    <div class="mb-4">
      <p class="mb-4">
        Write your SQL qeury in the box below, and then click Run.
      </p>
      <textarea
        id="input_box"
        class="
          block
          font-mono
          overflow-x-auto
          md:w-8/12
          lg:w-8/12
          w-full
          text-sm
          rounded-lg
          p-2
          bg-gray-600
          text-gray-200
          mb-2
        "
        name="query"
        rows="10"
        cols="80"
      >
SELECT * FROM closed_deals LIMIT 100;</textarea
      >
      <div
        class="
          bg-red-400
          hover:bg-red-300
          text-red-800
          rounded-lg
          px-4
          py-2
          cursor-pointer
          max-w-min
        "
        v-on:click="submitQuery"
      >
        <p>Run</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    submitQuery() {
      let text = document.getElementById("input_box").value;
      if (!text) {
        return;
      }
      console.log(text);
      this.$store.dispatch("submitQuery", text);
      this.$router.push("/report");
    },
  },
  computed: {
    table() {
      return document.getElementById("table").value;
    },
    table1() {
      return this.table() == "closed_deals";
    },
    table2() {
      return this.table() == "marketing_qualified_leads";
    },
  },
};
</script>
