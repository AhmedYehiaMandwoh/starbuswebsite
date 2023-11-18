import { createI18n } from "vue-i18n"

import en from "./locales/en.json"
import ar from "./locales/ar.json"
// remove ru.json import!



export default createI18n({
  locale: localStorage.getItem("userLocale") ? localStorage.getItem("userLocale") : "en",
  fallbackLocale: localStorage.getItem("userLocale") ? localStorage.getItem("userLocale") : "ar",
  legacy: false,
  globalInjection: true,
  messages: { en, ar }, // <--- use only the English messages

})