<template>
  <v-card class="bg-white pa-6 rounded-xl mt-8"
    ><h5 class="text-h5 font-weight-bold">Transacciones recientes</h5>
    <div class="grid">
      <CardTransactions icon="tron" title="TRX / TRON" value="0.000090" date="10/10/2023" />
      <CardTransactions icon="tron" title="TRX / TRON" value="0.000090" date="10/10/2023" />
      <CardTransactions icon="tron" title="TRX / TRON" value="0.000090" date="10/10/2023" />
      <CardTransactions icon="btc" title="TRX / TRON" value="0.000090" date="10/10/2023" />
      <CardTransactions icon="usdt" title="TRX / TRON" value="0.000090" date="10/10/2023" />
      <CardTransactions icon="xrp" title="TRX / TRON" value="0.000090" date="10/10/2023" />
    </div>
  </v-card>
</template>

<script lang="ts" setup>
import CardTransactions from './CardTransactions.vue'
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px 40px;
  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
}
</style>
