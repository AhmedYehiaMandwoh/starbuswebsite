<template>
  <main>
    <TopHeader />
    <Navbar />
    <!-- Account Section Starts Here -->
    <section class="ticket-section padding-bottom section-bg padding-top">
      <div class="container">
        <div class="row gy-5">
          <div class="col-lg-3">
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
          </div>
          <div class="col-lg-9">
            <div class="ticket-wrapper">


              <div class="ticket-item">
                <div class="ticket-item-inner">
                  <h5 class="bus-name">Cairo - Taba</h5>
                  <span class="bus-info">Avaiable seats 8</span>
                  <span class="ratting"><i class="las la-bus"></i>AC</span>
                </div>
                <div class="ticket-item-inner travel-time">
                  <div class="bus-time">
                    <p class="time">08:00 AM</p>
                    <p class="place">Cairo</p>
                  </div>
                  <div class=" bus-time">
                    <i class="las la-arrow-right"></i>
                    <p>08:30 min</p>
                  </div>
                  <div class=" bus-time">
                    <p class="time">04:30 PM</p>
                    <p class="place">Taba</p>
                  </div>
                </div>
                <div class="ticket-item-inner book-ticket">
                  <p class="rent mb-0">450EGP</p>
                  <div class="seats-left mt-2 mb-3 fs--14px"> captain: <div class="d-inline-flex flex-wrap" style="gap:5px;"><span class="badge badge--primary">ahmed</span></div></div>
                  <a class="btn btn--base" href="https://script.viserlab.com/viserbus/ticket/1/ac-kansas-echo-bass">Select
                    Seat</a>
                </div>
                <div class="ticket-item-footer">
                  <div class="d-flex content-justify-center">
                    <span>
                      <strong>Facilities - </strong>
                      <span class="facilities">Water Bottle</span>
                      <span class="facilities">Pillow</span>
                      <span class="facilities">Wifi</span>
                    </span>
                  </div>
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
export default {
  components: {
    Navbar,
    TopHeader,
    Footer
  },
  setup() {
    const { t } = useI18n()
    return { t }
  }
}
</script>
