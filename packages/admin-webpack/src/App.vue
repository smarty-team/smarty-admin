<template lang="">
    <div>
        <h1>{{ msg }}</h1>
    </div>
</template>
<script lang="ts" setup>

import { defineComponent, ref, Ref } from "vue"
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

const msg = ref(1)

</script>

<style scoped>
h1 {
    color: blue;
}
</style>
    