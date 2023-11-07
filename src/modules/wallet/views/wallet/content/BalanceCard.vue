<template>
  <v-card class="balance pa-6 rounded-xl"
    ><v-card-text class="d-flex justify-space-between align-center"
      ><div>
        <p class="text-body-2 text-white">{{ $t('wallet.totalBalance') }}</p>
        <h4 class="text-h4 text-white">$0.0000</h4>
        <p class="text-body-1 text-white">$0.000 / USDT</p>
      </div>
      <div class="d-flex flex-column align-end">
        <img
          class="bg-surface pa-4 rounded-xl mb-1"
          src="@/assets/svg/dollar.svg"
          alt="dollar icon"
        />
        <div class="d-flex align-center">
          <img class="mr-1" src="@/assets/svg/trend-down.svg" alt="" />
          <p class="text-body-1 text-error mr-1">100%</p>
          <p class="text-body-1 text-error">$0.00</p>
        </div>
      </div>
    </v-card-text></v-card
  >
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.balance {
  background-image: url('@/assets/img/banner.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
