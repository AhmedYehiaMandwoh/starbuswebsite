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
                            <div class="row pb-60 gy-4 justify-content-center">
                                <div class="col-lg-4 col-md-6 col-sm-10">
                                    <div class="dashboard-widget">
                                        <div class="dashboard-widget__content">
                                            <p>{{ t('header.total_wallet') }}</p>
                                            <h3 class="title">0</h3>
                                        </div>
                                        <div class="dashboard-widget__icon">
                                            <i class="las la-wallet"></i>
                                        </div>
                                    </div>
                                </div>
                               
                                <div class="col-lg-4 col-md-6 col-sm-10">
                                    <div class="dashboard-widget">
                                        <div class="dashboard-widget__content">
                                            <p>{{ t('header.total_pending_wallet') }}</p>
                                            <h3 class="title">0</h3>
                                        </div>
                                        <div class="dashboard-widget__icon">
                                            <i class="las la-ticket-alt"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

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
                                        <!-- <tr v-for="ticket in my_tickets">
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
                                        </tr> -->
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
  