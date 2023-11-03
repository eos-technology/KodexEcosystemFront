<template>
  <v-card max-width="456" class="pa-6 rounded-xl w-auto elevation-1 bg-white mx-auto">
    <!-- Header Card -->
    <h4 class="text-h4 font-weight-bold mb-2">{{ $t('wallet.receive') }}</h4>

    <v-card-text class="d-flex justify-space-between align-center">
      <div>
        <p class="text-subtitle-1 text-primary font-weight-medium">TRX / TRON</p>
        <h5 class="text-h5 text-primary-darken-1 font-weight-bold">0.000090</h5>
        <p class="text-subtitle-1 text-primary">$0.0000</p>
      </div>
      <div class="d-flex flex-column align-end">
        <img class="bg-icon pa-4 rounded-xl mb-1" src="@/assets/svg/tron.svg" alt="dollar icon" />
      </div>
    </v-card-text>

    <v-divider class="my-8"></v-divider>

    <v-tabs class="tabs-rounded mb-8" align-tabs="center" v-model="tab">
      <v-tab value="one">{{ $t('wallet.receive') }}</v-tab>
      <v-tab value="two">{{ $t('wallet.deposit') }}</v-tab>
    </v-tabs>
    <!-- Radio buttons -->
    <p class="text-body-2 text-grey-darken-1">{{ $t('wallet.selectRed') }}</p>
    <v-radio-group v-model="selectedRadio" density="compact" hide-details color="primary" inline>
      <label
        :class="selectedRadio == 1 ? 'radio-btns' : ''"
        class="d-flex align-center py-3 px-2 rounded-lg w-50"
        for="opt1"
      >
        <v-radio hide-details value="1" id="opt1"
          ><template v-slot:label>
            <div>
              <p class="text-body-1 text-primary font-weight-bold">BEP20</p>
              <p class="text-body-2 text-primary-darken-1">{{ $t('wallet.chain') }}</p>
            </div>
          </template></v-radio
        >
      </label>
      <label
        :class="selectedRadio == 2 ? 'radio-btns' : ''"
        class="d-flex align-center py-3 px-2 rounded-lg w-50"
        for="opt2"
      >
        <v-radio hide-details value="2" id="opt2">
          <template v-slot:label>
            <div>
              <p class="text-body-1 text-primary font-weight-bold">BEP20</p>
              <p class="text-body-2 text-primary-darken-1">{{ $t('wallet.chain') }}</p>
            </div>
          </template>
        </v-radio>
      </label>
    </v-radio-group>
    <!-- Tabs -->
    <v-window v-model="tab">
      <v-window-item class="theme__buttons pt-8" value="one"> <ReceiveTab /></v-window-item>

      <v-window-item class="theme__buttons" value="two">
        <DepositTab />
      </v-window-item>
    </v-window>
  </v-card>
  <RecentTransactions v-if="tab === 'one'" />
  <RecentTransactionsDeposit v-if="tab === 'two'" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ReceiveTab from './tabs/ReceiveTab.vue'
import DepositTab from './tabs/DepositTab.vue'
import RecentTransactions from './RecentTransactions.vue'
import RecentTransactionsDeposit from './RecentTransactionsDeposit.vue'

const tab = ref(null)
const selectedRadio = ref(null)
</script>

<style lang="scss" scoped>
.radio-btns {
  border: 1px solid #001e62;
  border-radius: 16px;
}
</style>
