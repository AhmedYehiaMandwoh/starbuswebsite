<template>
    <main>
        <TopHeader class="cs-hide_print"/>
        <Navbar class="cs-hide_print"/>
        <!-- Account Section Starts Here -->
        <div class="container">
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <div class="invoice-box padding-top padding-bottom" dir="ltr">
                        <table class="">
                            <tbody>
                                <tr class="top">
                                    <td colspan="2">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td class="title">
                                                        <img src="/src/assets/images/logoIcon/logo.png" alt="Company logo"
                                                            style="width: 100%; max-width: 250px">
                                                    </td>

                                                    <td>
                                                        <b> {{ticket.invoice_number}}</b><br>
                                                        Created: {{ticket.date}}<br>
                                                        Order ID: {{ticket.order_id}}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>

                                <tr class="information">
                                    <td colspan="2">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <span class="ticket_number_text">Ticket Number </span><br>
                                                        <span class="ticket_number"><b>{{ticket.ticket_number}}</b>
                                                        </span>
                                                    </td>

                                                    <td>
                                                        <div class="cs-invoice_btns cs-hide_print">
                                                            <a href="javascript:window.print()"
                                                                class="cs-invoice_btn cs-color1">
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon"
                                                                    viewBox="0 0 512 512">
                                                                    <path
                                                                        d="M384 368h24a40.12 40.12 0 0040-40V168a40.12 40.12 0 00-40-40H104a40.12 40.12 0 00-40 40v160a40.12 40.12 0 0040 40h24"
                                                                        fill="none" stroke="currentColor"
                                                                        stroke-linejoin="round" stroke-width="32" />
                                                                    <rect x="128" y="240" width="256" height="208"
                                                                        rx="24.32" ry="24.32" fill="none"
                                                                        stroke="currentColor" stroke-linejoin="round"
                                                                        stroke-width="32" />
                                                                    <path
                                                                        d="M384 128v-24a40.12 40.12 0 00-40-40H168a40.12 40.12 0 00-40 40v24"
                                                                        fill="none" stroke="currentColor"
                                                                        stroke-linejoin="round" stroke-width="32" />
                                                                    <circle cx="392" cy="184" r="24" />
                                                                </svg>
                                                                <span>Print</span>
                                                            </a>
                                                        </div>
                                                    </td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>

                                <tr class="heading">
                                    <td>From</td>

                                    <td>To</td>
                                </tr>

                                <tr class="details">
                                    <td>To</td>

                                    <td>{{ticket.status}}</td>
                                </tr>
                                <tr class="heading">
                                    <td>Payment Method</td>

                                    <td>Status</td>
                                </tr>

                                <tr class="details">
                                    <td>paymob (visa)</td>

                                    <td>{{ticket.status}}</td>
                                </tr>

                                <tr class="heading">
                                    <td>Item</td>

                                    <td></td>
                                </tr>

                                <tr class="item">
                                    <td>Website design</td>

                                    <td>$300.00</td>
                                </tr>

                                <tr class="item">
                                    <td>Hosting (3 months)</td>

                                    <td>$75.00</td>
                                </tr>

                                <tr class="item last">
                                    <td>Domain name (1 year)</td>

                                    <td>$10.00</td>
                                </tr>

                                <tr class="total">
                                    <td></td>

                                    <td>Total: {{ticket.route_price}} {{t('header.egp')}}</td>
                                </tr>
                            </tbody>
                        </table>


                    </div>
                </div>
                <div class="col-md-3"></div>
            </div>
        </div>

        <!-- Account Section Ends Here -->
        <!-- <Footer class="cs-hide_print" /> -->
    </main>
</template>
<script>
import Navbar from '../components/Navbar.vue';
import TopHeader from '../components/TopHeader.vue'
import Footer from '../components/Footer.vue'
import { useI18n } from 'vue-i18n'
import axios from 'axios'
export default {
    components: {
        Navbar,
        TopHeader,
        Footer,


    },
    data() {
        return {
            ticket: {}
        }
    },
    methods: {
        async getBookingTicket() {
            const token = localStorage.getItem('access_token');

            let formData = new FormData();
            formData.append('uuid', this.$route.params.uuid);
            try {
                const response = await axios.post('https://mdsapps.net/api/outside/paymnet/BookingTicketForUser', formData, {

                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }

                );

                if (response.status === 200) {
                    this.ticket = response.data.data
                    // Store user data or redirect to the home page
                } else {
                    // Handle invalid credentials or other errors
                    console.error('Sign-in failed:', response.data);
                }
            } catch (error) {
                console.error(error);
            }
        },
    },
    mounted() {
        this.getBookingTicket()
    },
    setup() {
        const { t } = useI18n()
        return { t }
    },


}
</script>
<style>
.invoice-box {
    padding: 30px;
    margin-top: 30px;
    margin-bottom: 30px;
    border: 1px solid #eee;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    font-size: 16px;
    line-height: 24px;
    color: #555;
}

.invoice-box table {
    width: 100%;
    line-height: inherit;
    text-align: left;
    border-collapse: collapse;
}

.invoice-box table td {
    padding: 5px;
    vertical-align: top;
}

.invoice-box table tr td:nth-child(2) {
    text-align: right;
}

.invoice-box table tr.top table td {
    padding-bottom: 20px;
}

.invoice-box table tr.top table td.title {
    font-size: 45px;
    line-height: 45px;
    color: #333;
}

.invoice-box table tr.information table td {
    padding-bottom: 40px;
}

.invoice-box table tr.heading td {
    background: #eee;
    border-bottom: 1px solid #ddd;
    font-weight: bold;
}

.invoice-box table tr.details td {
    padding-bottom: 20px;
}

.invoice-box table tr.item td {
    border-bottom: 1px solid #eee;
}

.invoice-box table tr.item.last td {
    border-bottom: none;
}

.invoice-box table tr.total td:nth-child(2) {
    border-top: 2px solid #eee;
    font-weight: bold;
}

@media only screen and (max-width: 600px) {
    .invoice-box table tr.top table td {
        width: 100%;
        display: block;
        text-align: center;
    }

    .invoice-box table tr.information table td {
        width: 100%;
        display: block;
        text-align: center;
    }
}

.ticket_number_text {
    margin-bottom: 20px;
    font-weight: bold;
}

.ticket_number {
    font-size: 50px;
}


@media print {
    .cs-hide_print {
        display: none !important;
    }

    .cs-p-25-50 {
        padding: 25px !important;
    }

    body {
        background-color: #ffffff;
        height: 100%;
        overflow: hidden;
    }
}</style>