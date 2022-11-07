<template>
    <section
        class="border-gray-100 bg-white border-t border-b p-6 dark:bg-gray-900/70 dark:border-gray-900 dark:text-white">
        <div class="justify-between items-center block md:flex">
            <div class="flex shrink-0 grow-0 items-center justify-center mb-6 md:mb-0">
                <h1 class="text-3xl font-semibold leading-tight">{{ t("dashboard") }}</h1>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

</script>