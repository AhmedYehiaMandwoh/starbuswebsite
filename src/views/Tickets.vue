<template>
  <main>
    <TopHeader />
    <Navbar />
    <!-- Account Section Starts Here -->
    <section class="ticket-section padding-bottom section-bg padding-top">
      <div class="container">
        <div class="row gy-5">
          <!-- <div class="col-lg-3">
            <form action="https://script.viserlab.com/viserbus/ticket/search" id="filterForm">
              <div class="ticket-filter">
                <div class="filter-header filter-item">
                  <h4 class="title mb-0">Filter</h4>
                  <button type="reset" class="reset-button h-auto">Reset All</button>
                </div>
                <div class="filter-item">
                  <h5 class="title">Bus Type</h5>
                  <ul class="bus-type">
                    <li class="custom--checkbox">
                      <input name="fleetType[]" class="search" value="1" id="Classic" type="checkbox">
                      <label for="Classic"><span><i class="las la-bus"></i>Classic</span></label>
                    </li>
                    <li class="custom--checkbox">
                      <input name="fleetType[]" class="search" value="2" id="Coach" type="checkbox">
                      <label for="Coach"><span><i class="las la-bus"></i>Coach</span></label>
                    </li>
                    <li class="custom--checkbox">
                      <input name="fleetType[]" class="search" value="3" id="AC" type="checkbox">
                      <label for="AC"><span><i class="las la-bus"></i>AC</span></label>
                    </li>
                  </ul>
                </div>

                <div class="filter-item">
                  <h5 class="title">Routes</h5>
                  <ul class="bus-type">
                    <li class="custom--checkbox">
                      <input name="routes[]" class="search" value="1" id="route.1" type="checkbox">
                      <label for="route.1"><span><span><i class="las la-road"></i> Kansas to Echo Bass
                          </span></span></label>
                    </li>
                    <li class="custom--checkbox">
                      <input name="routes[]" class="search" value="2" id="route.2" type="checkbox">
                      <label for="route.2"><span><span><i class="las la-road"></i> Witchita to Echo Bass
                          </span></span></label>
                    </li>
                  </ul>
                </div>

                <div class="filter-item">
                  <h5 class="title">Schedules</h5>
                  <ul class="bus-type">
                    <li class="custom--checkbox">
                      <input name="schedules[]" class="search" value="1" id="schedule.1" type="checkbox">
                      <label for="schedule.1"><span><span><i class="las la-clock"></i> 06:00 am - 03:30 pm
                          </span></span></label>
                    </li>
                    <li class="custom--checkbox">
                      <input name="schedules[]" class="search" value="2" id="schedule.2" type="checkbox">
                      <label for="schedule.2"><span><span><i class="las la-clock"></i> 07:00 am - 04:00 pm
                          </span></span></label>
                    </li>
                    <li class="custom--checkbox">
                      <input name="schedules[]" class="search" value="3" id="schedule.3" type="checkbox">
                      <label for="schedule.3"><span><span><i class="las la-clock"></i> 08:00 am - 04:30 pm
                          </span></span></label>
                    </li>
                  </ul>

                </div>

                <div class="filter-item">
                  <button type="submit" class="book-bus-btn">filter</button>

                </div>
              </div>
            </form>
          </div> -->
          <div class="col-md-12" v-if="this.no_data == false">
            <div class="ticket-wrapper">

              <div class="ticket-item" v-for="ticket in all_tickets" :key="ticket.Route_id" v-if="all_tickets">
                <div class="ticket-item-inner">
                  <h5 class="bus-name" v-if="locale == 'en'">{{ ticket.route_name }}</h5>
                  <h5 class="bus-name" v-if="locale == 'ar'">{{ ticket.route_name_ar }}</h5>
                  <span class="bus-info">{{ t('header.avaiable_seats') }} {{ ticket.Seat_Left }}</span>
                  <span class="ratting"><i class="las la-bus"></i> {{ ticket.bus_name }}</span>
                </div>
                <div class="ticket-item-inner travel-time">
                  <div class="bus-time">
                    <p class="time" v-if="locale == 'en'">{{ ticket.from.name }}</p>
                    <p class="time" v-if="locale == 'ar'">{{ ticket.from.name_ar }}</p>
                    <p class="place">{{ ticket.from.name }}</p>
                  </div>
                  <div class=" bus-time">
                    <i class="las la-arrow-right" v-if="locale == 'en'"></i>
                    <i class="las la-arrow-left" v-if="locale == 'ar'"></i>
                    <p>{{ ticket.time }}</p>
                  </div>
                  <div class=" bus-time">
                    <p class="time" v-if="locale == 'en'">{{ ticket.to.name }}</p>
                    <p class="time" v-if="locale == 'ar'">{{ ticket.to.name_ar }}</p>
                    <p class="place">{{ ticket.to.name }}</p>
                  </div>
                </div>
                <div class="ticket-item-inner book-ticket">
                  <p class="rent mb-0 mb-3 ">{{ ticket.price }} {{ t('header.egp') }}</p>
                  <!-- <div class="seats-left mt-2 mb-3 fs--14px"> {{ t('header.captain') }}: <div
                      class="d-inline-flex flex-wrap" style="gap:5px;">
                      <span class="badge badge--primary" v-if="locale == 'en'">{{ ticket.captain.fullname }}</span>
                      <span class="badge badge--primary" v-if="locale == 'ar'">{{ ticket.captain.fullname_ar }}</span>
                    </div>
                  </div> -->
                  <a class="btn btn--base" @click="chooseSeat(ticket.Schedule_id,ticket.Route_id,ticket.from.id,ticket.to.id,ticket.uuid)">{{ t('header.Select_Seat') }}</a>
                </div>

              </div>
            </div>
          </div>
          <div class="col-md-12 mt-3" v-if="no_data == true">
            <div class="text-center">
              <div class="card">
                <div class="row">
                  <div class="col-md-3"></div>
                  <div class="col-md-6">
                    <h4 class="mt-2">{{ t('header.no_trips_added') }}</h4>
                    <img class="nodata" src="/src/assets/images/icons/nodata.jpg">
                    <router-link to="/home" class="cmn--btn">{{ t('header.go_to_home') }}</router-link>
                  </div>
                  <div class="col-md-3"></div>
                </div>
              </div>


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
import { useI18n } from 'vue-i18n'
import axios from 'axios'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
export default {
  components: {
    Navbar,
    TopHeader,
    Footer,
    VueDatePicker
  },
  
  data() {
    return {
      all_tickets: [],
      no_data: false,
      locale: localStorage.getItem("userLocale")
    }
  },
  methods: {
    async getAllTickets() {
      const token = localStorage.getItem('access_token');

      let formData = new FormData();
      formData.append('from', this.$route.params.from);
      formData.append('to', this.$route.params.to);
      formData.append('date', this.$route.params.date);
      try {
        const response = await axios.post('https://admin.starbusegypt.com/api/outside/searchRide/get', formData, {

          headers: {
            Authorization: `Bearer ${token}`
          }
        }

        );

        if (response.status === 200) {
          this.all_tickets = response.data.data
          console.log(response.data.data);
          if(this.all_tickets.length <= 0) {
            this.no_data = true
          }
          // Store user data or redirect to the home page
        } else {
          // Handle invalid credentials or other errors
          console.error('Sign-in failed:', response.data);
        }
      } catch (error) {
        console.error(error);
      }
    },
    chooseSeat(schedule_id,route_id,from,to,uuid) {
      this.$router.push("/home/ticket/details-seat/" +this.$route.params.date +"/"+ schedule_id +"/"+ route_id+ "/" + from +"/"+ to +"/"+ uuid);

    }
  },
  setup() {
    const { t } = useI18n()
    return { t }
  },
  mounted() {
    this.getAllTickets();
  },
}
</script>
<style>
  .nodata {
    width: 100%;
  }
</style>