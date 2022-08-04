<template>



    <!-- response table -->
    <section class="px-0 md:px-6 py-6">

        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
            <div class="md:rounded border-gray-100 dark:bg-gray-900/70 bg-white border dark:border-gray-800 shadow">
                <!--v-if-->
                <div class="p-6">
                    <div class="justify-between items-center flex mb-3">
                        <div class="flex shrink-0 grow-0 items-center justify-center">
                            <div
                                class="inline-flex items-center last:mr-0 capitalize border py-0.5 px-2 text-xs rounded-lg mr-1.5 bg-emerald-600 text-white border-emerald-700">
                                <span class="inline-flex justify-center items-center w-4 h-4 mr-2"><svg
                                        viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                        <path fill="currentColor"
                                            d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z">
                                        </path>
                                    </svg></span><span>12%</span>
                            </div>
                        </div>
                        <div class="flex shrink-0 grow-0 items-center justify-center">
                            <button
                                class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-1 bg-gray-100 text-black border-gray-200 dark:border-gray-400 hover:bg-gray-200"
                                type="button" icon-w="w-4" icon-h="h-4">
                                <span class="inline-flex justify-center items-center w-6 h-6"><svg viewBox="0 0 24 24"
                                        width="16" height="16" class="inline-block">
                                        <path fill="currentColor"
                                            d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z">
                                        </path>
                                    </svg></span>
                                <!--v-if-->
                            </button>
                        </div>
                    </div>
                    <div class="justify-between items-center flex">
                        <div class="flex shrink-0 grow-0 items-center justify-center">
                            <div>
                                <h3 class="text-lg leading-tight text-gray-500 dark:text-gray-400">
                                    Clients
                                </h3>
                                <h1 class="text-3xl leading-tight font-semibold">
                                    <div>512</div>
                                </h1>
                            </div>
                        </div>
                        <div class="flex shrink-0 grow-0 items-center justify-center">
                            <span class="inline-flex justify-center items-center h-16 text-emerald-500"><svg
                                    viewBox="0 0 24 24" width="48" height="48" class="inline-block">
                                    <path fill="currentColor"
                                        d="M16 17V19H2V17S2 13 9 13 16 17 16 17M12.5 7.5A3.5 3.5 0 1 0 9 11A3.5 3.5 0 0 0 12.5 7.5M15.94 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13M15 4A3.39 3.39 0 0 0 13.07 4.59A5 5 0 0 1 13.07 10.41A3.39 3.39 0 0 0 15 11A3.5 3.5 0 0 0 15 4Z">
                                    </path>
                                </svg></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:rounded border-gray-100 dark:bg-gray-900/70 bg-white border dark:border-gray-800 shadow">
                <!--v-if-->
                <div class="p-6">
                    <div class="justify-between items-center flex mb-3">
                        <div class="flex shrink-0 grow-0 items-center justify-center">
                            <div
                                class="inline-flex items-center last:mr-0 capitalize border py-0.5 px-2 text-xs rounded-lg mr-1.5 bg-red-600 text-white border-red-700">
                                <span class="inline-flex justify-center items-center w-4 h-4 mr-2"><svg
                                        viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                        <path fill="currentColor"
                                            d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
                                    </svg></span><span>12%</span>
                            </div>
                        </div>
                        <div class="flex shrink-0 grow-0 items-center justify-center">
                            <button
                                class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-1 bg-gray-100 text-black border-gray-200 dark:border-gray-400 hover:bg-gray-200"
                                type="button" icon-w="w-4" icon-h="h-4">
                                <span class="inline-flex justify-center items-center w-6 h-6"><svg viewBox="0 0 24 24"
                                        width="16" height="16" class="inline-block">
                                        <path fill="currentColor"
                                            d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z">
                                        </path>
                                    </svg></span>
                                <!--v-if-->
                            </button>
                        </div>
                    </div>
                    <div class="justify-between items-center flex">
                        <div class="flex shrink-0 grow-0 items-center justify-center">
                            <div>
                                <h3 class="text-lg leading-tight text-gray-500 dark:text-gray-400">
                                    Sales
                                </h3>
                                <h1 class="text-3xl leading-tight font-semibold">
                                    <div>$7,770</div>
                                </h1>
                            </div>
                        </div>
                        <div class="flex shrink-0 grow-0 items-center justify-center">
                            <span class="inline-flex justify-center items-center h-16 text-blue-500"><svg
                                    viewBox="0 0 24 24" width="48" height="48" class="inline-block">
                                    <path fill="currentColor"
                                        d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z">
                                    </path>
                                </svg></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:rounded border-gray-100 dark:bg-gray-900/70 bg-white border dark:border-gray-800 shadow">
                <!--v-if-->
                <div class="p-6">
                    <div class="justify-between items-center flex mb-3">
                        <div class="flex shrink-0 grow-0 items-center justify-center">
                            <div
                                class="inline-flex items-center last:mr-0 capitalize border py-0.5 px-2 text-xs rounded-lg mr-1.5 bg-yellow-600 text-white border-yellow-700">
                                <span class="inline-flex justify-center items-center w-4 h-4 mr-2"><svg
                                        viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                        <path fill="currentColor"
                                            d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z">
                                        </path>
                                    </svg></span><span>Overflow</span>
                            </div>
                        </div>
                        <div class="flex shrink-0 grow-0 items-center justify-center">
                            <button
                                class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-1 bg-gray-100 text-black border-gray-200 dark:border-gray-400 hover:bg-gray-200"
                                type="button" icon-w="w-4" icon-h="h-4">
                                <span class="inline-flex justify-center items-center w-6 h-6"><svg viewBox="0 0 24 24"
                                        width="16" height="16" class="inline-block">
                                        <path fill="currentColor"
                                            d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z">
                                        </path>
                                    </svg></span>
                                <!--v-if-->
                            </button>
                        </div>
                    </div>
                    <div class="justify-between items-center flex">
                        <div class="flex shrink-0 grow-0 items-center justify-center">
                            <div>
                                <h3 class="text-lg leading-tight text-gray-500 dark:text-gray-400">
                                    Performance
                                </h3>
                                <h1 class="text-3xl leading-tight font-semibold">
                                    <div>256%</div>
                                </h1>
                            </div>
                        </div>
                        <div class="flex shrink-0 grow-0 items-center justify-center">
                            <span class="inline-flex justify-center items-center h-16 text-red-500"><svg
                                    viewBox="0 0 24 24" width="48" height="48" class="inline-block">
                                    <path fill="currentColor"
                                        d="M3,14L3.5,14.07L8.07,9.5C7.89,8.85 8.06,8.11 8.59,7.59C9.37,6.8 10.63,6.8 11.41,7.59C11.94,8.11 12.11,8.85 11.93,9.5L14.5,12.07L15,12C15.18,12 15.35,12 15.5,12.07L19.07,8.5C19,8.35 19,8.18 19,8A2,2 0 0,1 21,6A2,2 0 0,1 23,8A2,2 0 0,1 21,10C20.82,10 20.65,10 20.5,9.93L16.93,13.5C17,13.65 17,13.82 17,14A2,2 0 0,1 15,16A2,2 0 0,1 13,14L13.07,13.5L10.5,10.93C10.18,11 9.82,11 9.5,10.93L4.93,15.5L5,16A2,2 0 0,1 3,18A2,2 0 0,1 1,16A2,2 0 0,1 3,14Z">
                                    </path>
                                </svg></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
            <div class="flex flex-col justify-between">
                <div
                    class="md:rounded border-gray-100 dark:bg-gray-900/70 hover:shadow-lg transition-shadow duration-500 bg-white border dark:border-gray-800 mb-6 last:mb-0">
                    <!--v-if-->
                    <div class="p-6">
                        <div class="justify-between items-center block md:flex">
                            <div class="flex shrink-0 grow-0 items-center justify-center mb-6 md:mb-0">
                                <div class="justify-start items-center block md:flex">
                                    <div class="flex shrink-0 grow-0 items-center justify-center mb-6 md:mb-0">
                                        <span
                                            class="inline-flex justify-center items-center w-12 h-12 rounded-full text-emerald-600 bg-gray-100 dark:bg-gray-800 md:mr-6"><svg
                                                viewBox="0 0 24 24" width="24" height="24" class="inline-block">
                                                <path fill="currentColor"
                                                    d="M15 15V17H18V20H20V17H23V15H20V12H18V15M14.97 11.61C14.85 10.28 13.59 8.97 12 9C10.3 9.03 9 10.3 9 12C9 13.7 10.3 14.94 12 15C12.38 15 12.77 14.92 13.14 14.77C13.41 13.67 13.86 12.63 14.97 11.61M13 16H7C7 14.9 6.11 14 5 14V10C6.11 10 7 9.11 7 8H17C17 9.11 17.9 10 19 10V10.06C19.67 10.06 20.34 10.18 21 10.4V6H3V18H13.32C13.1 17.33 13 16.66 13 16Z">
                                                </path>
                                            </svg></span>
                                    </div>
                                    <div class="flex shrink-0 grow-0 items-center justify-center">
                                        <div class="text-center space-y-1 md:text-left md:mr-6">
                                            <h4 class="text-xl">$375.53</h4>
                                            <p class="text-gray-500 dark:text-gray-400">
                                                <b>3 days ago</b> via Turcotte
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex shrink-0 grow-0 items-center justify-center">
                                <div class="text-center md:text-right space-y-1">
                                    <p>Home Loan Account</p>
                                    <div>
                                        <div
                                            class="inline-flex items-center last:mr-0 capitalize border py-0.5 px-2 text-xs rounded-lg mr-1.5 bg-blue-600 text-white border-blue-700">
                                            <!--v-if--><span>45721474</span>
                                        </div>
                                        <div
                                            class="inline-flex items-center last:mr-0 capitalize border py-0.5 px-2 text-xs rounded-lg mr-1.5 bg-emerald-600 text-white border-emerald-700">
                                            <!--v-if--><span>deposit</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="md:rounded border-gray-100 dark:bg-gray-900/70 hover:shadow-lg transition-shadow duration-500 bg-white border dark:border-gray-800 mb-6 last:mb-0">
                    <!--v-if-->
                    <div class="p-6">
                        <div class="justify-between items-center block md:flex">
                            <div class="flex shrink-0 grow-0 items-center justify-center mb-6 md:mb-0">
                                <div class="justify-start items-center block md:flex">
                                    <div class="flex shrink-0 grow-0 items-center justify-center mb-6 md:mb-0">
                                        <span
                                            class="inline-flex justify-center items-center w-12 h-12 rounded-full text-blue-600 bg-gray-100 dark:bg-gray-800 md:mr-6"><svg
                                                viewBox="0 0 24 24" width="24" height="24" class="inline-block">
                                                <path fill="currentColor"
                                                    d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z">
                                                </path>
                                            </svg></span>
                                    </div>
                                    <div class="flex shrink-0 grow-0 items-center justify-center">
                                        <div class="text-center space-y-1 md:text-left md:mr-6">
                                            <h4 class="text-xl">$470.26</h4>
                                            <p class="text-gray-500 dark:text-gray-400">
                                                <b>3 days ago</b> via Murazik - Graham
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex shrink-0 grow-0 items-center justify-center">
                                <div class="text-center md:text-right space-y-1">
                                    <p>Savings Account</p>
                                    <div>
                                        <div
                                            class="inline-flex items-center last:mr-0 capitalize border py-0.5 px-2 text-xs rounded-lg mr-1.5 bg-blue-600 text-white border-blue-700">
                                            <!--v-if--><span>94486537</span>
                                        </div>
                                        <div
                                            class="inline-flex items-center last:mr-0 capitalize border py-0.5 px-2 text-xs rounded-lg mr-1.5 bg-blue-600 text-white border-blue-700">
                                            <!--v-if--><span>payment</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="md:rounded border-gray-100 dark:bg-gray-900/70 hover:shadow-lg transition-shadow duration-500 bg-white border dark:border-gray-800 mb-6 last:mb-0">
                    <!--v-if-->
                    <div class="p-6">
                        <div class="justify-between items-center block md:flex">
                            <div class="flex shrink-0 grow-0 items-center justify-center mb-6 md:mb-0">
                                <div class="justify-start items-center block md:flex">
                                    <div class="flex shrink-0 grow-0 items-center justify-center mb-6 md:mb-0">
                                        <span
                                            class="inline-flex justify-center items-center w-12 h-12 rounded-full text-yellow-600 bg-gray-100 dark:bg-gray-800 md:mr-6"><svg
                                                viewBox="0 0 24 24" width="24" height="24" class="inline-block">
                                                <path fill="currentColor"
                                                    d="M3,22L4.5,20.5L6,22L7.5,20.5L9,22L10.5,20.5L12,22L13.5,20.5L15,22L16.5,20.5L18,22L19.5,20.5L21,22V2L19.5,3.5L18,2L16.5,3.5L15,2L13.5,3.5L12,2L10.5,3.5L9,2L7.5,3.5L6,2L4.5,3.5L3,2M18,9H6V7H18M18,13H6V11H18M18,17H6V15H18V17Z">
                                                </path>
                                            </svg></span>
                                    </div>
                                    <div class="flex shrink-0 grow-0 items-center justify-center">
                                        <div class="text-center space-y-1 md:text-left md:mr-6">
                                            <h4 class="text-xl">$971.34</h4>
                                            <p class="text-gray-500 dark:text-gray-400">
                                                <b>5 days ago</b> via Fahey - Keebler
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex shrink-0 grow-0 items-center justify-center">
                                <div class="text-center md:text-right space-y-1">
                                    <p>Checking Account</p>
                                    <div>
                                        <div
                                            class="inline-flex items-center last:mr-0 capitalize border py-0.5 px-2 text-xs rounded-lg mr-1.5 bg-blue-600 text-white border-blue-700">
                                            <!--v-if--><span>63189893</span>
                                        </div>
                                        <div
                                            class="inline-flex items-center last:mr-0 capitalize border py-0.5 px-2 text-xs rounded-lg mr-1.5 bg-yellow-600 text-white border-yellow-700">
                                            <!--v-if--><span>invoice</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-between">
                <div
                    class="md:rounded border-gray-100 dark:bg-gray-900/70 hover:shadow-lg transition-shadow duration-500 bg-white border dark:border-gray-800 mb-6 last:mb-0">
                    <!--v-if-->
                    <div class="p-6">
                        <div class="justify-between items-center block md:flex">
                            <div class="flex shrink-0 grow-0 items-center justify-center mb-6 md:mb-0">
                                <div class="justify-start items-center block md:flex">
                                    <div class="flex shrink-0 grow-0 items-center justify-center mb-6 md:mb-0">
                                        <div class="w-12 h-12 md:mr-6">
                                            <img src="https://avatars.dicebear.com/api/avataaars/Howell-Hand.svg"
                                                alt="Howell Hand"
                                                class="rounded-full block h-auto w-full max-w-full dark:bg-gray-800 bg-gray-100" />
                                        </div>
                                    </div>
                                    <div class="flex shrink-0 grow-0 items-center justify-center">
                                        <div class="text-center md:text-left">
                                            <h4 class="text-xl">
                                                Howell Hand
                                                <span class="text-gray-500 dark:text-gray-400">@percy64</span>
                                            </h4>
                                            <p class="text-gray-500 dark:text-gray-400">
                                                Mar 3, 2021
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex shrink-0 grow-0 items-center justify-center">
                                <div
                                    class="inline-flex items-center last:mr-0 capitalize border py-2 px-4 rounded-2xl mr-3 bg-emerald-600 text-white border-emerald-700">
                                    <span class="inline-flex justify-center items-center w-4 h-4 mr-2"><svg
                                            viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                            <path fill="currentColor"
                                                d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z">
                                            </path>
                                        </svg></span><span>70%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="md:rounded border-gray-100 dark:bg-gray-900/70 hover:shadow-lg transition-shadow duration-500 bg-white border dark:border-gray-800 mb-6 last:mb-0">
                    <!--v-if-->
                    <div class="p-6">
                        <div class="justify-between items-center block md:flex">
                            <div class="flex shrink-0 grow-0 items-center justify-center mb-6 md:mb-0">
                                <div class="justify-start items-center block md:flex">
                                    <div class="flex shrink-0 grow-0 items-center justify-center mb-6 md:mb-0">
                                        <div class="w-12 h-12 md:mr-6">
                                            <img src="https://avatars.dicebear.com/api/avataaars/Hope-Howe.svg"
                                                alt="Hope Howe"
                                                class="rounded-full block h-auto w-full max-w-full dark:bg-gray-800 bg-gray-100" />
                                        </div>
                                    </div>
                                    <div class="flex shrink-0 grow-0 items-center justify-center">
                                        <div class="text-center md:text-left">
                                            <h4 class="text-xl">
                                                Hope Howe
                                                <span class="text-gray-500 dark:text-gray-400">@dare.concepcion</span>
                                            </h4>
                                            <p class="text-gray-500 dark:text-gray-400">
                                                Dec 1, 2021
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex shrink-0 grow-0 items-center justify-center">
                                <div
                                    class="inline-flex items-center last:mr-0 capitalize border py-2 px-4 rounded-2xl mr-3 bg-emerald-600 text-white border-emerald-700">
                                    <span class="inline-flex justify-center items-center w-4 h-4 mr-2"><svg
                                            viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                            <path fill="currentColor"
                                                d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z">
                                            </path>
                                        </svg></span><span>68%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="md:rounded border-gray-100 dark:bg-gray-900/70 hover:shadow-lg transition-shadow duration-500 bg-white border dark:border-gray-800 mb-6 last:mb-0">
                    <!--v-if-->
                    <div class="p-6">
                        <div class="justify-between items-center block md:flex">
                            <div class="flex shrink-0 grow-0 items-center justify-center mb-6 md:mb-0">
                                <div class="justify-start items-center block md:flex">
                                    <div class="flex shrink-0 grow-0 items-center justify-center mb-6 md:mb-0">
                                        <div class="w-12 h-12 md:mr-6">
                                            <img src="https://avatars.dicebear.com/api/avataaars/Nelson-Jerde.svg"
                                                alt="Nelson Jerde"
                                                class="rounded-full block h-auto w-full max-w-full dark:bg-gray-800 bg-gray-100" />
                                        </div>
                                    </div>
                                    <div class="flex shrink-0 grow-0 items-center justify-center">
                                        <div class="text-center md:text-left">
                                            <h4 class="text-xl">
                                                Nelson Jerde
                                                <span class="text-gray-500 dark:text-gray-400">@geovanni.kessler</span>
                                            </h4>
                                            <p class="text-gray-500 dark:text-gray-400">
                                                May 18, 2021
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex shrink-0 grow-0 items-center justify-center">
                                <div
                                    class="inline-flex items-center last:mr-0 capitalize border py-2 px-4 rounded-2xl mr-3 bg-yellow-600 text-white border-yellow-700">
                                    <span class="inline-flex justify-center items-center w-4 h-4 mr-2"><svg
                                            viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                            <path fill="currentColor" d="M22,12L18,8V11H3V13H18V16L22,12Z"></path>
                                        </svg></span><span>49%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="px-6 sm:px-0 mb-6 flex items-center justify-between">
            <div class="flex items-center justify-start">
                <span class="inline-flex justify-center items-center w-6 h-6 mr-3"><svg viewBox="0 0 24 24" width="16"
                        height="16" class="inline-block">
                        <path fill="currentColor"
                            d="M16 17V19H2V17S2 13 9 13 16 17 16 17M12.5 7.5A3.5 3.5 0 1 0 9 11A3.5 3.5 0 0 0 12.5 7.5M15.94 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13M15 4A3.39 3.39 0 0 0 13.07 4.59A5 5 0 0 1 13.07 10.41A3.39 3.39 0 0 0 15 11A3.5 3.5 0 0 0 15 4Z">
                        </path>
                    </svg></span>
                <h1 class="text-2xl">Clients</h1>
            </div>
            <button
                class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-1 bg-white text-black border-gray-300 hover:bg-gray-50"
                type="button">
                <span class="inline-flex justify-center items-center w-6 h-6"><svg viewBox="0 0 24 24" width="16"
                        height="16" class="inline-block">
                        <path fill="currentColor"
                            d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z">
                        </path>
                    </svg></span>
                <!--v-if-->
            </button>
        </section>

        <div class="md:rounded border-gray-100 dark:bg-gray-900/70 bg-white border dark:border-gray-800">
            <header class="border-gray-100 flex items-stretch border-b dark:border-gray-800">
                <p class="flex items-center py-3 grow font-bold px-4">
                    <span class="inline-flex justify-center items-center w-6 h-6 mr-3"><svg viewBox="0 0 24 24"
                            width="16" height="16" class="inline-block">
                            <path fill="currentColor"
                                d="M23,11H18A1,1 0 0,0 17,12V21A1,1 0 0,0 18,22H23A1,1 0 0,0 24,21V12A1,1 0 0,0 23,11M23,20H18V13H23V20M20,2H2C0.89,2 0,2.89 0,4V16A2,2 0 0,0 2,18H9V20H7V22H15V20H13V18H15V16H2V4H20V9H22V4C22,2.89 21.1,2 20,2Z">
                            </path>
                        </svg></span>
                    Responsive table
                </p>
                <a href="#" class="flex items-center py-3 px-4 justify-center ring-blue-700 focus:ring"
                    aria-label="more options"><span class="inline-flex justify-center items-center w-6 h-6"><svg
                            viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                            <path fill="currentColor"
                                d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z">
                            </path>
                        </svg></span></a>
            </header>
            <div class="">
                <div class="flex items-center flex-col justify-center overflow-hidden fixed inset-0 z-50"
                    style="display: none">
                    <div
                        class="absolute inset-0 bg-gradient-to-tr opacity-90 dark:from-gray-700 dark:via-gray-900 dark:to-gray-700 from-white via-gray-100 to-white">
                    </div>
                    <div class="rounded-lg border-gray-100 dark:bg-gray-900 bg-white border dark:border-gray-800 shadow-lg w-full max-h-modal md:w-3/5 lg:w-2/5 z-50"
                        style="display: none">
                        <header class="border-gray-100 flex items-stretch border-b dark:border-gray-800">
                            <p class="flex items-center py-3 grow font-bold px-6">
                                <!--v-if-->
                                Sample modal
                            </p>
                            <a href="#" class="flex items-center py-3 px-4 justify-center ring-blue-700 focus:ring"
                                aria-label="more options"><span
                                    class="inline-flex justify-center items-center w-6 h-6"><svg viewBox="0 0 24 24"
                                        width="16" height="16" class="inline-block">
                                        <path fill="currentColor"
                                            d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z">
                                        </path>
                                    </svg></span></a>
                        </header>
                        <div class="p-6">
                            <div class="space-y-3">
                                <!--v-if-->
                                <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
                                <p>This is sample modal</p>
                            </div>
                            <hr class="border-gray-100 my-6 -mx-6 dark:border-gray-800 border-t" />
                            <div class="flex items-center justify-start flex-wrap -mb-3">
                                <button
                                    class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-2 bg-blue-600 text-white border-blue-700 hover:bg-blue-700 mr-3 last:mr-0 mb-3"
                                    type="button">
                                    <!--v-if--><span class="px-2">Done</span>
                                </button>
                                <!--v-if-->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-center flex-col justify-center overflow-hidden fixed inset-0 z-50"
                    style="display: none">
                    <div
                        class="absolute inset-0 bg-gradient-to-tr opacity-90 dark:from-gray-700 dark:via-gray-900 dark:to-gray-700 from-white via-gray-100 to-white">
                    </div>
                    <div class="rounded-lg border-gray-100 dark:bg-gray-900 bg-white border dark:border-gray-800 shadow-lg w-full max-h-modal md:w-3/5 lg:w-2/5 z-50"
                        style="display: none">
                        <!--v-if-->
                        <div class="p-6">
                            <div class="space-y-3">
                                <h1 class="text-2xl">Please confirm</h1>
                                <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
                                <p>This is sample modal</p>
                            </div>
                            <hr class="border-gray-100 my-6 -mx-6 dark:border-gray-800 border-t" />
                            <div class="flex items-center justify-start flex-wrap -mb-3">
                                <button
                                    class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-2 bg-red-600 text-white border-red-700 hover:bg-red-700 mr-3 last:mr-0 mb-3"
                                    type="button">
                                    <!--v-if--><span class="px-2">Done</span>
                                </button><button
                                    class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-2 text-red-600 border-red-700 hover:bg-red-700 hover:text-white mr-3 last:mr-0 mb-3"
                                    type="button">
                                    <!--v-if--><span class="px-2">Cancel</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!--v-if-->
                <table>
                    <thead>
                        <tr>
                            <!--v-if-->
                            <th></th>
                            <th>Name</th>
                            <th>Company</th>
                            <th>City</th>
                            <th>Progress</th>
                            <th>Created</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="lg:hover:bg-gray-100 lg:bg-gray-50">
                            <!--v-if-->
                            <td class="image-cell">
                                <div class="image">
                                    <img src="https://avatars.dicebear.com/api/avataaars/Howell-Hand.svg"
                                        alt="Howell Hand"
                                        class="rounded-full block h-auto w-full max-w-full dark:bg-gray-800 bg-gray-100" />
                                </div>
                            </td>
                            <td data-label="Name">Howell Hand</td>
                            <td data-label="Company">Kiehn-Green</td>
                            <td data-label="City">Emelyside</td>
                            <td data-label="Progress" class="progress-cell">
                                <progress max="100" value="70">70</progress>
                            </td>
                            <td data-label="Created">
                                <small class="text-gray-500 dark:text-gray-400" title="Mar 3, 2021">Mar 3, 2021</small>
                            </td>
                            <td class="actions-cell">
                                <div class="flex items-center justify-start lg:justify-end flex-nowrap -mb-3">
                                    <button
                                        class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-1 bg-blue-600 text-white border-blue-700 hover:bg-blue-700 mr-3 last:mr-0 mb-3"
                                        type="button">
                                        <span class="inline-flex justify-center items-center w-6 h-6"><svg
                                                viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                                <path fill="currentColor"
                                                    d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z">
                                                </path>
                                            </svg></span>
                                        <!--v-if-->
                                    </button><button
                                        class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-1 bg-red-600 text-white border-red-700 hover:bg-red-700 mr-3 last:mr-0 mb-3"
                                        type="button">
                                        <span class="inline-flex justify-center items-center w-6 h-6"><svg
                                                viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                                <path fill="currentColor"
                                                    d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z">
                                                </path>
                                            </svg></span>
                                        <!--v-if-->
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr class="lg:hover:bg-gray-100">
                            <!--v-if-->
                            <td class="image-cell">
                                <div class="image">
                                    <img src="https://avatars.dicebear.com/api/avataaars/Hope-Howe.svg" alt="Hope Howe"
                                        class="rounded-full block h-auto w-full max-w-full dark:bg-gray-800 bg-gray-100" />
                                </div>
                            </td>
                            <td data-label="Name">Hope Howe</td>
                            <td data-label="Company">Nolan Inc</td>
                            <td data-label="City">Paristown</td>
                            <td data-label="Progress" class="progress-cell">
                                <progress max="100" value="68">68</progress>
                            </td>
                            <td data-label="Created">
                                <small class="text-gray-500 dark:text-gray-400" title="Dec 1, 2021">Dec 1, 2021</small>
                            </td>
                            <td class="actions-cell">
                                <div class="flex items-center justify-start lg:justify-end flex-nowrap -mb-3">
                                    <button
                                        class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-1 bg-blue-600 text-white border-blue-700 hover:bg-blue-700 mr-3 last:mr-0 mb-3"
                                        type="button">
                                        <span class="inline-flex justify-center items-center w-6 h-6"><svg
                                                viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                                <path fill="currentColor"
                                                    d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z">
                                                </path>
                                            </svg></span>
                                        <!--v-if-->
                                    </button><button
                                        class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-1 bg-red-600 text-white border-red-700 hover:bg-red-700 mr-3 last:mr-0 mb-3"
                                        type="button">
                                        <span class="inline-flex justify-center items-center w-6 h-6"><svg
                                                viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                                <path fill="currentColor"
                                                    d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z">
                                                </path>
                                            </svg></span>
                                        <!--v-if-->
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr class="lg:hover:bg-gray-100 lg:bg-gray-50">
                            <!--v-if-->
                            <td class="image-cell">
                                <div class="image">
                                    <img src="https://avatars.dicebear.com/api/avataaars/Nelson-Jerde.svg"
                                        alt="Nelson Jerde"
                                        class="rounded-full block h-auto w-full max-w-full dark:bg-gray-800 bg-gray-100" />
                                </div>
                            </td>
                            <td data-label="Name">Nelson Jerde</td>
                            <td data-label="Company">Nitzsche LLC</td>
                            <td data-label="City">Jailynbury</td>
                            <td data-label="Progress" class="progress-cell">
                                <progress max="100" value="49">49</progress>
                            </td>
                            <td data-label="Created">
                                <small class="text-gray-500 dark:text-gray-400" title="May 18, 2021">May 18,
                                    2021</small>
                            </td>
                            <td class="actions-cell">
                                <div class="flex items-center justify-start lg:justify-end flex-nowrap -mb-3">
                                    <button
                                        class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-1 bg-blue-600 text-white border-blue-700 hover:bg-blue-700 mr-3 last:mr-0 mb-3"
                                        type="button">
                                        <span class="inline-flex justify-center items-center w-6 h-6"><svg
                                                viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                                <path fill="currentColor"
                                                    d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z">
                                                </path>
                                            </svg></span>
                                        <!--v-if-->
                                    </button><button
                                        class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-1 bg-red-600 text-white border-red-700 hover:bg-red-700 mr-3 last:mr-0 mb-3"
                                        type="button">
                                        <span class="inline-flex justify-center items-center w-6 h-6"><svg
                                                viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                                <path fill="currentColor"
                                                    d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z">
                                                </path>
                                            </svg></span>
                                        <!--v-if-->
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr class="lg:hover:bg-gray-100">
                            <!--v-if-->
                            <td class="image-cell">
                                <div class="image">
                                    <img src="https://avatars.dicebear.com/api/avataaars/Kim-Weimann.svg"
                                        alt="Kim Weimann"
                                        class="rounded-full block h-auto w-full max-w-full dark:bg-gray-800 bg-gray-100" />
                                </div>
                            </td>
                            <td data-label="Name">Kim Weimann</td>
                            <td data-label="Company">Brown-Lueilwitz</td>
                            <td data-label="City">New Emie</td>
                            <td data-label="Progress" class="progress-cell">
                                <progress max="100" value="38">38</progress>
                            </td>
                            <td data-label="Created">
                                <small class="text-gray-500 dark:text-gray-400" title="May 4, 2021">May 4, 2021</small>
                            </td>
                            <td class="actions-cell">
                                <div class="flex items-center justify-start lg:justify-end flex-nowrap -mb-3">
                                    <button
                                        class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-1 bg-blue-600 text-white border-blue-700 hover:bg-blue-700 mr-3 last:mr-0 mb-3"
                                        type="button">
                                        <span class="inline-flex justify-center items-center w-6 h-6"><svg
                                                viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                                <path fill="currentColor"
                                                    d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z">
                                                </path>
                                            </svg></span>
                                        <!--v-if-->
                                    </button><button
                                        class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-1 bg-red-600 text-white border-red-700 hover:bg-red-700 mr-3 last:mr-0 mb-3"
                                        type="button">
                                        <span class="inline-flex justify-center items-center w-6 h-6"><svg
                                                viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                                <path fill="currentColor"
                                                    d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z">
                                                </path>
                                            </svg></span>
                                        <!--v-if-->
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr class="lg:hover:bg-gray-100 lg:bg-gray-50">
                            <!--v-if-->
                            <td class="image-cell">
                                <div class="image">
                                    <img src="https://avatars.dicebear.com/api/avataaars/Justice-O'Reilly.svg"
                                        alt="Justice O'Reilly"
                                        class="rounded-full block h-auto w-full max-w-full dark:bg-gray-800 bg-gray-100" />
                                </div>
                            </td>
                            <td data-label="Name">Justice O'Reilly</td>
                            <td data-label="Company">Lakin-Muller</td>
                            <td data-label="City">New Kacie</td>
                            <td data-label="Progress" class="progress-cell">
                                <progress max="100" value="38">38</progress>
                            </td>
                            <td data-label="Created">
                                <small class="text-gray-500 dark:text-gray-400" title="Mar 27, 2021">Mar 27,
                                    2021</small>
                            </td>
                            <td class="actions-cell">
                                <div class="flex items-center justify-start lg:justify-end flex-nowrap -mb-3">
                                    <button
                                        class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-1 bg-blue-600 text-white border-blue-700 hover:bg-blue-700 mr-3 last:mr-0 mb-3"
                                        type="button">
                                        <span class="inline-flex justify-center items-center w-6 h-6"><svg
                                                viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                                <path fill="currentColor"
                                                    d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z">
                                                </path>
                                            </svg></span>
                                        <!--v-if-->
                                    </button><button
                                        class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-1 bg-red-600 text-white border-red-700 hover:bg-red-700 mr-3 last:mr-0 mb-3"
                                        type="button">
                                        <span class="inline-flex justify-center items-center w-6 h-6"><svg
                                                viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                                <path fill="currentColor"
                                                    d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z">
                                                </path>
                                            </svg></span>
                                        <!--v-if-->
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr class="lg:hover:bg-gray-100">
                            <!--v-if-->
                            <td class="image-cell">
                                <div class="image">
                                    <img src="https://avatars.dicebear.com/api/avataaars/Adrienne-Mayer III.svg"
                                        alt="Adrienne Mayer III"
                                        class="rounded-full block h-auto w-full max-w-full dark:bg-gray-800 bg-gray-100" />
                                </div>
                            </td>
                            <td data-label="Name">Adrienne Mayer III</td>
                            <td data-label="Company">Kozey, McLaughlin and Kuhn</td>
                            <td data-label="City">Howardbury</td>
                            <td data-label="Progress" class="progress-cell">
                                <progress max="100" value="39">39</progress>
                            </td>
                            <td data-label="Created">
                                <small class="text-gray-500 dark:text-gray-400" title="Mar 29, 2021">Mar 29,
                                    2021</small>
                            </td>
                            <td class="actions-cell">
                                <div class="flex items-center justify-start lg:justify-end flex-nowrap -mb-3">
                                    <button
                                        class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-1 bg-blue-600 text-white border-blue-700 hover:bg-blue-700 mr-3 last:mr-0 mb-3"
                                        type="button">
                                        <span class="inline-flex justify-center items-center w-6 h-6"><svg
                                                viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                                <path fill="currentColor"
                                                    d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z">
                                                </path>
                                            </svg></span>
                                        <!--v-if-->
                                    </button><button
                                        class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-1 bg-red-600 text-white border-red-700 hover:bg-red-700 mr-3 last:mr-0 mb-3"
                                        type="button">
                                        <span class="inline-flex justify-center items-center w-6 h-6"><svg
                                                viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                                <path fill="currentColor"
                                                    d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z">
                                                </path>
                                            </svg></span>
                                        <!--v-if-->
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr class="lg:hover:bg-gray-100 lg:bg-gray-50">
                            <!--v-if-->
                            <td class="image-cell">
                                <div class="image">
                                    <img src="https://avatars.dicebear.com/api/avataaars/Mr-Julien Ebert.svg"
                                        alt="Mr. Julien Ebert"
                                        class="rounded-full block h-auto w-full max-w-full dark:bg-gray-800 bg-gray-100" />
                                </div>
                            </td>
                            <td data-label="Name">Mr. Julien Ebert</td>
                            <td data-label="Company">Cormier LLC</td>
                            <td data-label="City">South Serenaburgh</td>
                            <td data-label="Progress" class="progress-cell">
                                <progress max="100" value="29">29</progress>
                            </td>
                            <td data-label="Created">
                                <small class="text-gray-500 dark:text-gray-400" title="Jun 25, 2021">Jun 25,
                                    2021</small>
                            </td>
                            <td class="actions-cell">
                                <div class="flex items-center justify-start lg:justify-end flex-nowrap -mb-3">
                                    <button
                                        class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-1 bg-blue-600 text-white border-blue-700 hover:bg-blue-700 mr-3 last:mr-0 mb-3"
                                        type="button">
                                        <span class="inline-flex justify-center items-center w-6 h-6"><svg
                                                viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                                <path fill="currentColor"
                                                    d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z">
                                                </path>
                                            </svg></span>
                                        <!--v-if-->
                                    </button><button
                                        class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-1 bg-red-600 text-white border-red-700 hover:bg-red-700 mr-3 last:mr-0 mb-3"
                                        type="button">
                                        <span class="inline-flex justify-center items-center w-6 h-6"><svg
                                                viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                                <path fill="currentColor"
                                                    d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z">
                                                </path>
                                            </svg></span>
                                        <!--v-if-->
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr class="lg:hover:bg-gray-100">
                            <!--v-if-->
                            <td class="image-cell">
                                <div class="image">
                                    <img src="https://avatars.dicebear.com/api/avataaars/Lenna-Smitham.svg"
                                        alt="Lenna Smitham"
                                        class="rounded-full block h-auto w-full max-w-full dark:bg-gray-800 bg-gray-100" />
                                </div>
                            </td>
                            <td data-label="Name">Lenna Smitham</td>
                            <td data-label="Company">King Inc</td>
                            <td data-label="City">McCulloughfort</td>
                            <td data-label="Progress" class="progress-cell">
                                <progress max="100" value="59">59</progress>
                            </td>
                            <td data-label="Created">
                                <small class="text-gray-500 dark:text-gray-400" title="Oct 8, 2021">Oct 8, 2021</small>
                            </td>
                            <td class="actions-cell">
                                <div class="flex items-center justify-start lg:justify-end flex-nowrap -mb-3">
                                    <button
                                        class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-1 bg-blue-600 text-white border-blue-700 hover:bg-blue-700 mr-3 last:mr-0 mb-3"
                                        type="button">
                                        <span class="inline-flex justify-center items-center w-6 h-6"><svg
                                                viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                                <path fill="currentColor"
                                                    d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z">
                                                </path>
                                            </svg></span>
                                        <!--v-if-->
                                    </button><button
                                        class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-1 bg-red-600 text-white border-red-700 hover:bg-red-700 mr-3 last:mr-0 mb-3"
                                        type="button">
                                        <span class="inline-flex justify-center items-center w-6 h-6"><svg
                                                viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                                <path fill="currentColor"
                                                    d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z">
                                                </path>
                                            </svg></span>
                                        <!--v-if-->
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr class="lg:hover:bg-gray-100 lg:bg-gray-50">
                            <!--v-if-->
                            <td class="image-cell">
                                <div class="image">
                                    <img src="https://avatars.dicebear.com/api/avataaars/Travis-Davis.svg"
                                        alt="Travis Davis"
                                        class="rounded-full block h-auto w-full max-w-full dark:bg-gray-800 bg-gray-100" />
                                </div>
                            </td>
                            <td data-label="Name">Travis Davis</td>
                            <td data-label="Company">Leannon and Sons</td>
                            <td data-label="City">West Frankton</td>
                            <td data-label="Progress" class="progress-cell">
                                <progress max="100" value="52">52</progress>
                            </td>
                            <td data-label="Created">
                                <small class="text-gray-500 dark:text-gray-400" title="Oct 20, 2021">Oct 20,
                                    2021</small>
                            </td>
                            <td class="actions-cell">
                                <div class="flex items-center justify-start lg:justify-end flex-nowrap -mb-3">
                                    <button
                                        class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-1 bg-blue-600 text-white border-blue-700 hover:bg-blue-700 mr-3 last:mr-0 mb-3"
                                        type="button">
                                        <span class="inline-flex justify-center items-center w-6 h-6"><svg
                                                viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                                <path fill="currentColor"
                                                    d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z">
                                                </path>
                                            </svg></span>
                                        <!--v-if-->
                                    </button><button
                                        class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-1 bg-red-600 text-white border-red-700 hover:bg-red-700 mr-3 last:mr-0 mb-3"
                                        type="button">
                                        <span class="inline-flex justify-center items-center w-6 h-6"><svg
                                                viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                                <path fill="currentColor"
                                                    d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z">
                                                </path>
                                            </svg></span>
                                        <!--v-if-->
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr class="lg:hover:bg-gray-100">
                            <!--v-if-->
                            <td class="image-cell">
                                <div class="image">
                                    <img src="https://avatars.dicebear.com/api/avataaars/Prof-Esteban Steuber.svg"
                                        alt="Prof. Esteban Steuber"
                                        class="rounded-full block h-auto w-full max-w-full dark:bg-gray-800 bg-gray-100" />
                                </div>
                            </td>
                            <td data-label="Name">Prof. Esteban Steuber</td>
                            <td data-label="Company">Langosh-Ernser</td>
                            <td data-label="City">East Sedrick</td>
                            <td data-label="Progress" class="progress-cell">
                                <progress max="100" value="34">34</progress>
                            </td>
                            <td data-label="Created">
                                <small class="text-gray-500 dark:text-gray-400" title="May 16, 2021">May 16,
                                    2021</small>
                            </td>
                            <td class="actions-cell">
                                <div class="flex items-center justify-start lg:justify-end flex-nowrap -mb-3">
                                    <button
                                        class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-1 bg-blue-600 text-white border-blue-700 hover:bg-blue-700 mr-3 last:mr-0 mb-3"
                                        type="button">
                                        <span class="inline-flex justify-center items-center w-6 h-6"><svg
                                                viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                                <path fill="currentColor"
                                                    d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z">
                                                </path>
                                            </svg></span>
                                        <!--v-if-->
                                    </button><button
                                        class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-1 bg-red-600 text-white border-red-700 hover:bg-red-700 mr-3 last:mr-0 mb-3"
                                        type="button">
                                        <span class="inline-flex justify-center items-center w-6 h-6"><svg
                                                viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                                <path fill="currentColor"
                                                    d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z">
                                                </path>
                                            </svg></span>
                                        <!--v-if-->
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="border-gray-100 p-3 lg:px-6 border-t dark:border-gray-800">
                    <div class="justify-between items-center block md:flex">
                        <div class="flex shrink-0 grow-0 items-center justify-center mb-6 md:mb-0">
                            <div class="flex items-center justify-start flex-wrap -mb-3">
                                <button
                                    class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring ring-black dark:ring-white p-1 bg-white text-black border-gray-300 hover:bg-gray-50 mr-3 last:mr-0 mb-3"
                                    type="button">
                                    <!--v-if--><span class="px-2">1</span>
                                </button><button
                                    class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-1 bg-white text-black border-gray-300 hover:bg-gray-50 mr-3 last:mr-0 mb-3"
                                    type="button">
                                    <!--v-if--><span class="px-2">2</span>
                                </button>
                            </div>
                        </div>
                        <div class="flex shrink-0 grow-0 items-center justify-center">
                            <small>Page 1 of 2</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>