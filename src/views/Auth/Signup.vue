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
              <span>{{ t('header.new_account') }}</span>
            </div>
          </div>
          <form method="POST" class="account-form row" @submit.prevent="onSubmit">
            <div class="col-md-6">
              <div class="form--group">
                <label for="name">{{ t('header.name') }}</label>
                <input id="name" name="name" type="text" class="form--control" v-model="name" :placeholder="t('header.name_message')"
                  required>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form--group phone">
                <label for="phone">{{ t('header.phone') }}</label>
                <div class="input-group flex-nowrap">
                  <span class="input-group-text mobile-code border-0 h-40">+20</span>
                  <input type="hidden" name="mobile_code" value="20">
                  <input type="hidden" name="country_code" value="EG">
                  <input type="number" name="mobile" id="mobile" v-model="tel_number" class="form--control ps-2  checkUser"
                    :placeholder="t('header.phone_message')">
                </div>
                <small class="text-danger mobileExist"></small>
              </div>

            </div>
            <div class="col-md-6">
              <div class="form--group">
                <label for="password">{{ t('header.gender') }}</label>
                    <select class="form--control" name="gender" v-model="gender">
                      <option value="male">{{ t('header.male') }}</option>
                      <option value="female">{{ t('header.female') }}</option>
                    </select>
             
              </div>
            </div>
            <div class="col-md-6">
              <div class="form--group">
                <label for="password">{{ t('header.password') }}</label>
                <input id="password" type="password" name="password" v-model="password" class="form--control"
                  :placeholder="t('header.password_message')" required>
              </div>
            </div>
            
            <div class="col-md-12 d-flex justify-content-between">
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
      name: null,
      gender: null,
      tel_number: null,
      password: null
    }
  },
  methods: {
    onSubmit() {
      this.signUp();
    },
    async signUp() {

      try {
        const response = await axios.post('https://mdsapps.net/api/outside/signup', {
          name: this.name,
          tel_number: this.tel_number,
          gender: this.gender,
          password: this.password
        });
        console.log(response.data.data);
        if (response.data.status === 201) {
          this.$router.replace('/home/signin').then(() => {
            this.$notify({
              type: "success",
              title: this.t('header.signup_success'),
            });
          })
        }
        if (response.data.status === 400) {
          if(response.data.data.password) {
            this.$notify({
              type: "error",
              title: this.t(`header.${response.data.data.password[0]}`),
            });
          }
          if(response.data.data.tel_number) {
            this.$notify({
              type: "error",
              title: this.t(`header.${response.data.data.tel_number[0]}`),
            });
          }
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

<style>
input[type="number"] {
  -webkit-appearance: textfield;
     -moz-appearance: textfield;
          appearance: textfield;
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none;
}

</style>
