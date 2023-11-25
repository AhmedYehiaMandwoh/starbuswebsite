<template>
    <main>
        <TopHeader />
        <Navbar />
        <!-- Account Section Starts Here -->
        <section class="ticket-section padding-bottom section-bg padding-top">
            <div class="container">
                <div class="row gy-5">
                    <div class="col-md-3">
                        <Sidebar />

                    </div>
                    <div class="col-md-9">
                        <div class="dashboard-wrapper">
                          
                            <div class="booking-table-wrapper">
                                <table class="booking-table">
                                    <thead>
                                        <tr>
                                            <th>{{t('header.order_id')}}</th>
                                            <th>{{t('header.From_City')}}</th>
                                            <th>{{t('header.To_City')}}</th>
                                            <th>{{t('header.date')}}</th>
                                            <th>{{t('header.seats')}}</th>
                                            <th>{{t('header.time')}}</th>
                                            <th>{{t('header.invoice_number')}}</th>
                                            <th>{{t('header.status')}}</th>
                                            <th>{{t('header.price')}}</th>
                                            <th>{{t('header.ticket_number')}}</th>
                                            <th>{{t('header.view')}}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="ticket in my_tickets">
                                            <td class="ticket-no" data-label="PNR Number">{{ticket.order_id}}</td>
                                            <td class="" data-label="AC / Non-Ac">{{ticket.fromCity.name}}</td>
                                            <td class="pickup" data-label="Starting Point">{{ticket.toCity.name}}</td>
                                            <td class="drop" data-label="Dropping Point">{{ticket.date}}</td>
                                            <td class="date" data-label="Journey Date">{{ticket.passengers}}</td>
                                            <td class="date" data-label="Journey Date">{{ticket.time}}</td>
                                            <td class="seats" data-label="Booked Seats">{{ticket.invoice_number}}</td>                                            
                                            <td data-label="Status">
                                                <span class="badge badge--success">{{ticket.status}}</span>
                                            </td>
                                            <td class="fare" data-label="Fare">{{ticket.route_price}}</td>
                                            <td class="fare" data-label="Fare">{{ticket.ticket_number}}</td>
                                            <td class="action" data-label="Action">
                                                <div class="action-button-wrapper" @click="viewTicket(ticket.uuid)">
                                                    <i class="las la-eye"></i>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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
import Navbar from '../../components/Navbar.vue';
import TopHeader from '../../components/TopHeader.vue'
import Footer from '../../components/Footer.vue'
import Sidebar from '../../components/MysideBar.vue'
import { useI18n } from 'vue-i18n'
import axios from 'axios'
export default {
    components: {
        Navbar,
        TopHeader,
        Footer,
        Sidebar
    },
    data() {
        return {
            my_tickets: []
        }
    },
    methods: {
        async getMyTickets() {
            const user = JSON.parse(localStorage.getItem('user'))
            const token = localStorage.getItem('access_token');
            let formData = new FormData();
            formData.append('user_id', user.id);
            try {
                const response = await axios.post('https://mdsapps.net/api/outside/paymnet/MyTicket', formData, {

                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }

                );

                if (response.status === 200) {
                    this.my_tickets = response.data.data

                    // Store user data or redirect to the home page
                } else {
                    // Handle invalid credentials or other errors
                    console.error('Sign-in failed:', response.data);
                }
            } catch (error) {
                console.error(error);
            }
        },
        viewTicket(uuid) {
            this.$router.push("/home/invoice/" + uuid);

        }
    },
    setup() {
        const { t } = useI18n()
        return { t }
    },
    mounted() {
        this.getMyTickets()
    },
    setup() {
        const { t } = useI18n()
        return { t }
    }
}
</script>

<style>
.action-button-wrapper {
    cursor: pointer;
}

.action-button-wrapper .la-eye {
    font-size: 18px;
}

.action-button-wrapper .la-eye:hover {
    color: #f29100;
}
</style>
  