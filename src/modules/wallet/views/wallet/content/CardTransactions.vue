<template>
  <div class="d-flex align-center">
    <img
      class="bg-icon pa-4 rounded-xl mr-4"
      :src="
        getFile({
          route: 'svg',
          url: `${icon}`,
          extension: 'svg'
        })
      "
      :alt="`${icon}`"
    />
    <div class="mr-4">
      <p class="text-subtitle-1 text-primary font-weight-medium">{{ title }}</p>
      <h5 class="text-h5 text-success font-weight-bold">{{ value }}</h5>
      <p class="text-subtitle-1 text-primary" v-if="deposit === false">
        {{ $t('wallet.receive') }} {{ date }}
      </p>
      <p class="text-subtitle-1 text-primary" v-if="deposit">
        {{ $t('wallet.deposit') }} {{ date }}
      </p>
    </div>
    <!-- Btn Receive -->
    <v-btn v-if="deposit === false" rounded="lg" elevation="0" size="32px" @click="showModal = true"
      ><i class="icon-arrow-right font-weight-bold"></i>
    </v-btn>
    <!-- Btn Deposit -->
    <v-btn v-if="deposit" rounded="lg" elevation="0" size="32px" @click="showModalDeposit = true"
      ><i class="icon-arrow-right font-weight-bold"></i>
    </v-btn>
  </div>
  <!-- Modal Receive -->
  <v-dialog width="500" v-model="showModal">
    <ModalTransactions @close-modal="showModal = false" />
  </v-dialog>
  <!-- Modal Deposit -->
  <v-dialog width="500" v-model="showModalDeposit">
    <ModalTransactionsDepositVue @close-modal="showModalDeposit = false" />
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { getFile } from '@/helpers/Index'
import ModalTransactions from './ModalTransactions.vue'
import ModalTransactionsDepositVue from './ModalTransactionsDeposit.vue'
const showModal = ref(false)
const showModalDeposit = ref(false)
defineProps({
  title: String,
  value: String,
  date: String,
  icon: String,
  deposit: Boolean
})
</script>

<style lang="scss" scoped>
i {
  font-size: 12px;
  cursor: pointer;
}
</style>
