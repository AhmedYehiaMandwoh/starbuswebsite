<template>
    <div class="ticket-filter">
        <div class="filter-header filter-item">
            <h6 class="title mb-0">{{ t('header.my_profile') }}</h6>
        </div>
        <div class="filter-item">
            <ul class="bus-type">
                <li :class="this.$route.name == 'dashboard' ? 'activeside' : ''" >
                    <i class="las la-chart-bar mx-1" :class="this.$route.name == 'dashboard' ? 'activeside' : ''"></i>
                    <router-link to="/home/dashboard" :class="this.$route.name == 'dashboard' ? 'activeside' : ''">{{ t("header.dashboard") }}</router-link>
                </li>
                <li :class="this.$route.name == 'mytickets' ? 'activeside' : ''">
                    <i class="las la-ticket-alt mx-1" :class="this.$route.name == 'mytickets' ? 'activeside' : ''"></i>
                    <router-link to="/home/dashboard/mytickets" :class="this.$route.name == 'mytickets' ? 'activeside' : ''">{{ t('header.my_tickets') }}</router-link>
                </li>
                <li :class="this.$route.name == 'wallet' ? 'activeside' : ''">
                    <i class="las la-wallet mx-1" :class="this.$route.name == 'wallet' ? 'activeside' : ''"></i>
                    <router-link to="/home/dashboard/wallet" :class="this.$route.name == 'wallet' ? 'activeside' : ''">{{ t('header.wallet') }}</router-link>
                </li>
                <li :class="this.$route.name == 'points' ? 'activeside' : ''">
                    <i class="las la-coins mx-1" :class="this.$route.name == 'points' ? 'activeside' : ''"></i>
                    <router-link to="/home/dashboard/points" :class="this.$route.name == 'points' ? 'activeside' : ''">{{ t('header.points') }}</router-link>
                </li>
                <!-- <li :class="this.$route.name == 'profile' ? 'activeside' : ''">
                    <i class="las la-cog mx-1" :class="this.$route.name == 'profile' ? 'activeside' : ''"></i>
                    <router-link to="/home/dashboard/profile" :class="this.$route.name == 'profile' ? 'activeside' : ''">{{ t('header.profile') }}</router-link>
                </li> -->
                <li :class="this.$route.name == 'changepassword' ? 'activeside' : ''">
                    <i class="las la-key mx-1" :class="this.$route.name == 'changepassword' ? 'activeside' : ''"></i>
                    <router-link to="/home/dashboard/changepassword" :class="this.$route.name == 'changepassword' ? 'activeside' : ''">{{ t('header.change_password') }}</router-link>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>

import { useI18n } from 'vue-i18n'
export default {
    setup() {
        const { t } = useI18n()
        return { t }
    },
    data() {
        return {
            
        }
    },
    mounted() {
        console.log(this.$route.name);
    }
}
</script>

<style>
.activeside {
    color: #f29100;
}
</style>