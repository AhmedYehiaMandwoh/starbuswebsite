<template>
  <main>
    <TopHeader />
    <Navbar />

    <!-- Account Section Starts Here -->
    <section class="account-section bg_img">
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
                  :placeholder="t('header.phone_message')" pattern="01[0-9]{9}" required>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="form--group passwordEye">
                <label for="password">{{ t('header.password') }}</label>
                <input id="password" type="password" name="password" v-model="password" class="form--control "
                  :placeholder="t('header.password_message')" required>
                <i class="fa fa-eye" v-if="!openEye" @click="showPass"></i>
                <i class="fa fa-eye-slash" v-if="openEye" @click="hidePass"></i>
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
                <p>{{ t('header.dont_have_Account') }} <router-link to="/home/signup">{{ t('header.sign_up')
                }}</router-link></p>
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
      openEye: false,
    }
  },
  methods: {
    showPass() {
      this.openEye = true;
      var x = document.getElementById("password");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    },
    hidePass() {
      this.openEye = false;
      var x = document.getElementById("password");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    },
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
          if (!response.data.data.user) {
            this.$notify({
              type: "error",
              title: this.t('header.login_error'),
            });
          } else {

            localStorage.setItem('user', JSON.stringify(response.data.data.user));
            localStorage.setItem('access_token', response.data.data.access_token);
            this.$router.replace('/home').then(() => {
              this.$notify({
                type: "success",
                title: this.t('header.login_success'),
              });
            })
          }


          // Store user data or redirect to the home page
        } else {
          this.$notify({
            type: "error",
            title: this.t('header.login_error'),
          });
          // Handle invalid credentials or other errors
        }
      } catch (error) {
        this.$notify({
            type: "error",
            title: this.t('header.login_error'),
          });
      }
    }
  },

  setup() {
    const { t } = useI18n()
    return { t }
  }
}
</script>
