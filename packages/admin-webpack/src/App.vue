<template lang="">
    <!-- <div>
        <h1>{{ msg }}</h1>

        <button @click="user.add()">count: {{ user.count }}</button>
    </div> -->
    <router-view></router-view>
    
</template>
<script lang="ts" setup>

import { defineComponent, ref, Ref } from "vue"

import { useUserStore } from "./stores/user";
const user = useUserStore()

// export default defineComponent({
//     setup() {
//         // const msg: Ref<number> = ref(1)
//         const msg = ref(1)
//         setInterval(() => {
//             msg.value++
//         }, 1000)
//         return { msg }
//     }
// })

// const msg = ref(1)

</script>

<style scoped>
/* h1 {
    color: blue;
} */
</style>
    