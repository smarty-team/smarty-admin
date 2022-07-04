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
          <a class="router-link-active router-link-exact-active flex cursor-pointer dark:hover:bg-gray-700/50 hover:bg-gray-600 hover:bg-opacity-50 py-2"
            aria-current="page"><span
              class="inline-flex justify-center items-center w-12 h-6 flex-none font-bold text-white"><i
                class="i-mdi-television"></i></span><span class="grow font-bold text-white">Dashboard</span>
            <!--v-if-->
          </a>
          <!--v-if-->
        </li>
      </ul>
      <p class="p-3 text-xs uppercase text-gray-400">Examples</p>
      <ul>
        <li>
          <a class="flex cursor-pointer dark:hover:bg-gray-700/50 hover:bg-gray-600 hover:bg-opacity-50 py-2"><span
              class="inline-flex justify-center items-center w-12 h-6 flex-none text-gray-300"><i
                class="i-mdi-table"></i></span><span class="grow text-gray-300">Tables</span>
            <!--v-if-->
          </a>
          <!--v-if-->
        </li>
        <li>
          <a class="flex cursor-pointer dark:hover:bg-gray-700/50 hover:bg-gray-600 hover:bg-opacity-50 py-2"><span
              class="inline-flex justify-center items-center w-12 h-6 flex-none text-gray-300"><i
                class="i-mdi-form-select"></i></span><span class="grow text-gray-300">Forms</span>
            <!--v-if-->
          </a>
          <!--v-if-->
        </li>
        <li>
          <a class="flex cursor-pointer dark:hover:bg-gray-700/50 hover:bg-gray-600 hover:bg-opacity-50 py-2"><span
              class="inline-flex justify-center items-center w-12 h-6 flex-none text-gray-300"><i
                class="i-mdi-view-quilt"></i></span><span class="grow text-gray-300">UI</span>
            <!--v-if-->
          </a>
          <!--v-if-->
        </li>
        <li>
          <a class="flex cursor-pointer dark:hover:bg-gray-700/50 hover:bg-gray-600 hover:bg-opacity-50 py-2"><span
              class="inline-flex justify-center items-center w-12 h-6 flex-none text-gray-300"><i
                class="i-mdi-responsive"></i></span><span class="grow text-gray-300">Responsive</span>
            <!--v-if-->
          </a>
          <!--v-if-->
        </li>
        <li>
          <a class="flex cursor-pointer dark:hover:bg-gray-700/50 hover:bg-gray-600 hover:bg-opacity-50 py-2"><span
              class="inline-flex justify-center items-center w-12 h-6 flex-none text-gray-300"><i
                class="i-mdi-palette"></i></span><span class="grow text-gray-300">Styles</span>
            <!--v-if-->
          </a>
          <!--v-if-->
        </li>
        <li>
          <a class="flex cursor-pointer dark:hover:bg-gray-700/50 hover:bg-gray-600 hover:bg-opacity-50 py-2"><span
              class="inline-flex justify-center items-center w-12 h-6 flex-none text-gray-300"><i
                class="i-mdi-account-circle"></i></span><span class="grow text-gray-300">Profile</span>
            <!--v-if-->
          </a>
          <!--v-if-->
        </li>
        <li>
          <a class="flex cursor-pointer dark:hover:bg-gray-700/50 hover:bg-gray-600 hover:bg-opacity-50 py-2"><span
              class="inline-flex justify-center items-center w-12 h-6 flex-none text-gray-300"><i
                class="i-mdi-lock"></i></span><span class="grow text-gray-300">Login</span>
            <!--v-if-->
          </a>
          <!--v-if-->
        </li>
        <li>
          <a class="flex cursor-pointer dark:hover:bg-gray-700/50 hover:bg-gray-600 hover:bg-opacity-50 py-2"><span
              class="inline-flex justify-center items-center w-12 h-6 flex-none text-gray-300"><i
                class="i-mdi-information"></i></span><span class="grow text-gray-300">Error</span>
            <!--v-if-->
          </a>
          <!--v-if-->
        </li>
        <li>
          <a class="flex cursor-pointer dark:hover:bg-gray-700/50 hover:bg-gray-600 hover:bg-opacity-50 py-2"><span
              class="inline-flex justify-center items-center w-12 h-6 flex-none text-gray-300"><i
                class="i-mdi-format-list-bulleted"></i></span><span class="grow text-gray-300">Submenus</span><span
              class="inline-flex justify-center items-center w-12 h-6 flex-none text-gray-300"><svg viewBox="0 0 24 24"
                width="16" height="16" class="inline-block">
                <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path>
              </svg></span></a>
          <ul class="bg-gray-700 bg-opacity-50 hidden">
            <li>
              <a
                class="flex cursor-pointer dark:hover:bg-gray-700/50 hover:bg-gray-600 hover:bg-opacity-50 p-3 text-sm">
                <!--v-if--><span class="grow text-gray-300">Sub-item One</span>
                <!--v-if-->
              </a>
              <!--v-if-->
            </li>
            <li>
              <a
                class="flex cursor-pointer dark:hover:bg-gray-700/50 hover:bg-gray-600 hover:bg-opacity-50 p-3 text-sm">
                <!--v-if--><span class="grow text-gray-300">Sub-item Two</span>
                <!--v-if-->
              </a>
              <!--v-if-->
            </li>
          </ul>
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
