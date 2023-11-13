

<template>
  <div class="header-bottom">
    <div class="container">
      <div class="header-bottom-area">
        <div class="logo">
          <a href="https://script.viserlab.com/viserbus">
            <img src="@/assets/images/logoIcon/logo.png" alt="Logo">
          </a>
        </div> <!-- Logo End -->
        <ul class="menu">
          <li>
            <a href="https://script.viserlab.com/viserbus">{{ t("header.home") }}</a>
          </li>
          <li>
            <a href="about-us.html">About</a>
          </li>
          <li>
            <a href="faq.html">FAQs</a>
          </li>

          <li>
            <a href="blog.html">Blog</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
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