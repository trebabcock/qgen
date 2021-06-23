<template>
  <div class="bg-gray-700 min-h-screen w-full p-6 text-gray-300">
    <h1 class="text-4xl mb-4">New Generator</h1>
    <p class="mb-4">
      Write your SQL qeury in the box below. You can choose to save it, or just
      run it once.
    </p>
    <textarea
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
        mb-4
      "
      id="query"
      name="query"
      rows="10"
      cols="80"
    >
        SELECT *
        FROM closed_deals
        LIMIT 100;
    </textarea>
    <div
      class="
        bg-red-400
        text-red-800
        rounded-lg
        px-4
        py-2
        w-28
        text-center
        cursor-pointer
        mb-2
      "
    >
      <p>Run Once</p>
    </div>
    <div
      class="
        bg-red-400
        text-red-800
        rounded-lg
        px-4
        py-2
        w-28
        text-center
        cursor-pointer
        mb-2
      "
    >
      <p>Save</p>
    </div>
  </div>
</template>
