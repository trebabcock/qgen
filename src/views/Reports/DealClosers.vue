<template>
  <div class="bg-gray-700 min-h-screen p-6 text-gray-300 flex flex-col">
    <h1 class="text-4xl mb-4">Deal Closers</h1>
    <p class="mb-2">
      These reports will gather data regarding the companies that were able to
      close deals.
    </p>
    <div class="mb-4">
      <h2 class="text-2xl mb-2">Default</h2>
      <p class="mb-2">
        This will just get the first 100 companies that were able to close a
        deal, in no particular order.
      </p>
      <span
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
          mb-3
        "
        ><span class="text-red-400">SELECT</span> *<br />
        <span class="text-red-400">FROM</span> closed_deals<br />
        <span class="text-red-400">LIMIT</span> 100;
      </span>
      <div
        class="
          bg-red-400
          text-red-800
          hover:bg-red-300
          rounded-lg
          px-4
          py-2
          cursor-pointer
          max-w-min
        "
        v-on:click="sendDefault"
      >
        <p>Run</p>
      </div>
    </div>
    <div class="mb-4">
      <h2 class="text-2xl mb-2">Popular Products</h2>
      <p class="mb-2">
        This will get the top ten product categories, and the number of deal
        closers selling them.
      </p>
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
        ><span class="text-red-400">SELECT</span> business_segment,
        <span class="text-red-400">COUNT</span>(business_segment)
        <span class="text-red-400">AS</span> occurance<br />
        <span class="text-red-400">FROM</span> closed_deals<br />
        <span class="text-red-400">GROUP BY</span> business_segment<br />
        <span class="text-red-400">ORDER BY</span> occurance
        <span class="text-red-400">DESC</span><br />
        <span class="text-red-400">LIMIT</span> 10;
      </span>
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
        v-on:click="sendBusinessSegment"
      >
        <p>Run</p>
      </div>
    </div>
    <div class="mb-2">
      <h2 class="text-2xl mb-2">Fastest Closing Product Categories</h2>
      <p class="mb-2">
        This will get the product categories and their average time-to-close,
        from fastest to slowest.
      </p>
      <span
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
          mb-3
        "
        ><span class="text-red-400">SELECT</span> closed_deals.business_segment
        <span class="text-red-400">AS</span> segment,
        <span class="text-red-400">AVG</span>(<span class="text-red-400"
          >julianday</span
        >(closed_deals.won_date) -
        <span class="text-red-400">julianday</span
        >(marketing_qualified_leads.first_contact_date))
        <span class="text-red-400">AS</span> days<br />
        <span class="text-red-400">FROM</span> marketing_qualified_leads<br />
        <span class="text-red-400">INNER JOIN</span> closed_deals<br />
        <span class="text-red-400">ON</span> marketing_qualified_leads.mql_id =
        closed_deals.mql_id<br />
        <span class="text-red-400">GROUP BY</span> segment<br />
        <span class="text-red-400">ORDER BY</span> days ASC;
      </span>
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
        v-on:click="sendProductTime"
      >
        <p>Run</p>
      </div>
    </div>
    <div class="mb-2">
      <h2 class="text-2xl mb-2">To Manufacture or Resell</h2>
      <p class="mb-2">
        This will get the product categories and their average time-to-close,
        from fastest to slowest.
      </p>
      <span
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
          mb-3
        "
        ><span class="text-red-400">SELECT</span> closed_deals.business_type
        <span class="text-red-400">AS</span> segment,
        <span class="text-red-400">AVG</span>(<span class="text-red-400"
          >julianday</span
        >(closed_deals.won_date) -
        <span class="text-red-400">julianday</span
        >(marketing_qualified_leads.first_contact_date))
        <span class="text-red-400">AS</span> days<br />
        <span class="text-red-400">FROM</span> marketing_qualified_leads<br />
        <span class="text-red-400">INNER JOIN</span> closed_deals<br />
        <span class="text-red-400">ON</span> marketing_qualified_leads.mql_id =
        closed_deals.mql_id<br />
        <span class="text-red-400">GROUP BY</span> segment<br />
        <span class="text-red-400">ORDER BY</span> days
        <span class="text-red-400">ASC</span>;<br />
      </span>
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
        v-on:click="sendBusinessType"
      >
        <p>Run</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    sendDefault() {
      let text = `SELECT * FROM closed_deals LIMIT 100;`;
      this.$store.dispatch("submitQuery", text);
      this.$router.push("/report");
    },
    sendBusinessSegment() {
      let text = `SELECT business_segment, COUNT(business_segment) AS occurance FROM closed_deals GROUP BY business_segment ORDER BY occurance DESC LIMIT 10;`;
      this.$store.dispatch("submitQuery", text);
      this.$router.push("/report");
    },
    sendProductTime() {
      let text = `SELECT closed_deals.business_segment AS segment, AVG(julianday(closed_deals.won_date) - julianday(marketing_qualified_leads.first_contact_date)) AS days FROM marketing_qualified_leads INNER JOIN closed_deals ON marketing_qualified_leads.mql_id = closed_deals.mql_id GROUP BY segment ORDER BY days ASC;`;
      this.$store.dispatch("submitQuery", text);
      this.$router.push("/report");
    },
    sendBusinessType() {
      let text = `SELECT closed_deals.business_type AS segment, AVG(julianday(closed_deals.won_date) - julianday(marketing_qualified_leads.first_contact_date)) AS days FROM marketing_qualified_leads INNER JOIN closed_deals ON marketing_qualified_leads.mql_id = closed_deals.mql_id GROUP BY segment ORDER BY days ASC;`;
      this.$store.dispatch("submitQuery", text);
      this.$router.push("/report");
    },
  },
};
</script>
