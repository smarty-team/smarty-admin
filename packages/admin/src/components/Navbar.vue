<template>
  <nav
    class="top-0 left-0 right-0 fixed flex bg-white h-14 border-b z-30 w-screen transition-position xl:pl-60 lg:w-auto lg:items-stretch dark:bg-gray-900 dark:border-gray-800 border-gray-100"
    style=""
  >
    <div class="flex-1 items-stretch flex h-14">
      <div
        class="flex lg:hidden items-center grow-0 shrink-0 relative cursor-pointer text-blue-600 dark:text-white dark:hover:text-gray-400 hover:text-black py-2 px-3"
      >
        <span class="inline-flex justify-center items-center w-6 h-6"
          ><svg viewBox="0 0 24 24" width="24" height="24" class="inline-block">
            <path
              fill="currentColor"
              d="M19,13H3V11H19L15,7L16.4,5.6L22.8,12L16.4,18.4L15,17L19,13M3,6H13V8H3V6M13,16V18H3V16H13Z"
            ></path></svg
        ></span>
      </div>
      <div
        class="hidden lg:flex xl:hidden items-center grow-0 shrink-0 relative cursor-pointer text-blue-600 dark:text-white dark:hover:text-gray-400 hover:text-black py-2 px-3"
      >
        <span class="inline-flex justify-center items-center w-6 h-6"
          ><svg viewBox="0 0 24 24" width="24" height="24" class="inline-block">
            <path
              fill="currentColor"
              d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
            ></path></svg
        ></span>
      </div>
      <div
        class="flex items-center grow-0 shrink-0 relative cursor-pointer text-blue-600 dark:text-white dark:hover:text-gray-400 hover:text-black py-2 px-3"
      >
        <div class="relative">
          <input
            placeholder="Search (ctrl+k)"
            type="text"
            class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border-0 bg-transparent"
          /><!--v-if-->
        </div>
      </div>
    </div>
    <div class="flex-none items-stretch flex h-14 lg:hidden">
      <div
        class="flex items-center grow-0 shrink-0 relative cursor-pointer text-blue-600 dark:text-white dark:hover:text-gray-400 hover:text-black py-2 px-3"
      >
        <span class="inline-flex justify-center items-center w-6 h-6"
          ><svg viewBox="0 0 24 24" width="24" height="24" class="inline-block">
            <path
              fill="currentColor"
              d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"
            ></path></svg
        ></span>
      </div>
    </div>
    <div
      class="absolute w-screen top-14 left-0 bg-white shadow lg:w-auto lg:items-stretch lg:flex lg:grow lg:static lg:border-b-0 lg:overflow-visible lg:shadow-none dark:bg-gray-900 hidden"
    >
      <div
        class="max-h-screen-menu overflow-y-auto lg:overflow-visible lg:flex lg:items-stretch lg:justify-end lg:ml-auto"
      >
        <div
          class="block items-center grow-0 shrink-0 relative cursor-pointer text-blue-600 dark:text-white dark:hover:text-gray-400 hover:text-black lg:flex p-0 lg:py-2 lg:px-3 lg:border-r border-gray-100 lg:dark:border-gray-800 dropdown"
        >
          <a
            class="flex items-center py-2 px-3 dark:bg-gray-800 lg:bg-transparent lg:dark:bg-transparent bg-gray-50"
            ><span
              class="inline-flex justify-center items-center w-6 h-6 transition-colors"
              ><svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                class="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
                ></path></svg></span
            ><span class="px-2 transition-colors">Sample menu</span
            ><span
              class="inline-flex justify-center items-center w-6 h-6 hidden lg:inline-flex transition-colors"
              ><svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                class="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                ></path></svg></span
          ></a>
          <div
            class="text-sm border-b lg:border-b-0 lg:border-gray-200 lg:border-t lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:shadow-md lg:rounded-b lg:dark:bg-gray-800 dark:border-gray-700 border-gray-100 lg:hidden"
          >
            <div
              class="flex items-center grow-0 shrink-0 relative cursor-pointer text-blue-600 dark:text-white dark:hover:text-gray-400 hover:text-black py-2 px-3"
            >
              <span
                class="inline-flex justify-center items-center w-6 h-6 transition-colors"
                ><svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  class="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"
                  ></path></svg></span
              ><span class="px-2 transition-colors">Item One</span>
            </div>
            <div
              class="flex items-center grow-0 shrink-0 relative cursor-pointer text-blue-600 dark:text-white dark:hover:text-gray-400 hover:text-black py-2 px-3"
            >
              <span
                class="inline-flex justify-center items-center w-6 h-6 transition-colors"
                ><svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  class="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03Z"
                  ></path></svg></span
              ><span class="px-2 transition-colors">Item Two</span>
            </div>
            <hr
              class="border-gray-100 hidden lg:block lg:my-0.5 dark:border-gray-700 border-t"
            />
            <div
              class="flex items-center grow-0 shrink-0 relative cursor-pointer text-blue-600 dark:text-white dark:hover:text-gray-400 hover:text-black py-2 px-3"
            >
              <span
                class="inline-flex justify-center items-center w-6 h-6 transition-colors"
                ><svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  class="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M7,17V1H5V5H1V7H5V17A2,2 0 0,0 7,19H17V23H19V19H23V17M17,15H19V7C19,5.89 18.1,5 17,5H9V7H17V15Z"
                  ></path></svg></span
              ><span class="px-2 transition-colors">Item Last</span>
            </div>
          </div>
        </div>
        <div
          class="block items-center grow-0 shrink-0 relative cursor-pointer text-blue-600 dark:text-white dark:hover:text-gray-400 hover:text-black lg:flex p-0 lg:py-2 lg:px-3 lg:border-r border-gray-100 lg:dark:border-gray-800 dropdown"
        >
          <a
            class="flex items-center py-2 px-3 dark:bg-gray-800 lg:bg-transparent lg:dark:bg-transparent bg-gray-50"
            ><div class="w-6 h-6 mr-3 inline-flex">
              <img
                src="https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&amp;options[accessoriesChance]=93"
                alt="John Doe"
                class="rounded-full block h-auto w-full max-w-full dark:bg-gray-800 bg-gray-100"
              />
            </div>
            <!--v-if--><span class="px-2 transition-colors">John Doe</span
            ><span
              class="inline-flex justify-center items-center w-6 h-6 hidden lg:inline-flex transition-colors"
              ><svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                class="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                ></path></svg></span
          ></a>
          <div
            class="text-sm border-b lg:border-b-0 lg:border-gray-200 lg:border-t lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:shadow-md lg:rounded-b lg:dark:bg-gray-800 dark:border-gray-700 border-gray-100 lg:hidden"
          >
            <a
              class="flex items-center grow-0 shrink-0 relative cursor-pointer text-blue-600 dark:text-white dark:hover:text-gray-400 hover:text-black py-2 px-3"
              ><span
                class="inline-flex justify-center items-center w-6 h-6 transition-colors"
                ><svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  class="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
                  ></path></svg></span
              ><span class="px-2 transition-colors">My Profile</span></a
            >
            <div
              class="flex items-center grow-0 shrink-0 relative cursor-pointer text-blue-600 dark:text-white dark:hover:text-gray-400 hover:text-black py-2 px-3"
            >
              <span
                class="inline-flex justify-center items-center w-6 h-6 transition-colors"
                ><svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  class="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z"
                  ></path></svg></span
              ><span class="px-2 transition-colors">Settings</span>
            </div>
            <div
              class="flex items-center grow-0 shrink-0 relative cursor-pointer text-blue-600 dark:text-white dark:hover:text-gray-400 hover:text-black py-2 px-3"
            >
              <span
                class="inline-flex justify-center items-center w-6 h-6 transition-colors"
                ><svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  class="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
                  ></path></svg></span
              ><span class="px-2 transition-colors">Messages</span>
            </div>
            <hr
              class="border-gray-100 hidden lg:block lg:my-0.5 dark:border-gray-700 border-t"
            />
            <div
              class="flex items-center grow-0 shrink-0 relative cursor-pointer text-blue-600 dark:text-white dark:hover:text-gray-400 hover:text-black py-2 px-3"
            >
              <span
                class="inline-flex justify-center items-center w-6 h-6 transition-colors"
                ><svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  class="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z"
                  ></path></svg></span
              ><span class="px-2 transition-colors">Log Out</span>
            </div>
          </div>
        </div>
        <div
          class="flex items-center grow-0 shrink-0 relative cursor-pointer text-blue-600 dark:text-white dark:hover:text-gray-400 hover:text-black py-2 px-3 lg:border-r border-gray-100 lg:dark:border-gray-800 lg:w-16 lg:justify-center"
        >
          <span
            class="inline-flex justify-center items-center w-6 h-6 transition-colors"
            ><svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              class="inline-block"
            >
              <path
                fill="currentColor"
                d="M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z"
              ></path></svg></span
          ><span class="px-2 transition-colors lg:hidden">Light/Dark</span>
        </div>
        <a
          class="flex items-center grow-0 shrink-0 relative cursor-pointer text-blue-600 dark:text-white dark:hover:text-gray-400 hover:text-black py-2 px-3 lg:border-r border-gray-100 lg:dark:border-gray-800 lg:w-16 lg:justify-center"
          href="https://github.com/justboil/admin-one-vue-tailwind"
          ><span
            class="inline-flex justify-center items-center w-6 h-6 transition-colors"
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
          ><span class="px-2 transition-colors lg:hidden">GitHub</span></a
        >
        <div
          class="flex items-center grow-0 shrink-0 relative cursor-pointer text-blue-600 dark:text-white dark:hover:text-gray-400 hover:text-black py-2 px-3 lg:w-16 lg:justify-center"
        >
          <span
            class="inline-flex justify-center items-center w-6 h-6 transition-colors"
            ><svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              class="inline-block"
            >
              <path
                fill="currentColor"
                d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z"
              ></path></svg></span
          ><span class="px-2 transition-colors lg:hidden">Log out</span>
        </div>
      </div>
    </div>
  </nav>
</template>
