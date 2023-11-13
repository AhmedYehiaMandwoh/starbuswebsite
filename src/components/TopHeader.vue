<template>
  <div class="header-top">
    <div class="container">
      <div class="header-top-area">
        <ul class="left-content">
          <li>
            <i class="las la-phone"></i>
            <a href="tel:+44 45678908">
              +44 45678908
            </a>
          </li>
          <li>
            <i class="las la-envelope-open"></i>
            <a href="https://script.viserlab.com/cdn-cgi/l/email-protection#214459404c514d4461464c40484d0f424e4c">
              <span class="__cf_email__" data-cfemail="b8ddc0d9d5c8d4ddf8dfd5d9d1d496dbd7d5">[email&#160;protected]</span>
            </a>
          </li>
        </ul>
        <div class="right-content d-flex flex-wrap" style="gap:10px">
          <div>
         
            <LanguageSwitcher></LanguageSwitcher>
          </div>
          <ul class="header-login">
            <li><a class="sign-in" href="login.html"><i class="fas fa-sign-in-alt"></i>Sign In</a></li>
            <li>/</li>
            <li><a class="sign-up" href="register.html"><i class="fas fa-user-plus"></i>Sign Up</a></li>
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
  export default {
    components: { LanguageSwitcher },
    setup() {
      const { t } = useI18n()
      return { t }
    }
  }
</script>