<template>
  <div
    class="
      md:w-64
      lg:w-64
      w-full
      p-2
      flex
      md:flex-col
      lg:flex-col
      flex-row
      max-h-screen
      bg-gray-800
      dark:bg-menu-bg-dark
      no-scrollbar
      antialiased
    "
  >
    <div
      class="
        flex-shrink-0
        md:px-8
        lg:px-8
        px-2
        text-green-300
        py-4
        flex flex-row
        items-center
        justify-between
      "
    >
      <router-link
        to="/"
        class="
          text-3xl text-red-500
          font-bold
          tracking-widest
          uppercase
          rounded-lg
        "
      >
        qGen
      </router-link>
    </div>
    <nav
      v-bind:class="{ block: chatOpen, hidden: !chatOpen }"
      class="md:block px-4 pb-4 flex flex-1"
    >
      <NavItem route="/reports/time_to_close">Time To Close</NavItem>
      <NavItem route="/reports/new">New Generator</NavItem>
    </nav>
  </div>
</template>

<script>
import NavItem from "./NavItem";
export default {
  components: {
    NavItem,
  },
  data() {
    return {
      chatOpen: false,
    };
  },
  methods: {
    toggleChat() {
      this.chatOpen = !this.chatOpen;
    },
  },
};
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
  width: 0px;
}
::-webkit-scrollbar {
  width: 0px;
}
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
