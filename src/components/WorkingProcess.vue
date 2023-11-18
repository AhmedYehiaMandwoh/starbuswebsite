<template>
    <!-- Working Process Section Starts Here -->
    <section class="working-process padding-top padding-bottom">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6 col-md-10">
                    <div class="section-header text-center">
                        <h2 class="title">{{ t('header.getTicketSteps') }}</h2>
                        <p>{{ t('header.paraSteps') }}</p>
                    </div>
                </div>
            </div>
            <div class="row g-4 gy-md-5 justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-10">
                    <div class="working-process-item">
                        <div class="thumb-wrapper">
                            <span>01</span>
                            <div class="thumb">
                                <i class="las la-search"></i>
                            </div>
                        </div>
                        <div class="content">
                            <h4 class="title">{{ t('header.search_ticket_bus') }} </h4>
                            <p>{{ t('header.secondStep')  }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-10">
                    <div class="working-process-item">
                        <div class="thumb-wrapper">
                            <span>02</span>
                            <div class="thumb">
                                <i class="las la-ticket-alt"></i>
                            </div>
                        </div>
                        <div class="content">
                            <h4 class="title">{{ t('header.choose_ticket_bus') }} </h4>
                            <p>{{t('header.thirdStep') }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-10">
                    <div class="working-process-item">
                        <div class="thumb-wrapper">
                            <span>03</span>
                            <div class="thumb">
                                <i class="las la-money-bill-wave-alt"></i>
                            </div>
                        </div>
                        <div class="content">
                            <h4 class="title">{{ t('header.pay_bill') }} </h4>
                            <p>{{t('header.thirdStep') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Working Process Section Ends Here -->
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
<style></style>