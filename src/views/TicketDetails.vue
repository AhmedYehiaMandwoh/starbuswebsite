<template>
    <main>
        <TopHeader />
        <Navbar />
        <!-- Account Section Starts Here -->
        <div class="padding-top padding-bottom">
            <div class="container">
                <div class="row gx-xl-5 gy-4 gy-sm-5 justify-content-center">
                    <div class="col-lg-4 col-md-8">

                        <div class="seat-overview-wrapper">
                            <div id="bookingForm" class="row gy-2">
                                <h6 class="title">{{ t('header.stations_avialable') }}</h6>
                                <input type="hidden" name="_token" value="kLpJiXF37VmTS4Jwg2EcaPjcgCMfLzFOeE3goTLH"> <input
                                    type="text" name="price" hidden="">

                                <div class="col-md-12">
                                    <option value="">{{ t('header.From_Station') }}</option>


                                    <v-select :options="FromStation" :reduce="fromStation => fromStation.id"
                                        label="station_name" v-model="from_station" required v-if="locale == 'en'">
                                        <template #option="option" v-if="locale == 'en'">
                                            <span class="d-flex justify-content-between">
                                                <span>{{ option.station_name }}</span>
                                                <span>{{ option.station_time.split('-')[0] }} {{
                                                    t('header.' + option.station_time.split('-')[1]) }}</span>
                                            </span>
                                        </template>

                                    </v-select>
                                    <v-select :options="FromStation" :reduce="fromStation => fromStation.id"
                                        label="station_name_ar" v-model="from_station" required v-if="locale == 'ar'">

                                        <template #option="option" v-if="locale == 'ar'">
                                            <span class="d-flex justify-content-between">
                                                <span dir="rtl">{{ option.station_time.split('-')[0] }} {{
                                                    t('header.' + option.station_time.split('-')[1]) }}</span>
                                                <span>{{ option.station_name_ar }} </span>
                                            </span>
                                        </template>

                                    </v-select>

                                </div>
                                <div class="col-md-12">
                                    <option value="">{{ t('header.To_Station') }}</option>
                                    <v-select :options="ToStation" :reduce="toStation => toStation.id" label="station_name"
                                        v-model="to_station" required v-if="locale == 'en'">
                                        <template #option="option">
                                            <span class="d-flex justify-content-between">
                                                <span>{{ option.station_name }} </span>
                                                <span>{{ option.station_time.split('-')[0] }} {{
                                                    t('header.' + option.station_time.split('-')[1]) }}</span>
                                            </span>
                                        </template>
                                    </v-select>
                                    <v-select :options="ToStation" :reduce="toStation => toStation.id"
                                        label="station_name_ar" v-model="to_station" required v-if="locale == 'ar'">

                                        <template #option="option">
                                            <span class="d-flex justify-content-between">
                                                <span dir="rtl">{{ option.station_time.split('-')[0] }} {{
                                                    t('header.' + option.station_time.split('-')[1]) }}</span>
                                                <span>{{ option.station_name_ar }} </span>
                                            </span>
                                        </template>
                                    </v-select>
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
                                <div class="col-12">
                                    <button type="submit" class="book-bus-btn" @click="bookNow">{{ t('header.book_now')
                                    }}</button>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12">
                                    <b class="cancelation_policy">** {{ t('header.cancelation_policy') }}</b>
                                    <p class="cancelation">{{ t('header.cancelation_policy_text') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4">
                        <h6 class="title">{{ t('header.select_seat') }}</h6>

                        <div class="seat-plan-inner" dir="rtl">
                            <div class="single mb-2">
                                <span class="front">{{ t('header.BUS') }}</span>
                                <span class="driver">
                                    <div class="seat-wrapper">
                                        <div class="left-side">
                                            <div v-if="seats[1] == 0">
                                                <span class="seat" @click="getSeat(1, 'seatOne')" id="seatOne">
                                                    1
                                                    <span></span>
                                                </span>
                                            </div>
                                            <div v-if="seats[1] == 1">
                                                <span class="seat booked">
                                                    1
                                                    <span></span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                                <span class="lower"><img src="/src/assets/images/icons/wheel.svg" alt="icon"></span>

                                <div class="seat-wrapper">
                                    <div class="left-side"></div>
                                    <div class="right-side">
                                        <div v-if="seats[4] == 0">

                                            <span class="seat" @click="getSeat(4, 'seatFour')" id="seatFour">
                                                4
                                                <span></span>
                                            </span>
                                        </div>
                                        <div v-if="seats[3] == 0">
                                            <span class="seat" @click="getSeat(3, 'seatThree')" id="seatThree">
                                                3
                                                <span></span>
                                            </span>
                                        </div>
                                        <div v-if="seats[2] == 0">
                                            <span class="seat" @click="getSeat(2, 'seatTwo')" id="seatTwo">
                                                2
                                                <span></span>
                                            </span>
                                        </div>
                                        <div v-if="seats[4] == 1">

                                            <span class="seat booked">
                                                4
                                                <span></span>
                                            </span>
                                        </div>
                                        <div v-if="seats[3] == 1">
                                            <span class="seat booked">
                                                3
                                                <span></span>
                                            </span>
                                        </div>
                                        <div v-if="seats[2] == 1">
                                            <span class="seat booked">
                                                2
                                                <span></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="seat-wrapper">
                                    <div class="left-side">

                                        <div v-if="seats[7] == 0">
                                            <span class="seat" @click="getSeat(7, 'seatSeven')" id="seatSeven">
                                                7
                                                <span></span>
                                            </span>
                                        </div>
                                        <div v-if="seats[7] == 1">
                                            <span class="seat booked">
                                                7
                                                <span></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="right-side">

                                        <div v-if="seats[6] == 0">
                                            <span class="seat" @click="getSeat(6, 'seatSix')" id="seatSix">
                                                6
                                                <span></span>
                                            </span>
                                        </div>
                                        <div v-if="seats[5] == 0">
                                            <span class="seat" @click="getSeat(5, 'seatFive')" id="seatFive">
                                                5
                                                <span></span>
                                            </span>
                                        </div>

                                        <div v-if="seats[6] == 1">

                                            <span class="seat booked">
                                                6
                                                <span></span>
                                            </span>
                                        </div>
                                        <div v-if="seats[5] == 1">
                                            <span class="seat booked">
                                                5
                                                <span></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="seat-wrapper">
                                    <div class="left-side">
                                        <div v-if="seats[10] == 0">
                                            <span class="seat" @click="getSeat(10, 'seatTen')" id="seatTen">
                                                10
                                                <span></span>
                                            </span>
                                        </div>
                                        <div v-if="seats[10] == 1">
                                            <span class="seat booked">
                                                10
                                                <span></span>
                                            </span>
                                        </div>

                                    </div>
                                    <div class="right-side">

                                        <div v-if="seats[9] == 0">
                                            <span class="seat" @click="getSeat(9, 'seatNine')" id="seatNine">
                                                9
                                                <span></span>
                                            </span>
                                        </div>
                                        <div v-if="seats[9] == 1">
                                            <span class="seat booked">
                                                9
                                                <span></span>
                                            </span>
                                        </div>
                                        <div v-if="seats[8] == 0">
                                            <span class="seat" @click="getSeat(8, 'seatEight')" id="seatEight">
                                                8
                                                <span></span>
                                            </span>
                                        </div>
                                        <div v-if="seats[8] == 1">
                                            <span class="seat booked">
                                                8
                                                <span></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="seat-wrapper">

                                    <div class="left-side">
                                        <div v-if="seats[14] == 0">
                                            <span class="seat" @click="getSeat(14, 'seatFourteen')" id="seatFourteen">
                                                14
                                                <span></span>
                                            </span>
                                        </div>
                                        <div v-if="seats[14] == 1">
                                            <span class="seat booked">
                                                14
                                                <span></span>
                                            </span>
                                        </div>
                                        <div v-if="seats[13] == 0">
                                            <span class="seat" @click="getSeat(13, 'seatThirty')" id="seatThirty">
                                                13
                                                <span></span>
                                            </span>
                                        </div>
                                        <div v-if="seats[13] == 1">
                                            <span class="seat booked">
                                                13
                                                <span></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="right-side">
                                        <div v-if="seats[12] == 0">
                                            <span class="seat" @click="getSeat(12, 'seatEleven')" id="seatEleven">
                                                12
                                                <span></span>
                                            </span>
                                        </div>
                                        <div v-if="seats[12] == 1">
                                            <span class="seat booked">
                                                12
                                                <span></span>
                                            </span>
                                        </div>
                                        <div v-if="seats[11] == 0">
                                            <span class="seat" @click="getSeat(11, 'seatEleven')" id="seatEleven">
                                                11
                                                <span></span>
                                            </span>
                                        </div>
                                        <div v-if="seats[11] == 1">
                                            <span class="seat booked">
                                                11
                                                <span></span>
                                            </span>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div class="seat-for-reserved mt-0">
                                <div class="seat-condition">
                                    <span class="seat mx-1 available"><span></span></span>
                                    <p>{{ t('header.available_seats') }}</p>
                                </div>
                                <div class="seat-condition">
                                    <span class="seat mx-1 selected"><span></span></span>
                                    <p>{{ t('header.selected_by_you') }}</p>
                                </div>
                                <div class="seat-condition">
                                    <div class="seat mx-1 bookedd"><span></span></div>
                                    <p>{{ t('header.booked') }}</p>
                                </div>
                                <div class="seat-condition">
                                    <div class="seat mx-1 closed"><span></span></div>
                                    <p>{{ t('header.closed') }}</p>
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
            FromStation: [],
            ToStation: [],
            selected_seats: [],
            seats: {},
            from_station: '',
            to_station: '',

        }
    },
    methods: {
        async getAvilableSeat() {
            const token = localStorage.getItem('access_token');

            let formData = new FormData();
            formData.append('route_id', this.$route.params.route_id);
            formData.append('schedule_id', this.$route.params.schedule_id);
            try {
                const response = await axios.post('https://admin.starbusegypt.com/api/outside/RideBusSeats/getBusSeatsByScheduleInRoute', formData, {

                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }

                );

                if (response.status === 200) {
                    this.seats = response.data.data.Seats

                    // Store user data or redirect to the home page
                } else {
                    // Handle invalid credentials or other errors
                    console.error('Sign-in failed:', response.data);
                }
            } catch (error) {
                console.error(error);
            }
        },
        async getAllStations() {
            const token = localStorage.getItem('access_token');

            let formData = new FormData();
            formData.append('route_id', this.$route.params.route_id);
            formData.append('fromCity', this.$route.params.from);
            formData.append('toCity', this.$route.params.to);
            try {
                const response = await axios.post('https://admin.starbusegypt.com/api/outside/searchRide/get-station', formData, {

                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }

                );

                if (response.status === 200) {
                    console.log(response.data.data.from_city);
                    this.FromStation = response.data.data.from_city;
                    this.ToStation = response.data.data.to_city;
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
                if (this.hasClass(ele, 'selected')) {
                    this.selected_seats.push(val)
                } else {
                    var index = this.selected_seats.indexOf(val);
                    if (index !== -1) {
                        this.selected_seats.splice(index, 1);
                    }
                }
            }
            console.log(this.selected_seats);
        },
        hasClass(element, className) {
            return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
        },

        async bookNow() {
            if (this.from_station == '' || this.to_station == '' || this.selected_seats == '') {
                this.$notify({
                    type: "error",
                    title: this.t('header.station_message_required_seats'),
                });
            } else {
                console.log(this.from_station, this.to_station, this.selected_seats);
                const token = localStorage.getItem('access_token');

                let formData = new FormData();
                formData.append('route_id', this.$route.params.route_id);
                formData.append('schedule_id', this.$route.params.schedule_id);
                formData.append('from_station', this.from_station);
                formData.append('to_station', this.to_station);
                formData.append('booking_seats', this.selected_seats.toString());
                formData.append('date', this.$route.params.date);
                formData.append('type', 'web');
                formData.append('paymentType', 'kashier');
                try {
                    const response = await axios.post('https://admin.starbusegypt.com/api/outside/paymnet/payWithVisa', formData, {

                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }

                    );

                    if (response.status) {
                        window.location.href = `${response.data.data}`;

                    } else {
                        // Handle invalid credentials or other errors
                        console.error('Sign-in failed:', response.data);
                    }
                } catch (error) {
                    console.error(error);
                }

            }
        }
    },
    setup() {
        const { t } = useI18n()
        return { t }
    },
    mounted() {
        this.getAllStations();
        this.getAvilableSeat();
    }

}
</script>

<style>
.seat-wrapper .seat.selected {
    border-color: rgb(57, 163, 57);
    background: rgb(57, 163, 57);
    color: #fff;
}

.seat-wrapper .seat.booked {
    border-color: rgb(50, 50, 50);
    background: rgb(50, 50, 50);
    color: #fff;
}

.seat-wrapper .seat.booked span {
    border-color: rgb(149 149 149);
    background: rgb(50 50 50);
}

.seat-for-reserved .seat {
    width: 50px;
    height: 18px;
    border: 1px solid #979797;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    cursor: pointer;
    position: relative;
    margin-right: 10px;
}

.seat-for-reserved .seat.selected {

    background: rgb(21, 209, 49);
}

.seat-for-reserved .seat.bookedd {

    background: rgb(50, 50, 50);
}

.seat-for-reserved .seat.closed {

    background: #ff2929;
}

.seat-for-reserved .available span {
    border: 1px solid #979797;

}

.cancelation_policy {
    color: #424248;
    font-size: 16px;
}

.cancelation {
    color: #ff2929;
    font-size: 14px;
    font-weight: 600;
}
</style>