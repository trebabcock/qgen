<template>
  <div class="bg-gray-700 min-h-screen w-full p-6 text-gray-300">
    <h1 class="text-4xl mb-4">qGen</h1>
    <p class="mb-2">
      qGen is a report generator for SQL databases. You can choose a category in
      the menu, and run a pre-written query, or click Custom Query and write
      your own. The sample data on this site was obtained from
      <a
        class="text-red-400"
        href="https://www.kaggle.com/olistbr/marketing-funnel-olist"
        >here</a
      >.
    </p>
    <blockquote
      class="
        text-gray-400
        rounded-sm
        border-l-4
        p-4
        border-red-500
        italic
        md:w-8/12
        lg:w-8/12
        w-full
        mb-2
      "
    >
      This is a marketing funnel dataset from sellers that filled-in requests of
      contact to sell their products on Olist Store. The dataset has information
      of 8k Marketing Qualified Leads (MQLs) that requested contact between Jun.
      1st 2017 and Jun 1st 2018. They were randomly sampled from the total of
      MQLs.
    </blockquote>
    <p class="mb-2">
      The database contains two tables:
      <span
        class="
          font-mono
          text-center text-sm
          rounded-lg
          px-2
          py-1
          bg-gray-600
          text-gray-200
        "
      >
        closed_deals
      </span>
      and
      <span
        class="
          font-mono
          text-center text-sm
          rounded-lg
          px-2
          py-1
          bg-gray-600
          text-gray-200
        "
      >
        marketing_qualified_leads </span
      >. These tables have the following columns, respectively:
    </p>
    <div class="overflow-x-auto text-sm py-2">
      <table class="font-mono" title="marketing_qualified_leads">
        <tr>
          <th class="border border-gray-400 px-2">mql_id</th>
          <th class="border border-gray-400 px-2">seller_id</th>
          <th class="border border-gray-400 px-2">sdr_id</th>
          <th class="border border-gray-400 px-2">sr_id</th>
          <th class="border border-gray-400 px-2">won_date</th>
          <th class="border border-gray-400 px-2">business_segment</th>
          <th class="border border-gray-400 px-2">lead_type</th>
          <th class="border border-gray-400 px-2">lead_behaviour_profile</th>
          <th class="border border-gray-400 px-2">has_company</th>
          <th class="border border-gray-400 px-2">has_gtin</th>
          <th class="border border-gray-400 px-2">average_stock</th>
          <th class="border border-gray-400 px-2">business_type</th>
          <th class="border border-gray-400 px-2">
            declared_product_catalog_size
          </th>
          <th class="border border-gray-400 px-2">declared_monthly_revenue</th>
        </tr>
      </table>
    </div>
    <div class="overflow-x-auto text-sm py-2 mb-2">
      <table class="font-mono" title="marketing_qualified_leads">
        <tr>
          <th class="border border-gray-400 px-2">mql_id</th>
          <th class="border border-gray-400 px-2">first_contact_date</th>
          <th class="border border-gray-400 px-2">landing_page_id</th>
          <th class="border border-gray-400 px-2">origin</th>
        </tr>
      </table>
    </div>
    <p class="mb-2">
      In the interest of DevOps simplicity, I'm using SQLite for this project.
      As you probably know, SQLite is much more limited than other database
      solutions, such as SQL Server and PostgreSQL. For instance, SQLite does
      not support the RIGHT JOIN clause, or the FULL OUTER JOIN clause. SQLite
      is still very usable, though, and will work just fine for a dataset as
      simple as this.
    </p>
    <p>
      This website was built with Vue.js and TailwindCSS. The server was written
      in Python. Feel free to browse the code for qGen on GitHub. The server is
      <a class="text-red-400" href="https://github.com/trebabcock/qgen-server"
        >here</a
      >
      and the frontend is
      <a class="text-red-400" href="https://github.com/trebabcock/qgen">here</a
      >.
    </p>
  </div>
</template>
