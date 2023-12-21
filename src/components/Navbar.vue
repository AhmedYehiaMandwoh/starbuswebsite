

<template>
  <div class="header-bottom">
    <div class="container">
      <div class="header-bottom-area">

        <ul class="menu" id="menu_active">
          <li>
            <router-link to="/home">{{ t("header.home") }}</router-link>
          </li>
          <li>
            <router-link to="/home/about">{{ t("header.aboutStar") }}</router-link>
          </li>
          <li>
            <router-link to="/home/privacy">{{ t("header.Privacy_Refund") }}</router-link>
          </li>
          <li>
            <router-link to="/home/private">{{ t("header.private_trip") }}</router-link>
          </li>
          <li>
            <router-link to="/home/business">{{ t("header.business_trip") }}</router-link>
          </li>


          <li class="has-sub-menu" @click="openMenu('sub_menu')">
            <a href="javascript:;">{{ t("header.profile") }}</a>

            <ul class="sub-menu" id="sub_menu">
              <li>
                <router-link to="/home/dashboard">{{ t("header.dashboard") }}</router-link>

              </li>
              <li>
                <router-link to="/home/dashboard/mytickets">{{ t('header.my_tickets') }}</router-link>
              </li>
              <li>
                <router-link to="/home/dashboard/wallet">{{ t('header.wallet') }}</router-link>
              </li>
              <li>
                <router-link to="/home/dashboard/points">{{ t('header.points') }}</router-link>
              </li>
              <!-- <li>
                  <router-link to="/home/dashboard/profile">{{ t('header.my_account') }}</router-link>
                </li> -->

              <li>
                <router-link to="/home/dashboard/changepassword">{{ t('header.change_password') }}</router-link>
              </li>

            </ul>
          </li>
          <li class="mobile-view">
            <select @change="switchLanguage" class="langSel form--control ">
              <option v-for="sLocale in supportedLocales" :key="`locale-${sLocale}`" :value="sLocale"
                :selected="locale === sLocale">
                {{ t(`locale.${sLocale}`) }}
              </option>
            </select>
          </li>
          <li v-if="user" class="mobile-view">
            <a @click="logout">{{ t('header.SignOut') }}</a>
          </li>

          <li v-if="!user" class="mobile-view"><router-link to="/home/signin" class="sign-in"> {{ t('header.SignIn')
          }}</router-link>
          </li>
          <li v-if="!user" class="mobile-view"><router-link to="/home/signup" class="sign-up"> {{ t('header.SignUp')
          }}</router-link></li>

        </ul>

        <div class="d-flex flex-wrap algin-items-center logo">
          <router-link to="/home" class="sign-in">
            <img src="@/assets/images/logoIcon/logo.png" alt="Logo">

          </router-link>
        </div>
        <div class="header-trigger-wrapper d-flex d-lg-none ms-4" id="open_menu"
          @click="addAndRemoveActive('menu_active')">
          <div class="header-trigger d-block d-lg-none">
            <span></span>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Add this script:
import { useI18n } from 'vue-i18n'
import { useRouter } from "vue-router" // <--- 1
import Tr from "@/i18n/translation"
import Auth from '../router/Auth'

export default {
  data() {
    return {
      user: localStorage.getItem('user')

    }
  },
  methods: {
    logout() {
      Auth.logout()
      window.location.reload();

    },
    addAndRemoveActive(id) {
      var ele = document.getElementById('' + id + '')
      ele.classList.toggle('active');
    },
    openMenu(id) {
      var ele = document.getElementById('' + id + '')
      ele.classList.toggle('activeSub');
    }
  },
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

<style>
.activeSub {
  display: block;
}
</style>