

<template>
  <section class="banner-section" >
    <div class="container">
      <div class="banner-wrapper">
        <div class="banner-content">
          <h1 class="title">{{t('header.get_ticket')}}</h1>
          <a href="tickets.html" class="cmn--btn">Get ticket now</a>
        </div>
        <div class="ticket-form-wrapper">
          <div class="ticket-header nav-tabs nav border-0">
            <h4 class="title">{{t('header.choose_ticket')}}</h4>
          </div>
          <div class="tab-content">
            <div class="tab-pane fade show active" id="one-way">
              <form action="https://script.viserlab.com/viserbus/ticket/search"
                class="ticket-form row g-3 justify-content-center m-0">
                <div class="col-md-6">
                  <div class="form--group">
                    <i class="las la-location-arrow"></i>
                    <select class="form--control select2" name="pickup">
                      <option value="">{{ t('header.From_City') }}</option>
                      <option value="1">Kansas</option>
                      <option value="2">Dallas</option>
                      <option value="3">Wichita</option>
                      <option value="4">Emi Davenport</option>
                      <option value="5">Echo Bass</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form--group">
                    <i class="las la-map-marker"></i>
                    <select name="destination" class="form--control select2">
                      <option value="">{{ t('header.To_City') }}</option>
                      <option value="1">Kansas</option>
                      <option value="2">Dallas</option>
                      <option value="3">Wichita</option>
                      <option value="4">Emi Davenport</option>
                      <option value="5">Echo Bass</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form--group">
                    <!-- <i class="las la-calendar-check"></i> -->
                    <input type="date" name="date_of_journey" class="form--control datepicker"
                      placeholder="Departure Date" autocomplete="off">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form--group">
                    <button>Find Tickets</button>
                  </div>
                </div>
              </form>
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
import { useI18n } from 'vue-i18n'
export default {
  setup() {
    const { t } = useI18n()
    return { t }
  }
}
</script>

<style scoped>
.banner-section {
  background-image: url('../assets/images/frontend/banner/repeated.png');
  background-repeat: repeat-x;
  background-position: bottom;
}
</style>