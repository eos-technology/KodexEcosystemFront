<template>
  <v-card class="pa-4 pa-md-6 rounded-xl">
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
            :icon="hide ? 'mdi-eye-off' : 'mdi-eye'"
            @click="hide = !hide"
            size="44"
            rounded="lg"
            color="secondary"
            class="bg-secondary"
            flat
          ></v-btn>
        </article>
        <!-- Cards -->
        <CardsCrypto
          title="TRX / TRON"
          amount="0.000090"
          value="$0.0000"
          icon="tron"
          :hide="!hide"
        />
        <CardsCrypto
          title="BTC / BITCOIN"
          amount="0.000090"
          value="$0.0000"
          icon="btc"
          :hide="!hide"
        />
        <CardsCrypto
          title="TRX / TRON"
          amount="0.000090"
          value="$0.0000"
          icon="tron"
          :hide="!hide"
        />
        <CardsCrypto
          title="BNB / BINANCE"
          amount="0.000090"
          value="$0.0000"
          icon="tron"
          :hide="!hide"
        />
        <CardsCrypto
          title="BTC / BITCOIN"
          amount="0.000090"
          value="$0.0000"
          icon="btc"
          :hide="!hide"
        />
        <CardsCrypto
          title="BNB / BINANCE"
          amount="0.000090"
          value="$0.0000"
          icon="bnb"
          :hide="!hide"
        />
        <CardsCrypto
          title="USDT / TETHER USD"
          amount="0.000090"
          value="$0.0000"
          icon="usdt"
          :hide="!hide"
        />
        <CardsCrypto
          title="USDT / TETHER USD"
          amount="0.000090"
          value="$0.0000"
          icon="usdt"
          :hide="!hide"
        />
        <CardsCrypto title="XRP / XRP" amount="0.000090" value="$0.0000" icon="xrp" :hide="!hide" />
        <CardsCrypto title="XRP / XRP" amount="0.000090" value="$0.0000" icon="xrp" :hide="!hide" />
      </v-col>
      <v-col lg="9">
        <ReceiveCard />
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import BalanceCard from './content/BalanceCard.vue'
import CardsCrypto from './content/CardsCrypto.vue'
import ReceiveCard from './content/ReceiveCard.vue'
const hide = ref(false)
</script>
