<template>
  <div class="bg-gray-700 min-h-screen p-6 text-gray-300 flex flex-col">
    <h1 class="text-4xl mb-4">Time To Close</h1>
    <p class="mb-2">
      These reports will gather data regarding the time it took from first
      contact, to closing a deal.
    </p>
    <div class="mb-4">
      <h2 class="text-2xl mb-2">Default</h2>
      <p class="mb-2">
        This will just get the first 100 date ranges in no particular order.
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
        ><span class="text-red-400">SELECT</span>
        marketing_qualified_leads.first_contact_date, closed_deals.won_date<br />
        <span class="text-red-400">FROM</span> marketing_qualified_leads<br />
        <span class="text-red-400">INNER JOIN</span> closed_deals<br />
        <span class="text-red-400">ON</span> marketing_qualified_leads.mql_id =
        closed_deals.mql_id<br />
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
      <h2 class="text-2xl mb-2">Days To Close</h2>
      <p class="mb-2">
        This will get the number of days it took to close the deal on the first
        100 results.
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
        ><span class="text-red-400">SELECT</span>{{ " " }}
        <span class="text-red-400">julianday</span>(closed_deals.won_date) -
        <span class="text-red-400">julianday</span
        >(marketing_qualified_leads.first_contact_date)<br />
        <span class="text-red-400">FROM</span>
        marketing_qualified_leads<br />
        <span class="text-red-400">INNER JOIN</span> closed_deals<br />
        <span class="text-red-400">ON</span>
        marketing_qualified_leads.mql_id = closed_deals.mql_id<br />
        <span class="text-red-400">LIMIT</span> 100;<br />
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
        v-on:click="sendDaysToClose"
      >
        <p>Run</p>
      </div>
    </div>
    <div class="mb-2">
      <h2 class="text-2xl mb-2">Average</h2>
      <p class="mb-2">
        This will get the average number of days it took to close a deal.
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
        ><span class="text-red-400">SELECT</span>{{ " " }}
        <span class="text-red-400">AVG</span>(<span class="text-red-400"
          >julianday</span
        >(closed_deals.won_date) -
        <span class="text-red-400">julianday</span
        >(marketing_qualified_leads.first_contact_date))<br />
        <span class="text-red-400">FROM</span> marketing_qualified_leads<br />
        <span class="text-red-400">INNER JOIN</span> closed_deals<br />
        <span class="text-red-400">ON</span>
        marketing_qualified_leads.mql_id = closed_deals.mql_id;
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
        v-on:click="sendAverage"
      >
        <p>Run</p>
      </div>
    </div>
    <div class="mb-2">
      <h2 class="text-2xl mb-2">Faster than Average</h2>
      <p class="mb-2">
        This will get the deals that closed faster than average.
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
        ><span class="text-red-400">SELECT</span
        >{{ " " }}marketing_qualified_leads.mql_id,
        <span class="text-red-400">julianday</span>(closed_deals.won_date) -
        <span class="text-red-400">julianday</span
        >(marketing_qualified_leads.first_contact_date)<br />
        <span class="text-red-400">AS</span> days<br />
        <span class="text-red-400">FROM</span> marketing_qualified_leads<br />
        <span class="text-red-400">INNER JOIN</span> closed_deals<br />
        <span class="text-red-400">ON</span> marketing_qualified_leads.mql_id =
        closed_deals.mql_id<br />
        <span class="text-red-400">WHERE</span> days &#60;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;(<span class="text-red-400">SELECT</span
        >{{ " " }} <span class="text-red-400">AVG</span>(<span
          class="text-red-400"
          >julianday</span
        >(closed_deals.won_date) -
        <span class="text-red-400">julianday</span
        >(marketing_qualified_leads.first_contact_date))<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-400">FROM</span>
        marketing_qualified_leads<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-400">INNER JOIN</span>
        closed_deals<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-400">ON</span>
        marketing_qualified_leads.mql_id = closed_deals.mql_id<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-400">LIMIT</span>
        100)<br />
        <span class="text-red-400">LIMIT</span> 100;
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
        v-on:click="sendFaster"
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
      let text = `SELECT marketing_qualified_leads.first_contact_date, closed_deals.won_date FROM marketing_qualified_leads INNER JOIN closed_deals ON marketing_qualified_leads.mql_id = closed_deals.mql_id LIMIT 100;`;
      this.$store.dispatch("submitQuery", text);
      this.$router.push("/report");
    },
    sendDaysToClose() {
      let text = `select round(julianday(closed_deals.won_date) - julianday(marketing_qualified_leads.first_contact_date)) from marketing_qualified_leads inner join closed_deals on marketing_qualified_leads.mql_id = closed_deals.mql_id limit 100;`;
      this.$store.dispatch("submitQuery", text);
      this.$router.push("/report");
    },
    sendAverage() {
      let text = `select avg(julianday(closed_deals.won_date) - julianday(marketing_qualified_leads.first_contact_date)) from marketing_qualified_leads inner join closed_deals on marketing_qualified_leads.mql_id = closed_deals.mql_id;`;
      this.$store.dispatch("submitQuery", text);
      this.$router.push("/report");
    },
    sendFaster() {
      let text = `SELECT marketing_qualified_leads.mql_id, julianday(closed_deals.won_date) - julianday(marketing_qualified_leads.first_contact_date) AS days from marketing_qualified_leads INNER JOIN closed_deals ON marketing_qualified_leads.mql_id = closed_deals.mql_id WHERE days < (SELECT AVG(julianday(closed_deals.won_date) - julianday(marketing_qualified_leads.first_contact_date)) from marketing_qualified_leads INNER JOIN closed_deals ON marketing_qualified_leads.mql_id = closed_deals.mql_id LIMIT 100) LIMIT 100;`;
      this.$store.dispatch("submitQuery", text);
      this.$router.push("/report");
    },
  },
};
</script>
