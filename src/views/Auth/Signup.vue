<template>
  <main>
    <TopHeader />
    <Navbar />
    <!-- Account Section Starts Here -->
    <section class="account-section bg_img" >
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
              <div class="form--group">
                <label for="password">{{ t('header.gender') }}</label>
                    <select class="form--control" name="gender" v-model="gender" required>
                      <option value="male">{{ t('header.male') }}</option>
                      <option value="female">{{ t('header.female') }}</option>
                    </select>
             
              </div>
            </div>
            <div class="col-md-6">
              <div class="form--group phone">
                <label for="phone">{{ t('header.phone') }}</label>
                <div class="input-group flex-nowrap">
                    <vue-tel-input :value="tel_number" @input="onInput"
                    :onlyCountries="['EG']"></vue-tel-input>
                </div>
              </div>

            </div>
            <div class="col-md-6">
              <div class="form--group passwordEye">
                <label for="password">{{ t('header.password') }}</label>
                <input id="password" type="password" name="password" v-model="password" class="form--control"
                  :placeholder="t('header.password_message')" required>
                  <i class="fa fa-eye" v-if="!openEyePass" @click="showPass('password')"></i>
                <i class="fa fa-eye-slash" v-if="openEyePass" @click="hidePass('password')"></i>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form--group passwordEye">
                <label for="password">{{ t('header.password_confirm') }}</label>
                <input id="password_confirm" type="password" name="password" v-model="password_confirm" class="form--control"
                  :placeholder="t('header.password_confirm')" required>
                  <i class="fa fa-eye" v-if="!openEyeConfirm" @click="showPass('password_confirm')"></i>
                <i class="fa fa-eye-slash" v-if="openEyeConfirm" @click="hidePass('password_confirm')"></i>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form--group">
                <label for="password">{{ t('header.nationality') }}</label>
                <v-select :options="all_countries" :reduce="country => country.id" label="name_en" v-model="country_id"  :rules="[required]" v-if="locale == 'en'"  />
                <v-select :options="all_countries" :reduce="country => country.id" label="name_ar" v-model="country_id"  :rules="[required]" v-if="locale == 'ar'"  />

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
                <p>{{ t('header.have_account') }} <router-link to="/home/signin" >{{ t('header.sign_in') }}</router-link></p>
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
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import axios from 'axios'
import { ref } from 'vue'
import { VueTelInput } from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'

export default {
  components: {
    Navbar,
    TopHeader,
    Footer,
    vSelect,
    VueTelInput
  },
  data() {
    return {
      name: null,
      gender: null,
      tel_number: null,
      password: null,
      password_confirm: null,
      country_code: '+20',
      country_id: null,
      openEyePass: false,
      openEyeConfirm: false,
      all_countries: [],
      locale: localStorage.getItem("userLocale")

    }
  },
  methods: {
    showPass(elementID) {
      if(elementID == 'password') {
        this.openEyePass = true;

      }
      if(elementID == 'password_confirm') {
        this.openEyeConfirm = true;

      }
      var x = document.getElementById('' + elementID + '')
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    },
    hidePass(elementID) {
      if(elementID == 'password') {
        this.openEyePass = false;

      }
      if(elementID == 'password_confirm') {
        this.openEyeConfirm = false;

      }
      var x = document.getElementById('' + elementID + '')

      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    },
    onSubmit() {
      this.signUp();
    },
    async signUp() {
      console.log(this.tel_number);
      try {
        const response = await axios.post('https://admin.starbusegypt.com/api/outside/signup', {
          name: this.name,
          tel_number: this.tel_number,
          gender: this.gender,
          password: this.password,
          country_id: this.country_id,
          country_code: this.country_code
        });
        console.log(response.data.data);
        if (response.data.status === 200) {
          this.$router.replace('/home/signin').then(() => {
            this.$notify({
              type: "success",
              title: this.t('header.signup_success'),
            });
          })
        }
        if (response.data.status === 400) {
          if(response.data.data.country_id) {
            this.$notify({
              type: "error",
              title: this.t(`header.${response.data.data.country_id[0]}`),
            });
          }
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
    },
    onInput(phone, phoneObject, input) {
      if (phoneObject?.formatted) {
        this.tel_number = phoneObject.formatted.replace(/ /g, '')

      }
    },
    async getAllCountries() {
     
      try {
        const response = await axios.get('https://admin.starbusegypt.com/api/outside/countries/getAllCountries');

        if (response.status === 200) {
          this.all_countries = response.data.countries
          // Store user data or redirect to the home page
        } else {
          // Handle invalid credentials or other errors
          console.error('Sign-in failed:', response.data);
        }
      } catch (error) {
        console.error(error);
      }
    },
    required: (v) => !!v || "field required"

  },
  mounted() {
    this.getAllCountries()
  },
  setup() {
    const phone = ref(null);

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
