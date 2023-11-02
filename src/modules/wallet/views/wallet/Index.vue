<template>
  <v-card class="pa-6 rounded-xl">
    <v-row>
      <v-col lg="3">
        <BalanceCard class="mb-6" />
        <!-- Button Search -->
        <article class="d-flex align-center">
          <v-text-field
            class="inpt inpt-search mr-3 flat"
            elevation-0
            density="compact"
            hide-details
            type="search"
            variant="solo-filled"
            color="secondary"
            placeholder="Search"
            flat
          >
            <template v-slot:prepend-inner>
              <v-icon>
                <img src="@/assets/svg/search.svg" alt="" />
              </v-icon>
            </template>
          </v-text-field>
          <v-btn
            :type="visible ? 'text' : 'password'"
            :icon="visible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
            @click:append-inner="visible = !visible"
            size="44"
            rounded="lg"
            color="secondary"
            class="bg-secondary"
            flat
          ></v-btn>
        </article>
        <!-- Cards -->
        <CardsCrypto title="TRX / TRON" amount="0.000090" value="$0.0000" icon="tron" />
        <CardsCrypto title="BTC / BITCOIN" amount="0.000090" value="$0.0000" icon="btc" />
        <CardsCrypto title="TRX / TRON" amount="0.000090" value="$0.0000" icon="tron" />
        <CardsCrypto title="BNB / BINANCE" amount="0.000090" value="$0.0000" icon="tron" />
        <CardsCrypto title="BTC / BITCOIN" amount="0.000090" value="$0.0000" icon="btc" />
        <CardsCrypto title="BNB / BINANCE" amount="0.000090" value="$0.0000" icon="bnb" />
        <CardsCrypto title="USDT / TETHER USD" amount="0.000090" value="$0.0000" icon="usdt" />
        <CardsCrypto title="USDT / TETHER USD" amount="0.000090" value="$0.0000" icon="usdt" />
        <CardsCrypto title="XRP / XRP" amount="0.000090" value="$0.0000" icon="xrp" />
        <CardsCrypto title="XRP / XRP" amount="0.000090" value="$0.0000" icon="xrp" />
      </v-col>
      <v-col lg="9">
        <ReceiveCard max-width="456" class="mx-auto" />
        <RecentTransactions />
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import BalanceCard from './content/BalanceCard.vue'
import CardsCrypto from './content/CardsCrypto.vue'
import ReceiveCard from './content/ReceiveCard.vue'
import RecentTransactions from './content/RecentTransactions.vue'
const visible = ref(false)
</script>
