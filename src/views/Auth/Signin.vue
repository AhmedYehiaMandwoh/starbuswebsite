<template>
  <main>
    <TopHeader />
    <Navbar />
    <!-- Account Section Starts Here -->
    <section class="account-section bg_img"
      style="background: url(/src/assets/images/frontend/sign_in/login.jpg); background-size: contain; background-position: left;">
      <div class="account-wrapper">
        <div class="account-form-wrapper">
          <div class="account-header">
            <div class="left-content">
              <h3 class="title">{{ t('header.Welcome_bus') }}</h3>
              <span>{{ t('header.signin_account') }}</span>
            </div>
          </div>
          <form method="POST" class="account-form row" @submit.prevent="onSubmit">
            <input type="hidden" name="_token" value="xy7TSRODq8di5Obt9QHDznSiokKzcgqpmreBJZFV">
            <div class="col-lg-12">
              <div class="form--group">
                <label for="phone">{{ t('header.phone') }}</label>
                <input id="phone" name="phone" type="text" class="form--control" v-model="phone"
                  :placeholder="t('header.phone_message')" required>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="form--group">
                <label for="password">{{ t('header.password') }}</label>
                <input id="password" type="password" name="password" v-model="password" class="form--control"
                  :placeholder="t('header.password_message')" required>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="form--group">
              </div>
            </div>
            <div class="col-lg-12 d-flex justify-content-between">
              <div class="form--group custom--checkbox">
                <input type="checkbox" name="remember" id="remember">
                <label for="remember">{{ t('header.remember_me') }}</label>
              </div>
              <div class="">
                <a href="password/reset.html">{{ t('header.forgot_password') }}</a>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form--group">
                <button class="account-button w-100" type="submit">{{ t('header.sign_in') }}</button>
              </div>
            </div>
            <div class="col-md-12">
              <div class="account-page-link">
                <p>{{ t('header.dont_have_Account') }} <a href="register.html">{{ t('header.sign_up') }}</a></p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    <!-- Account Section Ends Here -->
    <Footer />
  </main>
</template>
<script>
import Navbar from '../../components/Navbar.vue';
import TopHeader from '../../components/TopHeader.vue'
import Footer from '../../components/Footer.vue'
import { useI18n } from 'vue-i18n'
import axios from 'axios'
export default {
  components: {
    Navbar,
    TopHeader,
    Footer
  },
  data() {
    return {
      phone: null,
      password: null,
    }
  },
  methods: {
    onSubmit() {
      this.signIn();
    },
    async signIn() {
      try {
        const response = await axios.post('https://mdsapps.net/api/outside/login', {
          tel_number: this.phone,
          password: this.password
        });

        if (response.status === 200) {
          // Sign-in successful
          // Store user data or redirect to the home page
        } else {
          // Handle invalid credentials or other errors
          console.error('Sign-in failed:', response.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
  },
  setup() {
    const { t } = useI18n()
    return { t }
  }
}
</script>
