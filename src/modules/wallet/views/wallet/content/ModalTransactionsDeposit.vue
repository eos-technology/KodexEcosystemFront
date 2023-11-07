<template>
  <v-card class="pa-4 rounded-xl bg-white">
    <v-card-title class="d-flex justify-space-between align-center"
      ><h5 class="text-h5 text-primary font-weight-bold">{{ $t('wallet.detailDeposit') }}</h5>
      <v-btn class="bg-secondary" size="32" rounded="xl" @click="$emit('closeModal')" flat
        ><i class="icon-close"></i
      ></v-btn>
    </v-card-title>

    <v-card-item>
      <div class="d-flex justify-space-between align-center">
        <div class="d-flex align-center">
          <img
            class="bg-icon pa-4 rounded-xl mr-4"
            :src="
              getFile({
                route: 'svg',
                url: 'tron',
                extension: 'svg'
              })
            "
            alt="tron"
          />
          <div class="">
            <p class="text-subtitle-1 text-primary font-weight-medium">TRX / TRON</p>
            <h5 class="text-h5 text-success font-weight-bold">0.000090</h5>
          </div>
        </div>

        <div>
          <p class="text-body-1 text-primary-darken-1 d-flex justify-space-between">
            Fecha: <span class="font-weight-bold ml-2">10/10/2023</span>
          </p>
          <p class="text-body-1 text-primary-darken-1 d-flex justify-space-between">
            Hora: <span class="font-weight-bold ml-2">10:59 AM</span>
          </p>
        </div>
      </div>
    </v-card-item>

    <v-divider class="my-8"></v-divider>

    <div>
      <div class="mb-4">
        <label for="address">
          <p class="text-body-2 text-grey-darken-1">{{ $t('wallet.address') }}</p>
          <v-text-field
            class="inpt"
            elevation-0
            density="compact"
            hide-details
            variant="solo-filled"
            id="address"
            readonly
            placeholder="TQpayT2c2KKrmKJt4QjLSWnGtScaPbqqPP"
          >
            <template v-slot:append-inner>
              <v-icon>
                <i class="icon-copy bg-info pa-2 rounded-lg mr-4" :title="$t('wallet.copy')"></i>
              </v-icon>
            </template>
          </v-text-field>
        </label>
      </div>
    </div>

    <v-divider class="my-6"></v-divider>

    <div class="text-center">
      <img src="@/assets/svg/check.svg" alt="" />
      <h5 class="text-h5 text-primary font-weight-bold">{{ $t('wallet.allReady') }}</h5>
      <p class="text-subtitle-1 text-primary-darken-1 font-weight-medium">
        {{ $t('wallet.receiveSuccess') }}
      </p>
    </div>
  </v-card>
</template>

<script lang="ts" setup>
import { getFile } from '@/helpers/Index'
defineEmits(['closeModal'])
</script>

<style lang="scss" scoped>
i {
  font-size: 12px;
  cursor: pointer;
}
</style>
