<template>
  <section class="banner-section">
    <div class="container">
      <div class="banner-wrapper">
        <div class="banner-content">
          <h1 class="title">{{ t('header.get_ticket') }}</h1>
        </div>
        <div class="ticket-form-wrapper">
          <div class="ticket-header nav-tabs nav border-0">
            <h4 class="title">{{ t('header.choose_ticket') }}</h4>
          </div>
          <div class="tab-content">
            <div class="tab-pane fade show active" id="one-way">
              <div  class="ticket-form row g-3 justify-content-center m-0">
                <div class="col-md-6">
                  <option value="">{{ t('header.From_City') }}</option>
                  <v-select :options="all_cities" :reduce="city => city.id" label="name_ar" v-model="from_city"  required v-if="locale == 'ar'"/>
                  <v-select :options="all_cities" :reduce="city => city.id" label="name" v-model="from_city"  required v-if="locale == 'en'"/>
                </div>
                <div class="col-md-6">
                  <option value="">{{ t('header.To_City') }}</option>
                  <v-select :options="all_cities" :reduce="city => city.id" label="name_ar" v-model="to_city"  required v-if="locale == 'ar'"/>
                  <v-select :options="all_cities" :reduce="city => city.id" label="name" v-model="to_city"  required v-if="locale == 'en'"/>
                </div>
                <div class="col-md-12">
                  <div class="form--group">
                    <option value="">{{ t('header.date') }}</option>

                    <input type="date" name="date_of_journey" class="form--control datepicker" v-model="date" required
                      placeholder="Departure Date" :min="new Date().toISOString().split('T')[0]" autocomplete="off">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form--group">
                    <button @click="searchTickets">{{ t('header.Find_Tickets') }}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shape">
      <img src="@/assets/images/frontend/banner/TRSN.png" alt="bg">
    </div>
  </section>
</template>

<script>
// Add this script:
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import axios from 'axios'
import { useI18n } from 'vue-i18n'
export default {
  components: {
    vSelect
  },
  data() {
    return {
      all_cities: [],
      from_city: '',
      to_city: '',
      date: '',
      locale: localStorage.getItem("userLocale")


    }
  },
  setup() {
    const { t } = useI18n()
    return { t }
  },
  methods: {
    async getAllCities() {
      // Get the token from localStorage.
      const token = localStorage.getItem('access_token');

      // Make a request to the API to get all permissions.
      const response = await axios.get(' https://starbusegypt.info/api/outside/cities/getAllCities', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // Return the permissions.
      this.all_cities = response.data.cities
    },
    searchTickets () {
      if(this.from_city == '' || this.to_city == '' || this.date == '') {
        this.$notify({
              type: "error",
              title: this.t('header.required_all'),
            });
      }else{

        this.$router.push("/home/tickets/" + this.from_city + "/" + this.to_city + "/" + this.date);
      }

    }
  },
  mounted() {
    this.getAllCities();
  },
}
</script>

<style>
.banner-section {
  background-image: url('../assets/images/frontend/banner/repeated.png');
  background-repeat: repeat-x;
  background-position: bottom;
}

.vs--searchable .vs__dropdown-toggle,
.vs--searchable .vs__dropdown-toggle {
  height: 40px !important;
}

</style>