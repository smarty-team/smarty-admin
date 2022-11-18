<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { reactive } from 'vue';

const { t } = useI18n()


// const pages: Record<string, any> = import.meta.globEager('~/pages/*.vue')

// const menus = Object.keys(pages)
//   .map(k => ({ k, v: pages[k].default }))
//   .filter(page => page.v.menu)
//   .map(page => ({
//     name: page.v.menu,
//     url: page.k.replace('../pages', '').replace('.vue', ''),
//     icon: page.v.icon
//   }))

// console.log('menus', menus)
// const courses = reactive(menus)

const courses = reactive([
  { name: 'Vue全家桶', icon: '', url: '/vue' },
  { name: 'React18全家桶', icon: '', url: '/react' },
  { name: 'TypeScript基础', icon: '', url: '' },
  { name: 'Node与服务器端', icon: '', url: '' },
  { name: '算法与数据结构', icon: '', url: '' },
  { name: 'Vue全家桶源码', icon: '', url: '' },
  { name: 'React全家桶源码', icon: '', url: '' },
  { name: '前端工程化实践', icon: '', url: '' },
  { name: '面试题串讲', icon: '', url: '' },
])

</script>


<template>
  <aside id="aside"
    class="w-60 fixed top-0 z-40 h-screen transition-position lg:left-0 dark:border-r dark:border-gray-800 dark:bg-gray-900/70 lg:dark:bg-gray-900 xl:dark:bg-gray-900/70 bg-gray-800 -left-60 lg:hidden xl:block"
    style="">
    <div class="flex flex-row w-full flex-1 h-14 items-center dark:bg-transparent bg-gray-900 text-white">
      <div class="hidden lg:flex xl:hidden items-center grow-0 shrink-0 relative cursor-pointer text-white py-2 px-3">
        <span class="inline-flex justify-center items-center w-6 h-6 cursor-pointer"><svg viewBox="0 0 24 24" width="24"
            height="24" class="inline-block">
            <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path>
          </svg></span>
      </div>
      <div class="flex-1 px-3">
        <b class="font-black">Smarty Admin</b>
      </div>
    </div>
    <div>
      <p class="p-3 text-xs uppercase text-gray-400">General</p>
      <ul>
        <li>
          <!-- <a class="router-link-active router-link-exact-active flex cursor-pointer dark:hover:bg-gray-700/50 hover:bg-gray-600 hover:bg-opacity-50 py-2"
            aria-current="page" href="/"><span
              class="inline-flex justify-center items-center w-12 h-6 flex-none font-bold text-white"><i
                class="i-mdi-television"></i></span><span class="grow font-bold text-white">Dashboard</span>
          </a> -->
          <router-link
            class="router-link-active router-link-exact-active flex cursor-pointer dark:hover:bg-gray-700/50 hover:bg-gray-600 hover:bg-opacity-50 py-2"
            aria-current="page" to="/"><span
              class="inline-flex justify-center items-center w-12 h-6 flex-none font-bold text-white"><i
                class="i-mdi-television"></i></span><span class="grow font-bold text-white">Dashboard</span>
          </router-link>
        </li>
      </ul>
      <p class="p-3 text-xs uppercase text-gray-400">{{ t("courses") }}</p>
      <ul>
        <li v-for="(item, index) in courses" :key="index">
          <!-- <a class="flex cursor-pointer dark:hover:bg-gray-700/50 hover:bg-gray-600 hover:bg-opacity-50 py-2"
            :href="item.url"><span class="inline-flex justify-center items-center w-12 h-6 flex-none text-gray-300"><i
                :class="item.icon"></i></span><span class="grow text-gray-300">{{ item.name }}</span>
          </a> -->
          <router-link class="flex cursor-pointer dark:hover:bg-gray-700/50 hover:bg-gray-600 hover:bg-opacity-50 py-2"
            :to="item.url"><span class="inline-flex justify-center items-center w-12 h-6 flex-none text-gray-300"><i
                :class="item.icon"></i></span><span class="grow text-gray-300">{{ item.name }}</span>
          </router-link>


        </li>
      </ul>
      <p class="p-3 text-xs uppercase text-gray-400">About</p>
      <ul>
        <li>
          <a href="https://github.com/smarty-team/smarty-admin" target="_blank"
            class="flex cursor-pointer dark:hover:bg-gray-700/50 hover:bg-gray-600 hover:bg-opacity-50 py-2"><span
              class="inline-flex justify-center items-center w-12 h-6 flex-none text-gray-300"><i
                class="i-mdi-github"></i></span><span class="grow text-gray-300">GitHub</span>
            <!--v-if-->
          </a>
          <!--v-if-->
        </li>
      </ul>
    </div>
  </aside>
</template>
