<template>
  <div
    class="
      w-11/12
      lg:w-full
      max-w-xl
      z-20
      mx-auto
      bg-white
      flex flex-col
      relative
      self-center
      shadow-2xl
      rounded-md
    "
  >
    <!-- Modal header -->
    <div
      class="p-6 border-b-4 border-gray-200 text-lg font-bold text-indigo-400"
    >
      Modal title
    </div>
    <!-- ./Modal header -->

    <!-- Modal body -->
    <div class="p-6">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
      officiis ipsam cupiditate illum laborum atque voluptatibus ut doloremque
      excepturi quisquam repellendus dolor deserunt totam tempore, laboriosam
      earum sapiente esse praesentium.
    </div>
    <!-- ./Modal body -->

    <!-- Modal footer -->
    <div class="border-t-4 border-gray-200 p-6 flex justify-end">
      <button
        @click="showModal = false"
        class="
          bg-green-400
          hover:bg-green-500
          focus:outline-none
          px-4
          py-2
          rounded-md
          text-white
          transition
          duration-500
          ease-in-out
        "
      >
        Close Modal
      </button>
    </div>
    <!-- ./Modal footer -->
  </div>
</template>

<script>
export default {
  name: "Modal",
};
</script>
