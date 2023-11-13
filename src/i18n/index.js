import { createI18n } from "vue-i18n"

import en from "./locales/en.json"
import ar from "./locales/ar.json"
// remove ru.json import!
export default createI18n({
  locale: localStorage.getItem("user-locale") ? localStorage.getItem("user-locale") : "en",
  fallbackLocale: localStorage.getItem("user-locale") ? localStorage.getItem("user-locale") : "ar",
  legacy: false,
  globalInjection: true,
  messages: { en,ar }, // <--- use only the English messages

})