<template>
  <main>
    <TopHeader />
    <Navbar />
    <!-- Account Section Starts Here -->
    <section class="ticket-section padding-bottom section-bg padding-top">
      <div class="container">
        <div class="row mb-4 mb-md-5 gy-4">
          <div class="col-lg-7 col-xl-6">
            <div class="about-content">
              <div class="section-header">
                <h3 class="title">{{t('header.Printing_electronic_tickets')}}</h3>
              </div>
            
              <div class="section-header">
                <p>{{ t('header.Printing_electronic_tickets_text') }}</p>
              </div>
          
            </div>
            <div class="about-content">
              <div class="section-header">
                <h3 class="title">{{t('header.cancelation_policy')}}</h3>
              </div>
            
              <div class="section-header">
                <p>{{ t('header.cancelation_policy_text') }}</p>
              </div>
          
            </div>
            <div class="about-content">
              <div class="section-header">
                <h3 class="title">{{t('header.bag_loss')}}</h3>
              </div>
            
              <div class="section-header">
                <p>{{ t('header.bag_loss_text') }}</p>
              </div>
          
            </div>
          
           
          </div>
          <div class="col-lg-5 col-xl-6">
                <div class="about-thumb">
                  <img src="/src/assets/images/frontend/sign_in/login.jpg" alt="Know Few Words About Autobus">
                </div>
            </div>
        </div>
  
    </div>
  </section>
  <!-- Account Section Ends Here -->
  <Footer />
</main></template>
<script>
import Navbar from '../components/Navbar.vue';
import TopHeader from '../components/TopHeader.vue'
import Footer from '../components/Footer.vue'
import { useI18n } from 'vue-i18n'
export default {
  components: {
    Navbar,
    TopHeader,
    Footer,
  },

  data() {
    return {
      locale: localStorage.getItem("userLocale")
    }
  },

  setup() {
    const { t } = useI18n()
    return { t }
  },

}
</script>
