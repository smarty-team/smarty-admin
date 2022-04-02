<template>
  <aside
    id="aside"
    class="w-60 fixed top-0 z-40 h-screen transition-position lg:left-0 dark:border-r dark:border-gray-800 dark:bg-gray-900/70 lg:dark:bg-gray-900 xl:dark:bg-gray-900/70 bg-gray-800 -left-60 lg:hidden xl:block"
    style=""
  >
    <div
      class="flex flex-row w-full flex-1 h-14 items-center dark:bg-transparent bg-gray-900 text-white"
    >
      <div
        class="hidden lg:flex xl:hidden items-center grow-0 shrink-0 relative cursor-pointer text-white py-2 px-3"
      >
        <span
          class="inline-flex justify-center items-center w-6 h-6 cursor-pointer"
          ><svg viewBox="0 0 24 24" width="24" height="24" class="inline-block">
            <path
              fill="currentColor"
              d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
            ></path></svg
        ></span>
      </div>
      <div class="flex-1 px-3">
        <span>Admin</span> <b class="font-black">One</b>
      </div>
    </div>
    <div>
      <p class="p-3 text-xs uppercase text-gray-400">General</p>
      <ul>
        <li>
          <a
            class="router-link-active router-link-exact-active flex cursor-pointer dark:hover:bg-gray-700/50 hover:bg-gray-600 hover:bg-opacity-50 py-2"
            aria-current="page"
            ><span
              class="inline-flex justify-center items-center w-12 h-6 flex-none font-bold text-white"
              ><svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                class="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M21,14H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10L8,21V22H16V21L14,18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z"
                ></path></svg></span
            ><span class="grow font-bold text-white">Dashboard</span
            ><!--v-if--></a
          ><!--v-if-->
        </li>
      </ul>
      <p class="p-3 text-xs uppercase text-gray-400">Examples</p>
      <ul>
        <li>
          <a
            class="flex cursor-pointer dark:hover:bg-gray-700/50 hover:bg-gray-600 hover:bg-opacity-50 py-2"
            ><span
              class="inline-flex justify-center items-center w-12 h-6 flex-none text-gray-300"
              ><svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                class="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z"
                ></path></svg></span
            ><span class="grow text-gray-300">Tables</span
            ><!--v-if--></a
          ><!--v-if-->
        </li>
        <li>
          <a
            class="flex cursor-pointer dark:hover:bg-gray-700/50 hover:bg-gray-600 hover:bg-opacity-50 py-2"
            ><span
              class="inline-flex justify-center items-center w-12 h-6 flex-none text-gray-300"
              ><svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                class="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z"
                ></path></svg></span
            ><span class="grow text-gray-300">Forms</span
            ><!--v-if--></a
          ><!--v-if-->
        </li>
        <li>
          <a
            class="flex cursor-pointer dark:hover:bg-gray-700/50 hover:bg-gray-600 hover:bg-opacity-50 py-2"
            ><span
              class="inline-flex justify-center items-center w-12 h-6 flex-none text-gray-300"
              ><svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                class="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M21,17V5H3V17H21M21,3A2,2 0 0,1 23,5V17A2,2 0 0,1 21,19H16V21H8V19H3A2,2 0 0,1 1,17V5A2,2 0 0,1 3,3H21M5,7H11V11H5V7M5,13H11V15H5V13M13,7H19V9H13V7M13,11H19V15H13V11Z"
                ></path></svg></span
            ><span class="grow text-gray-300">UI</span
            ><!--v-if--></a
          ><!--v-if-->
        </li>
        <li>
          <a
            class="flex cursor-pointer dark:hover:bg-gray-700/50 hover:bg-gray-600 hover:bg-opacity-50 py-2"
            ><span
              class="inline-flex justify-center items-center w-12 h-6 flex-none text-gray-300"
              ><svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                class="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M4,6V16H9V12A2,2 0 0,1 11,10H16A2,2 0 0,1 18,12V16H20V6H4M0,20V18H4A2,2 0 0,1 2,16V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V16A2,2 0 0,1 20,18H24V20H18V20C18,21.11 17.1,22 16,22H11A2,2 0 0,1 9,20H9L0,20M11.5,20A0.5,0.5 0 0,0 11,20.5A0.5,0.5 0 0,0 11.5,21A0.5,0.5 0 0,0 12,20.5A0.5,0.5 0 0,0 11.5,20M15.5,20A0.5,0.5 0 0,0 15,20.5A0.5,0.5 0 0,0 15.5,21A0.5,0.5 0 0,0 16,20.5A0.5,0.5 0 0,0 15.5,20M13,20V21H14V20H13M11,12V19H16V12H11Z"
                ></path></svg></span
            ><span class="grow text-gray-300">Responsive</span
            ><!--v-if--></a
          ><!--v-if-->
        </li>
        <li>
          <a
            class="flex cursor-pointer dark:hover:bg-gray-700/50 hover:bg-gray-600 hover:bg-opacity-50 py-2"
            ><span
              class="inline-flex justify-center items-center w-12 h-6 flex-none text-gray-300"
              ><svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                class="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z"
                ></path></svg></span
            ><span class="grow text-gray-300">Styles</span
            ><!--v-if--></a
          ><!--v-if-->
        </li>
        <li>
          <a
            class="flex cursor-pointer dark:hover:bg-gray-700/50 hover:bg-gray-600 hover:bg-opacity-50 py-2"
            ><span
              class="inline-flex justify-center items-center w-12 h-6 flex-none text-gray-300"
              ><svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                class="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"
                ></path></svg></span
            ><span class="grow text-gray-300">Profile</span
            ><!--v-if--></a
          ><!--v-if-->
        </li>
        <li>
          <a
            class="flex cursor-pointer dark:hover:bg-gray-700/50 hover:bg-gray-600 hover:bg-opacity-50 py-2"
            ><span
              class="inline-flex justify-center items-center w-12 h-6 flex-none text-gray-300"
              ><svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                class="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"
                ></path></svg></span
            ><span class="grow text-gray-300">Login</span
            ><!--v-if--></a
          ><!--v-if-->
        </li>
        <li>
          <a
            class="flex cursor-pointer dark:hover:bg-gray-700/50 hover:bg-gray-600 hover:bg-opacity-50 py-2"
            ><span
              class="inline-flex justify-center items-center w-12 h-6 flex-none text-gray-300"
              ><svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                class="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                ></path></svg></span
            ><span class="grow text-gray-300">Error</span
            ><!--v-if--></a
          ><!--v-if-->
        </li>
        <li>
          <a
            class="flex cursor-pointer dark:hover:bg-gray-700/50 hover:bg-gray-600 hover:bg-opacity-50 py-2"
            ><span
              class="inline-flex justify-center items-center w-12 h-6 flex-none text-gray-300"
              ><svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                class="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M9,5V9H21V5M9,19H21V15H9M9,14H21V10H9M4,9H8V5H4M4,19H8V15H4M4,14H8V10H4V14Z"
                ></path></svg></span
            ><span class="grow text-gray-300">Submenus</span
            ><span
              class="inline-flex justify-center items-center w-12 h-6 flex-none text-gray-300"
              ><svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                class="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                ></path></svg></span
          ></a>
          <ul class="bg-gray-700 bg-opacity-50 hidden">
            <li>
              <a
                class="flex cursor-pointer dark:hover:bg-gray-700/50 hover:bg-gray-600 hover:bg-opacity-50 p-3 text-sm"
                ><!--v-if--><span class="grow text-gray-300">Sub-item One</span
                ><!--v-if--></a
              ><!--v-if-->
            </li>
            <li>
              <a
                class="flex cursor-pointer dark:hover:bg-gray-700/50 hover:bg-gray-600 hover:bg-opacity-50 p-3 text-sm"
                ><!--v-if--><span class="grow text-gray-300">Sub-item Two</span
                ><!--v-if--></a
              ><!--v-if-->
            </li>
          </ul>
        </li>
      </ul>
      <p class="p-3 text-xs uppercase text-gray-400">About</p>
      <ul>
        <li>
          <a
            href="https://justboil.me/tailwind-admin-templates/vue-dashboard/"
            target="_blank"
            class="flex cursor-pointer dark:hover:bg-gray-700/50 hover:bg-gray-600 hover:bg-opacity-50 py-2"
            ><span
              class="inline-flex justify-center items-center w-12 h-6 flex-none text-gray-300"
              ><svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                class="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M21 16H3V4H21M21 2H3C1.89 2 1 2.89 1 4V16C1 17.11 1.9 18 3 18H10V20H8V22H16V20H14V18H21C22.11 18 23 17.11 23 16V4C23 2.89 22.1 2 21 2M15 5.5L14.38 6.87L13 7.5L14.38 8.13L15 9.5L15.63 8.13L17 7.5L15.63 6.87L15 5.5M10.5 7.5L9.41 9.91L7 11L9.41 12.09L10.5 14.5L11.6 12.09L14 11L11.6 9.91L10.5 7.5"
                ></path></svg></span
            ><span class="grow text-gray-300">Premium version</span
            ><!--v-if--></a
          ><!--v-if-->
        </li>
        <li>
          <a
            href="https://github.com/justboil/admin-one-vue-tailwind"
            target="_blank"
            class="flex cursor-pointer dark:hover:bg-gray-700/50 hover:bg-gray-600 hover:bg-opacity-50 py-2"
            ><span
              class="inline-flex justify-center items-center w-12 h-6 flex-none text-gray-300"
              ><svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                class="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                ></path></svg></span
            ><span class="grow text-gray-300">GitHub</span
            ><!--v-if--></a
          ><!--v-if-->
        </li>
      </ul>
    </div>
  </aside>
</template>
