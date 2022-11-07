<template>
    <div @click='toggleLocales()'>
        {{ t("language") }}
        <i class="i-fluent-local-language-zi-24-filled  p-3 mx-2"></i>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
    // change to some real logic
    const locales = availableLocales
    locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}

</script>