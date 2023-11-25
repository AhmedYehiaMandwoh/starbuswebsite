<template>
    <!-- Footer Section Starts Here -->
    <section class="footer-seciton">
        <div class="footer-top">
            <div class="container">
                <div class="row footer-wrapper gy-sm-5 gy-4">
                    <div class="col-xl-4 col-lg-3 col-md-6 col-sm-6">
                        <div class="footer-widget">
                            <div class="logo">
                                <img src="/src/assets/images/logoIcon/logo.png" alt="Logo">
                            </div>
                            <p>
                                {{ t('header.about_message') }}

                            </p>
                            <ul class="social-icons">
                                <li>
                                    <a href="https://www.facebook.com/"><i class="lab la-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/?lang=en"><i class="lab la-twitter"></i></a>
                                </li>

                                <li>
                                    <a href="https://www.instagram.com/?hl=en"><i class="lab la-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                        <div class="footer-widget">
                            <h4 class="widget-title">Useful Links</h4>
                            <ul class="footer-links">
                                <li>
                                    <a href="about-us.html">About</a>
                                </li>
                                <li>
                                    <a href="faq.html">FAQs</a>
                                </li>

                             
                            </ul>
                        </div>
                    </div> -->
                    <div class="col-xl-3 col-lg-4 col-md-3 col-sm-6">
                        <div class="footer-widget">
                            <h4 class="widget-title">{{t('header.aboutStar')}}</h4>
                            <ul class="footer-links">
                                <li>
                                    <router-link to="/home/about">{{ t("header.aboutStar") }}</router-link>
                                </li>
                                <li>
                                    <router-link to="/home/privacy">{{ t("header.Privacy_Refund") }}</router-link>
                                </li>


                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div class="footer-widget">
                            <h4 class="widget-title">{{t('header.Contact_Info')}}</h4>
                            <ul class="footer-contacts">
                                <li>
                                    <i class="las la-map-pin"></i>Nasr City - Cairo - Egypt
                                </li>
                                <li>
                                    <i class="las la-phone-volume"></i> <a href="tel:+2001121244989" dir="rtl">01121244989 20+</a>
                                </li>
                                <li>
                                    <i class="las la-envelope"></i> support@starbus.com
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Footer Section Ends Here -->
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