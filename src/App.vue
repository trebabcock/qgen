<template>
  <div
    id="app"
    class="h-screen md:flex lg:flex md:flex-row lg:flex-row flex flex-col"
  >
    <Menu />
    <div class="flex-1 flex overflow-hidden">
      <div class="antialiased flex-1 overflow-y-auto">
        <div class="flex flex-col">
          <router-view />
          <div class="bg-gray-800 px-4 py-1 text-gray-500">
            <p class="text-center text-xs">Copyright &copy; 2021 Tre Babcock</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<script>
import Menu from "./components/Nav/Menu";
export default {
  components: { Menu },
};
</script>
