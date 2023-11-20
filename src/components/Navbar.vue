

<template>
  <div class="header-bottom">
    <div class="container">
      <div class="header-bottom-area">
        <div class="logo">
          <router-link to="/home" class="sign-in">
            <img src="@/assets/images/logoIcon/logo.png" alt="Logo">

          </router-link>
        </div> <!-- Logo End -->
        <ul class="menu">
          <li>
            <router-link to="/home">{{ t("header.home") }}</router-link>
          </li>

          <li class="has-sub-menu">
            <router-link to="/home/dashboard">{{ t("header.profile") }}</router-link>

            <ul class="sub-menu">
              <li>
                <router-link to="/home/dashboard">{{ t("header.dashboard") }}</router-link>

              </li>
              <li>
                <router-link to="">{{ t('header.my_tickets') }}</router-link>
              </li>
              <li>
                <router-link to="">{{ t('header.wallet') }}</router-link>
              </li>
              <li>
                <router-link to="">{{ t('header.points') }}</router-link>
              </li>
              <li>
                <router-link to="/home/dashboard/profile">{{ t('header.my_account') }}</router-link>
              </li>

              <li>
                <router-link to="">{{ t('header.change_password') }}</router-link>
              </li>
            </ul>
          </li>
        </ul>
        <div class="d-flex flex-wrap algin-items-center">
          <a href="tickets.html" class="cmn--btn btn--sm">Buy Tickets</a>
          <div class="header-trigger-wrapper d-flex d-lg-none ms-4">
            <div class="header-trigger d-block d-lg-none">
              <span></span>
            </div>
            <div class="top-bar-trigger">
              <i class="las la-ellipsis-v"></i>
            </div>
          </div><!-- Trigger End-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Add this script:
import { useI18n } from 'vue-i18n'
export default {
  setup() {
    const { t } = useI18n()
    return { t }
  }
}
</script>