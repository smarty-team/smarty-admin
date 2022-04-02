<script setup lang="ts">

</script>

<template>
  <div>
    <section
      class="px-0 md:px-6 py-6 flex h-screen items-center justify-center bg-gradient-to-tr from-blue-400 to-red-500"
    >
      <form
        class="rounded-lg border-gray-100 dark:bg-gray-900/70 bg-white border dark:border-gray-800 w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl"
      >
        <!--v-if-->
        <div class="p-6">
          <div class="mb-6 last:mb-0">
            <label class="block font-bold mb-2">Login</label>
            <div class="">
              <div class="relative">
                <input
                  name="login"
                  autocomplete="username"
                  type="text"
                  class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border bg-white dark:bg-gray-800 pl-10"
                /><span
                  class="inline-flex justify-center items-center w-10 h-12 absolute top-0 left-0 z-10 pointer-events-none text-gray-500 dark:text-gray-400"
                  ><svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    class="inline-block"
                  >
                    <path
                      fill="currentColor"
                      d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
                    ></path></svg
                ></span>
              </div>
            </div>
            <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Please enter your login
            </div>
          </div>
          <div class="mb-6 last:mb-0">
            <label class="block font-bold mb-2">Password</label>
            <div class="">
              <div class="relative">
                <input
                  name="password"
                  autocomplete="current-password"
                  type="password"
                  class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border bg-white dark:bg-gray-800 pl-10"
                /><span
                  class="inline-flex justify-center items-center w-10 h-12 absolute top-0 left-0 z-10 pointer-events-none text-gray-500 dark:text-gray-400"
                  ><svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    class="inline-block"
                  >
                    <path
                      fill="currentColor"
                      d="M21 13H14.4L19.1 17.7L17.7 19.1L13 14.4V21H11V14.3L6.3 19L4.9 17.6L9.4 13H3V11H9.6L4.9 6.3L6.3 4.9L11 9.6V3H13V9.4L17.6 4.8L19 6.3L14.3 11H21V13Z"
                    ></path></svg
                ></span>
              </div>
            </div>
            <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Please enter your password
            </div>
          </div>
          <div class="flex justify-start flex-wrap -mb-3">
            <label class="checkbox mr-6 mb-3 last:mr-0"
              ><input type="checkbox" name="remember" value="remember" /><span
                class="check"
              ></span
              ><span class="control-label">Remember</span></label
            >
          </div>
          <hr
            class="border-gray-100 my-6 -mx-6 dark:border-gray-800 border-t"
          />
          <div class="flex items-center justify-start flex-wrap -mb-3">
            <button
              class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-2 bg-blue-600 text-white border-blue-700 hover:bg-blue-700 mr-3 last:mr-0 mb-3"
              type="submit"
            >
              <!--v-if--><span class="px-2">Login</span></button
            ><a
              class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-2 text-blue-600 border-blue-700 hover:bg-blue-700 hover:text-white mr-3 last:mr-0 mb-3"
              disabled="false"
              ><!--v-if--><span class="px-2">Back</span></a
            >
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<route lang="yaml">
meta:
  layout: login
</route>