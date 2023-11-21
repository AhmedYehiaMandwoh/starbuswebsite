<template>
    <main>
        <TopHeader />
        <Navbar />
        <!-- Account Section Starts Here -->
        <div class="padding-top padding-bottom">
            <div class="container" data-select2-id="select2-data-9-fha4">
                <div class="row gx-xl-5 gy-4 gy-sm-5 justify-content-center">
                    <div class="col-lg-4 col-md-8" data-select2-id="select2-data-8-at7d">
                        <div class="seat-overview-wrapper">
                            <form action="https://script.viserlab.com/viserbus/ticket/book/1" method="POST" id="bookingForm"
                                class="row gy-2">
                                <input type="hidden" name="_token" value="kLpJiXF37VmTS4Jwg2EcaPjcgCMfLzFOeE3goTLH"> <input
                                    type="text" name="price" hidden="">

                                <div class="col-md-12">
                                    <option value="">{{ t('header.From_Station') }}</option>
                                    <v-select :options="from_city" :reduce="from_city => from_city.id"
                                        label="station_name_ar" v-model="from_station" required v-if="locale == 'ar'" />
                                    <v-select :options="from_city" :reduce="fromCity => fromCity.id" label="station_name"
                                        v-model="from_station" required v-if="locale == 'en'" />
                                </div>
                                <div class="col-md-12">
                                    <option value="">{{ t('header.To_Station') }}</option>
                                    <v-select :options="to_city" :reduce="toCity => toCity.id" label="station_name_ar"
                                        v-model="to_station" required v-if="locale == 'ar'" />
                                    <v-select :options="to_city" :reduce="toCity => toCity.id" label="station_name"
                                        v-model="to_station" required v-if="locale == 'en'" />
                                </div>

                                <div class="booked-seat-details my-3 d-none">
                                    <label>Selected Seats</label>
                                    <div class="list-group seat-details-animate">
                                        <span
                                            class="list-group-item d-flex bg--base text-white justify-content-between">Seat
                                            Details<span>Price</span></span>
                                        <div class="selected-seat-details">
                                        </div>
                                    </div>
                                </div>
                                <input type="text" name="seats" hidden="">
                                <div class="col-12">
                                    <button type="submit" class="book-bus-btn">{{ t('header.showAvailable') }}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4">
                        <h6 class="title">Click on Seat to select or deselect</h6>

                        <div class="seat-plan-inner" dir="rtl">
                            <div class="single">
                                <span class="front">Front</span>
                                <span class="rear">Rear</span>
                                <span class="driver">
                                    <div class="seat-wrapper">
                                        <div class="left-side">
                                            <div>
                                                <span class="seat" @click="getSeat(1, 'seatOne')" id="seatOne">
                                                    1
                                                    <span></span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                                <span class="lower"><img
                                        src="https://script.viserlab.com/viserbus/assets/templates/basic/images/icon/wheel.svg"
                                        alt="icon"></span>

                                <div class="seat-wrapper">
                                    <div class="left-side"></div>
                                    <div class="right-side">
                                        <div>
                                            <span class="seat" @click="getSeat(4)">
                                                4
                                                <span></span>
                                            </span>
                                        </div>
                                        <div>
                                            <span class="seat" @click="getSeat(3)">
                                                3
                                                <span></span>
                                            </span>
                                        </div>
                                        <div>
                                            <span class="seat" data-seat="1-A2">
                                                2
                                                <span></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="seat-wrapper">
                                    <div class="left-side">

                                        <div>
                                            <span class="seat" data-seat="1-A2">
                                                7
                                                <span></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="right-side">

                                        <div>
                                            <span class="seat" @click="getSeat(6)">
                                                6
                                                <span></span>
                                            </span>
                                        </div>
                                        <div>
                                            <span class="seat" data-seat="1-A2">
                                                5
                                                <span></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="seat-wrapper">
                                    <div class="left-side">

                                        <div>
                                            <span class="seat" data-seat="1-A2">
                                                10
                                                <span></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="right-side">

                                        <div>
                                            <span class="seat" @click="getSeat(9)">
                                                9
                                                <span></span>
                                            </span>
                                        </div>
                                        <div>
                                            <span class="seat" data-seat="1-A2">
                                                8
                                                <span></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="seat-wrapper">

                                    <div class="left-side">

                                        <div>
                                            <span class="seat" data-seat="1-A2">
                                                14
                                                <span></span>
                                            </span>
                                        </div>
                                        <div>
                                            <span class="seat" data-seat="1-A2">
                                                13
                                                <span></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="right-side">

                                        <div>
                                            <span class="seat" @click="getSeat(12)">
                                                12
                                                <span></span>
                                            </span>
                                        </div>
                                        <div>
                                            <span class="seat" data-seat="1-A2">
                                                11
                                                <span></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>

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
import Navbar from '../components/Navbar.vue';
import TopHeader from '../components/TopHeader.vue'
import Footer from '../components/Footer.vue'
import { useI18n } from 'vue-i18n'
// Add this script:
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import axios from 'axios'
export default {
    components: {
        Navbar,
        TopHeader,
        Footer,
        vSelect

    },
    data() {
        return {
            locale: localStorage.getItem("userLocale"),
            from_city: [],
            to_city: [],
            from_station: '',
            to_station: '',

        }
    },
    methods: {
        async getAllStations() {
            const token = localStorage.getItem('access_token');

            let formData = new FormData();
            formData.append('route_id', this.$route.params.route_id);
            formData.append('fromCity', this.$route.params.from);
            formData.append('toCity', this.$route.params.to);
            try {
                const response = await axios.post('https://mdsapps.net/api/outside/searchRide/get-station', formData, {

                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }

                );

                if (response.status === 200) {
                    console.log(response.data);
                    this.from_city = response.data.from_city;
                    this.to_city = response.data.to_city;
                    // Store user data or redirect to the home page
                } else {
                    // Handle invalid credentials or other errors
                    console.error('Sign-in failed:', response.data);
                }
            } catch (error) {
                console.error(error);
            }
        },
        getSeat(val, seatId) {
            if (this.from_station == '' || this.to_station == '') {
                this.$notify({
                    type: "error",
                    title: this.t('header.station_message_required'),
                });
            } else {

                var ele = document.getElementById('' + seatId + '')
                ele.classList.toggle('selected');
            }

        }
    },
    setup() {
        const { t } = useI18n()
        return { t }
    },
    mounted() {
        this.getAllStations();
    }

}
</script>

<style>
.seat-wrapper .seat.selected {
    border-color: rgb(57, 163, 57);
    background: rgb(57, 163, 57);
    color: #fff;
}
</style>