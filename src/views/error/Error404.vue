<template>
  <main>
    <div class="error">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7 text-center">
            <img src="https://script.viserlab.com/viserbus/assets/errors/images/error-404.png" alt="image">
            <h2 class="title"><b>404</b> Page not found</h2>
            <p>page you are looking for doesn't exit or an other error occured <br> or temporarily unavailable.</p>
            <a href="https://script.viserlab.com/viserbus" class="cmn-btn mt-4">Go to Home</a>
          </div>
        </div>
      </div>
    </div>
  </main>
  <!-- <Footer /> -->
</template>

<script>
import Navbar from '../../components/Navbar.vue';
import TopHeader from '../../components/TopHeader.vue'
import Footer from '../../components/Footer.vue'
import Sidebar from '../../components/MysideBar.vue'
import { useI18n } from 'vue-i18n'
export default {
  components: {
    Navbar,
    TopHeader,
    Footer,
    Sidebar
  },
  setup() {
    const { t } = useI18n()
    return { t }
  }
}
</script>
  

<style>
.error {
  margin-top: 50px;
}
</style>