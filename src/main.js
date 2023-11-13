import '@/assets/templates/basic/css/bootstrap.min.css'
import '@/assets/global/css/all.min.css'
import '@/assets/global/css/line-awesome.min.css'
import '@/assets/templates/basic/css/flaticon.css'
import '@/assets/templates/basic/css/slick.css'
import '@/assets/global/css/select2.min.css'
import '@/assets/templates/basic/css/jquery-ui.css'
import '@/assets/templates/basic/css/cookie.css'
import '@/assets/templates/basic/css/main.css'
import '@/assets/templates/basic/css/custom.css'
import '@/assets/global/css/iziToast.min.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from "./i18n" // <--- 2
const app = createApp(App)

import '@/assets/global/js/jquery-3.6.0.min.js'
import '@/assets/templates/basic/js/jquery-ui.min.js'
import '@/assets/templates/basic/js/bootstrap.min.js'
import '@/assets/templates/basic/js/slick.min.js'
import '@/assets/global/js/select2.min.js'
import '@/assets/templates/basic/js/main.js'
app.use(router)
app.use(i18n)
app.mount('#app')
