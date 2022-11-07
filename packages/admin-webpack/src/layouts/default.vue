<template>
  <main>
    <div class="pt-14 xl:pl-60">
      <div class="bg-white text-base dark:bg-gray-800 dark:text-gray-100">
        <navbar></navbar>
        <side-menu></side-menu>
        <div id="main">
          <router-view />
        </div>
        <footer-content></footer-content>
      </div>
    </div>
  </main>
</template>
<script lang="ts" setup>
import Navbar from "@/components/Navbar.vue"
import SideMenu from "@/components/SideMenu.vue"
import FooterContent from "@/components/FooterContent.vue"
</script>
