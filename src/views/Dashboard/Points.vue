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
                                            <p>{{ t('header.total_points') }}</p>
                                            <h3 class="title">0</h3>
                                        </div>
                                        <div class="dashboard-widget__icon">
                                            <i class="las la-coins"></i>
                                        </div>
                                    </div>
                                </div>
                               
                                <div class="col-lg-4 col-md-6 col-sm-10">
                                    <div class="dashboard-widget">
                                        <div class="dashboard-widget__content">
                                            <p>{{ t('header.total_pending_points') }}</p>
                                            <h3 class="title">0</h3>
                                        </div>
                                        <div class="dashboard-widget__icon">
                                            <i class="las la-coins"></i>
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
                                        <!-- <tr>
                                            <td class="ticket-no" data-label="PNR Number">CDQKQAB68G</td>
                                            <td class="" data-label="AC / Non-Ac">Non-Ac</td>
                                            <td class="pickup" data-label="Starting Point">Kansas</td>
                                            <td class="drop" data-label="Dropping Point">Wichita</td>
                                            <td class="date" data-label="Journey Date">09 Nov, 2023</td>
                                            <td class="time" data-label="Pickup Time">08:00 am</td>
                                            <td class="seats" data-label="Booked Seats">1-A1,1-A2</td>
                                            <td data-label="Status">
                                                <span class="badge badge--danger"> Rejected</span>
                                            </td>
                                            <td class="fare" data-label="Fare">40.00 USD</td>
                                            <td class="action" data-label="Action">
                                                <div class="action-button-wrapper">
                                                    <a href="javascript::void(0)" class="checkinfo"
                                                        data-info="{&quot;id&quot;:996,&quot;user_id&quot;:717,&quot;gender&quot;:1,&quot;trip_id&quot;:1,&quot;source_destination&quot;:[&quot;1&quot;,&quot;3&quot;],&quot;pickup_point&quot;:1,&quot;dropping_point&quot;:3,&quot;seats&quot;:[&quot;1-A1&quot;,&quot;1-A2&quot;],&quot;ticket_count&quot;:2,&quot;unit_price&quot;:&quot;20.00000000&quot;,&quot;sub_total&quot;:&quot;40.00000000&quot;,&quot;date_of_journey&quot;:&quot;2023-11-09&quot;,&quot;pnr_number&quot;:&quot;CDQKQAB68G&quot;,&quot;status&quot;:0,&quot;created_at&quot;:&quot;2023-11-09T03:27:07.000000Z&quot;,&quot;updated_at&quot;:&quot;2023-11-09T03:27:07.000000Z&quot;,&quot;photo&quot;:{},&quot;trip&quot;:{&quot;id&quot;:1,&quot;title&quot;:&quot;AC - Kansas - Echo Bass&quot;,&quot;fleet_type_id&quot;:3,&quot;vehicle_route_id&quot;:1,&quot;schedule_id&quot;:3,&quot;start_from&quot;:{&quot;id&quot;:1,&quot;name&quot;:&quot;Kansas&quot;,&quot;city&quot;:&quot;Kansas&quot;,&quot;location&quot;:&quot;Kansass&quot;,&quot;mobile&quot;:&quot;011111111111&quot;,&quot;status&quot;:1,&quot;created_at&quot;:&quot;2022-02-16T11:49:15.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-24T07:34:48.000000Z&quot;},&quot;end_to&quot;:{&quot;id&quot;:5,&quot;name&quot;:&quot;Echo Bass&quot;,&quot;city&quot;:&quot;Echo Bass&quot;,&quot;location&quot;:&quot;Echo Bass&quot;,&quot;mobile&quot;:&quot;124512&quot;,&quot;status&quot;:1,&quot;created_at&quot;:&quot;2022-02-16T11:50:19.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-16T11:50:19.000000Z&quot;},&quot;day_off&quot;:[&quot;5&quot;],&quot;status&quot;:1,&quot;created_at&quot;:&quot;2022-02-16T13:30:28.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-16T13:30:28.000000Z&quot;,&quot;fleet_type&quot;:{&quot;id&quot;:3,&quot;name&quot;:&quot;AC&quot;,&quot;seat_layout&quot;:&quot;2 x 2&quot;,&quot;deck&quot;:1,&quot;deck_seats&quot;:[&quot;40&quot;],&quot;facilities&quot;:[&quot;Water Bottle&quot;,&quot;Pillow&quot;,&quot;Wifi&quot;],&quot;has_ac&quot;:0,&quot;status&quot;:1,&quot;created_at&quot;:&quot;2022-02-13T11:59:38.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-16T13:40:22.000000Z&quot;},&quot;schedule&quot;:{&quot;id&quot;:3,&quot;start_from&quot;:&quot;08:00:00&quot;,&quot;end_at&quot;:&quot;16:30:00&quot;,&quot;status&quot;:1,&quot;created_at&quot;:&quot;2022-02-13T12:42:21.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-13T12:42:29.000000Z&quot;}},&quot;pickup&quot;:{&quot;id&quot;:1,&quot;name&quot;:&quot;Kansas&quot;,&quot;city&quot;:&quot;Kansas&quot;,&quot;location&quot;:&quot;Kansass&quot;,&quot;mobile&quot;:&quot;011111111111&quot;,&quot;status&quot;:1,&quot;created_at&quot;:&quot;2022-02-16T11:49:15.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-24T07:34:48.000000Z&quot;},&quot;drop&quot;:{&quot;id&quot;:3,&quot;name&quot;:&quot;Wichita&quot;,&quot;city&quot;:&quot;Wichita&quot;,&quot;location&quot;:&quot;Wichita&quot;,&quot;mobile&quot;:&quot;022222222&quot;,&quot;status&quot;:1,&quot;created_at&quot;:&quot;2022-02-16T11:49:57.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-16T11:49:57.000000Z&quot;}}"
                                                        data-bs-toggle="modal" data-bs-target="#infoModal"><i
                                                            class="las la-info-circle"></i></a>
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
  