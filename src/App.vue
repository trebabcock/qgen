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
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>

<script>
import Menu from "./components/Nav/Menu";
export default {
  components: { Menu },
};
</script>
