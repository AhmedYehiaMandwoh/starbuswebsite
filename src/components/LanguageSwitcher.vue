<template>
    <select @change="switchLanguage" class="langSel form--control">
        <option v-for="sLocale in supportedLocales" :key="`locale-${sLocale}`" :value="sLocale"
            :selected="locale === sLocale">
            {{ t(`locale.${sLocale}`) }}
        </option>
    </select>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { useRouter } from "vue-router" // <--- 1
import Tr from "@/i18n/translation"
export default {
    setup() {
        const { t, locale } = useI18n()
        const supportedLocales = Tr.supportedLocales
        const router = useRouter()  // <--- 2
        const switchLanguage = async (event) => {
            const newLocale = event.target.value
            await Tr.switchLanguage(newLocale)
            try {
                await router.replace({ params: { locale: newLocale } })  // <--- 3
            } catch (e) {  // <--- 4
                console.log(e)

            }
            window.location.reload()

        }
        
        return { t, locale, supportedLocales, switchLanguage }
        
    }
}
</script>