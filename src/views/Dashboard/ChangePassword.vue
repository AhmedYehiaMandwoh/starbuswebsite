<template>
  <main>
    <TopHeader />
    <Navbar />
    <!-- Account Section Starts Here -->
    <div class="container padding-top padding-bottom">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-md-6">
                <div class="profile__content__edit p-0">
                    <h5 class="title">Change Password</h5>
                    <div class="p-4">
                        <form action="" method="post" class="register">
                            <input type="hidden" name="_token" value="0HgggYwBeOsPmZO6nGPsj220iWs22bpWoSvNxlZW">                            <div class="input-group">
                                <label for="password" class="form-label">Current Password</label>
                                <input type="password" class="form-contorl form--control radius-0" id="password" name="current_password">
                            </div>
                            <div class="input-group hover-input-popup mt-2">
                                <label for="password" class="form-label">Password</label>
                                <input id="password" type="password" class="form-contorl form--control radius-0" name="password" required="" autocomplete="current-password">
                                                            </div>
                            <div class="input-group mt-2">
                                <label for="confirm_password" class="form-label">Confirm Password</label>
                                <input id="password_confirmation" type="password" class="form-contorl form--control radius-0" name="password_confirmation" required="" autocomplete="current-password">
                            </div>
                            <div class="input-group mt-4">
                                <input type="submit" class="btn btn--base" value="Change Password">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Account Section Ends Here -->
    <Footer />
  </main>
</template>
<script>
import Navbar from '../../components/Navbar.vue';
import TopHeader from '../../components/TopHeader.vue'
import Footer from '../../components/Footer.vue'
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
