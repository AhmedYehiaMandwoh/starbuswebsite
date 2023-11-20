<template>
  <main>
    <TopHeader />
    <Navbar />
    <section class="ticket-section padding-bottom section-bg padding-top">
      <div class="container">
        <div class="row gy-5">
          <div class="col-md-3">
            <Sidebar />

          </div>
          <div class="col-md-9">
            <div class="profile__edit__wrapper">
              <div class="profile__edit__form">
                <form class="register prevent-double-click" action="" method="post" enctype="multipart/form-data">
                  <input type="hidden" name="_token" value="0HgggYwBeOsPmZO6nGPsj220iWs22bpWoSvNxlZW">
                  <div class="row justify-content-center">
                    <div class="col-xl-10">
                      <div class="profile__content__edit p-0">
                        <h5 class="title">Profile Setting</h5>
                        <div class="row gy-3 p-4">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="InputFirstname" class="form-label">First Name</label>
                              <input type="text" class="form-contorl form--control radius-0" id="InputFirstname"
                                name="firstname" placeholder="First Name" value="Ahmed" minlength="3">
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="lastname" class="form-label">Last Name</label>
                              <input type="text" class="form-contorl form--control radius-0" id="lastname" name="lastname"
                                placeholder="Last Name" value="Yehya" required="">
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="email" class="form-label">E-mail Address</label>
                              <input class="form-contorl form--control radius-0" id="email"
                                value="[Email is protected for the demo]" disabled="">
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="phone" class="form-label">Mobile Number</label>
                              <input class="form-contorl form--control radius-0" id="phone"
                                value="[Mobile number is protected for the demo]" disabled="">
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="address" class="form-label">Address</label>
                              <input type="text" class="form-contorl form--control radius-0" id="address" name="address"
                                placeholder="Address" value="" required="">
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="state" class="form-label">State</label>
                              <input type="text" class="form-contorl form--control radius-0" id="state" name="state"
                                placeholder="state" value="" required="">
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="zip" class="form-label">Zip Code</label>
                              <input type="text" class="form-contorl form--control radius-0" id="zip" name="zip"
                                placeholder="Zip Code" value="" required="">
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="city" class="form-label">City</label>
                              <input type="text" class="form-contorl form--control radius-0" id="city" name="city"
                                placeholder="City" value="" required="">
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="zip" class="form-label">Zip Code</label>
                              <input type="text" class="form-contorl form--control radius-0" id="zip" name="zip"
                                placeholder="Zip Code" value="" required="">
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="form-group">
                              <label class="form-label">Country</label>
                              <input class="form-contorl form--control radius-0" value="Egypt" disabled="">
                            </div>
                          </div>
                          <div class="col">
                            <button type="submit" class="btn btn--base btn--block mt-3 h-auto">Update Profile</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Account Section Starts Here -->

    <!-- Account Section Ends Here -->
    <Footer />
  </main>
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
