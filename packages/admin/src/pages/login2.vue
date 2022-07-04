<script setup lang="ts">

</script>

<template>
  <div class="relative flex h-screen w-full">
    <div class="h-full w-1/2 bg-black">
      <div class="mx-auto xl:w-1/2 flex h-full w-2/3 flex-col justify-center text-white">
        <div>
          <p class="text-2xl">Login|</p>
          <p>please login to continue|</p>
        </div>
        <div class="my-6">
          <button
            class="flex w-full justify-center rounded-3xl border-none bg-white p-2 text-black hover:bg-gray-200"><img
              src="https://freesvg.org/img/1534129544.png" class="mr-2 w-6 object-fill" />Sign in with Google</button>
        </div>
        <div>
          <fieldset class="border-t border-solid border-gray-600">
            <legend class="mx-auto px-2 text-center text-sm">Or login via our secure system</legend>
          </fieldset>
        </div>
        <div class="mt-10">
          <form>
            <div>
              <label class="mb-2.5 block font-extrabold" for="email">Email</label>
              <input type="email" id="email"
                class="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                placeholder="mail@user.com" />
            </div>
            <div class="mt-4">
              <label class="mb-2.5 block font-extrabold" for="email">Password</label>
              <input type="password" id="email"
                class="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow" />
            </div>
            <div class="mt-4 flex w-full justify-between">
              <!-- Remember me -->
              <div><input type="checkbox" id="remember" /><label for="remember" class="mx-2 text-sm">Remember me</label>
              </div>
              <!-- Forgot password -->
              <div>
                <a href="#" class="text-sm hover:text-gray-200">Forgot password</a>
              </div>
            </div>
            <div class="my-10">
              <button class="bg-orange-600 p-5 w-full rounded-full hover:bg-orange-800">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="h-full w-1/2 bg-blue-600">
      <img src="../assets/login/bg.png" class="h-full " />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: login
</route>