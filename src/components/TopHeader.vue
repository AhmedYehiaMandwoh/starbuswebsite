<template>
  <div class="header-top">
    <div class="container">
      <div class="header-top-area">
        <ul class="left-content">
          <li>
            <i class="las la-phone"></i>
            <span dir="rtl">01121244989 2+</span>

          </li>
          <li>
            <i class="las la-envelope-open"></i>
            <span class="">support@starbus.com</span>

          </li>
        </ul>
        <div class="right-content d-flex flex-wrap" style="gap:10px">
          <div>

            <LanguageSwitcher></LanguageSwitcher>
          </div>
          <ul class="header-login" v-if="user">
            <li><span class="sign-in signout" @click="logout"><i class="fas fa-sign-in-alt"></i>{{t('header.SignOut') }}</span>
            </li>
          </ul>
          <ul class="header-login" v-else>
            <li><router-link to="/home/signin" class="sign-in"><i class="fas fa-sign-in-alt"></i>{{t('header.SignIn') }}</router-link>
            </li>
            <li>/</li>
            <li><router-link to="/home/signup" class="sign-up"><i class="fas fa-user-plus"></i>{{t('header.SignUp') }}</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// Add this script:
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from "@/components/LanguageSwitcher.vue"
import Auth from '../router/Auth'
export default {
  components: { LanguageSwitcher },
  setup() {
    const { t } = useI18n()
    return { t }
  },
  data() {
    return {
        user: localStorage.getItem('user')
    }
  },
  methods :{
    logout() {
      Auth.logout()
      window.location.reload();

    }
  }
}
</script>

<style>
.signout {
  cursor: pointer;
}
</style>