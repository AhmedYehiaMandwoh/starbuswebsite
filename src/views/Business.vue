<template>
  <main>
    <TopHeader />
    <Navbar />
    <!-- Account Section Starts Here -->
    <section class="ticket-section padding-bottom section-bg padding-top">
      <div class="container">
        <div class="row mb-4 mb-md-5 gy-4">
          <div class="col-md-6">

            <div class="tab-content">
              <div class="tab-pane fade show active" id="one-way">
                <div class="ticket-form row g-3 justify-content-center m-0" v-if="!showPRiavte">
                  <div class="col-md-12">
                    <div class="account-header m-0">
                      <div class="left-content">
                        <h3 class="title">{{ t('header.business_trip') }} </h3><span>{{ t('header.business_trip_message')
                        }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <option value="">{{ t('header.From_City') }}</option>
                    <v-select :options="all_cities" :reduce="city => city.id" label="name_ar" v-model="from_city" required
                      v-if="locale == 'ar'" />
                    <v-select :options="all_cities" :reduce="city => city.id" label="name" v-model="from_city" required
                      v-if="locale == 'en'" />
                  </div>
                  <div class="col-md-6">
                    <option value="">{{ t('header.To_City') }}</option>
                    <v-select :options="all_cities" :reduce="city => city.id" label="name_ar" v-model="to_city" required
                      v-if="locale == 'ar'" />
                    <v-select :options="all_cities" :reduce="city => city.id" label="name" v-model="to_city" required
                      v-if="locale == 'en'" />
                    </div>
                    <div class="col-md-6">
                      <div class="form--group">
                        <label for="remember">{{ t('header.name') }}</label>
                        <input type="text" class="form--control" v-model="name" required>
  
                      </div>
                    </div>
                  <div class="col-md-6">
                    <div class="form--group">
                      <label for="remember">{{ t('header.email') }}</label>
                      <input type="email" class="form--control" v-model="email" required>

                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form--group">
                      <label for="phone">{{ t('header.phone') }}</label>
                      <vue-tel-input :value="phone" @input="onInput" :onlyCountries="['EG']" required></vue-tel-input>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form--group">
                      <label>{{ t('header.bus_type') }}</label>
                      <select name="bus_type" id="bus_type" v-model="bus_type" class="form--control">
                        <option v-for="bustype in bustypes" :key="bustype.id">{{ bustype.name }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form--group">
                      <option value="">{{ t('header.from_time') }}</option>

                      <input type="time" name="from_time" class="form--control" v-model="from_time" required
                        placeholder="Departure Time">
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="form--group">
                      <option value="">{{ t('header.to_time') }}</option>

                      <input type="time" name="to_time" class="form--control" v-model="to_time" required
                        placeholder="Departure Time">
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form--group">
                      <option value="">{{ t('header.date') }}</option>

                      <input type="date" name="date_of_journey" class="form--control datepicker" v-model="date" required
                        placeholder="Departure Date" :min="new Date().toISOString().split('T')[0]" autocomplete="off">
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form--group">
                      <button @click="searchPrivate">{{ t('header.search') }}</button>
                    </div>
                  </div>
                </div>
                <div class="ticket-form row g-3 justify-content-center m-0" v-if="showPRiavte">
                  <div class="col-md-12">
                    <div class="account-header">
                      <div class="left-content">
                        <h3 class="title">{{ t('header.business_trip') }} </h3><span>{{ t('header.business_trip_message')
                        }}</span>


                      </div>
                    </div>
                    <div class="list-group seat-details-animate">
                      <span class="list-group-item d-flex bg--base text-white justify-content-between">{{
                        t('header.invoice_details') }}<span>{{ t('header.Info') }}</span></span>
                      <div class="selected-seat-details">
                        <span class="list-group-item d-flex justify-content-between">{{ t('header.name') }}<span>{{
                          myPrivate.Details.name }}</span></span>
                        <span class="list-group-item d-flex justify-content-between">{{ t('header.phone') }}<span>{{
                          myPrivate.Details.tel_number }}</span></span>
                        <span class="list-group-item d-flex justify-content-between">{{ t('header.date') }}<span>{{
                          myPrivate.Details.date }}</span></span>
                        <span class="list-group-item d-flex justify-content-between">{{ t('header.bus_type') }}<span>{{
                          myPrivate.Details.bus_type }}</span></span>
                        <span class="list-group-item d-flex justify-content-between">{{ t('header.From_City') }}<span>{{
                          locale == "ar" ? myPrivate.fromCity.name_ar : myPrivate.fromCity.name }} </span></span>
                        <span class="list-group-item d-flex justify-content-between">{{ t('header.To_City') }}<span>{{
                          locale == "ar" ? myPrivate.toCity.name_ar : myPrivate.toCity.name }} </span></span>

                        <span class="list-group-item d-flex justify-content-between" v-if="type == 'one_way'">{{
                          t('header.type') }}<span>{{ t('header.One_way') }}</span></span>
                        <span class="list-group-item d-flex justify-content-between" v-if="type == 'round_trip'">{{
                          t('header.type') }}<span>{{ t('header.One_way') }}</span></span>
                        <span class="list-group-item d-flex justify-content-between" v-if="type == 'one_way'"><span>{{
                          t('header.total') }}</span>{{ myPrivate.oneWay }}
                          {{ t('header.egp') }}</span>
                        <span class="list-group-item d-flex justify-content-between" v-if="type == 'round_trip'"><span>{{
                          t('header.total') }}</span>{{ myPrivate.twoWay }}
                          {{ t('header.egp') }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form--group">
                      <button>{{ t('header.book_now') }}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="col-md-6">
            <div class="about-thumb">
              <img src="/src/assets/images/icons/trip.svg" alt="Know Few Words About Autobus">
            </div>
          </div>
        </div>

      </div>
    </section>
    <!-- Account Section Ends Here -->
    <Footer />
  </main>
</template>
<script>
import Navbar from '../components/Navbar.vue';
import TopHeader from '../components/TopHeader.vue'
import Footer from '../components/Footer.vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import axios from 'axios'
import { useI18n } from 'vue-i18n'
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
      bustypes: [],
      all_cities: [],
      myPrivate: {},
      from_city: '',
      to_city: '',
      date: '',
      type: '',
      name: '',
      bus_type: 'Toyota Hiace 14',
      phone: null,
      locale: localStorage.getItem("userLocale"),
      disabled: true,
      showPRiavte: false,


    }
  },
  methods: {
    async getAllCities() {
      // Get the token from localStorage.
      const token = localStorage.getItem('access_token');

      // Make a request to the API to get all permissions.
      const response = await axios.get(' https://admin.starbusegypt.com/api/outside/cities/getAllCities', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // Return the permissions.
      this.all_cities = response.data.cities
    },
    async getAllBusTypes() {
      // Get the token from localStorage.
      const token = localStorage.getItem('access_token');

      // Make a request to the API to get all permissions.
      const response = await axios.get(' https://admin.starbusegypt.com/api/outside/bussiness/getBusTypes', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // Return the permissions.
      this.bustypes = response.data.bustypes
    },
    async searchPrivate() {
      if (this.from_city == '' || this.to_city == '' || this.date == '') {
        this.$notify({
          type: "error",
          title: this.t('header.required_all'),
        });
      } else {
        const token = localStorage.getItem('access_token');

        let formData = new FormData();
        formData.append('from', this.from_city);
        formData.append('to', this.to_city);
        formData.append('name', this.name);
        formData.append('tel_number', this.phone);
        formData.append('date', this.date);
        formData.append('bus_type', this.bus_type);

        try {
          const response = await axios.post(' https://admin.starbusegypt.com/api/outside/private/searchPrivateBus', formData, {

            headers: {
              Authorization: `Bearer ${token}`
            }
          }

          );

          if (response.status === 200) {
            if (response.data.data !== null) {
              this.myPrivate = response.data.data
              this.showPRiavte = true;
            } else {
              this.showPRiavte = false;
              this.$notify({
                type: "error",
                title: this.t('header.no_trips'),
              });

            }

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
    onInput(phone, phoneObject, input) {
      if (phoneObject?.formatted) {
        this.phone = phoneObject.formatted.replace(/ /g, '')
      }
    }
  },
  mounted() {
    this.getAllCities();
    this.getAllBusTypes();
  },
  setup() {
    const { t } = useI18n()
    return { t }
  },

}
</script>

<style>
.textArea {
  height: 100px !important;
}
</style>
