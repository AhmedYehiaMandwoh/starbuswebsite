

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

          <li class="has-sub-menu" @click="openMenu('sub_menu')" >
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
export default {
  data() {
    return {

    }
  },
  methods: {
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
    const { t } = useI18n()
    return { t }
  }
}
</script>

<style>
.activeSub {
  display: block;
}
</style>