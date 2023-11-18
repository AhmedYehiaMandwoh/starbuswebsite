import i18n from "@/i18n"

const Trans = {
    guessDefaultLocale() {
        const userPersistedLocale = Trans.getPersistedLocale()
        if(userPersistedLocale) {
          return userPersistedLocale
        }
        const userPreferredLocale = Trans.getUserLocale()
        if (Trans.isLocaleSupported(userPreferredLocale.locale)) {
          return userPreferredLocale.locale
        }
        if (Trans.isLocaleSupported(userPreferredLocale.localeNoRegion)) {
          return userPreferredLocale.localeNoRegion
        }
        
        return Trans.defaultLocale
      },
    isLocaleSupported(locale) { // <--- 1
        return Trans.supportedLocales.includes(locale)
    },
    getUserLocale() { // <--- 2
        const locale = window.navigator.language ||
            window.navigator.userLanguage ||
            Trans.defaultLocale
        return {
            locale: locale,
            localeNoRegion: locale.split('-')[0]
        }
    },

    getPersistedLocale() { // <--- 3
        const persistedLocale = localStorage.getItem("userLocale")
        if (Trans.isLocaleSupported(persistedLocale)) {
            return persistedLocale
        } else {
            return null
        }
    },
    get supportedLocales() {
        return import.meta.env.VITE_SUPPORTED_LOCALES.split(",")
    },

    set currentLocale(newLocale) { // <--- 2
        i18n.global.locale.value = newLocale
    },
    async switchLanguage(newLocale) { // <--- 3
        Trans.currentLocale = newLocale
        document.querySelector("html").setAttribute("lang", newLocale)
        localStorage.setItem("userLocale", newLocale)
        if(newLocale == 'ar') {
            localStorage.setItem("userDir", "rtl")
            
        }else{
            localStorage.setItem("userDir", "ltr")

        }
        if(localStorage.getItem("userDir") == 'rtl') {
            document.querySelector("html").setAttribute("dir", "rtl")
            
        }else{
            document.querySelector("html").setAttribute("dir", "ltr")

        }
    }, 
}
export default Trans

