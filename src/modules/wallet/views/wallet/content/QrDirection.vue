<template>
  <v-card class="pa-4 rounded-xl bg-white">
    <v-card-title class="d-flex justify-space-between align-center"
      ><h5 class="text-h5 text-primary font-weight-bold">{{ $t('wallet.qrReceive') }}</h5>
      <v-btn class="bg-secondary" size="32" rounded="xl" @click="$emit('closeModal')" flat
        ><i class="icon-close"></i
      ></v-btn>
    </v-card-title>

    <v-divider class="my-8"></v-divider>

    <img class="d-block mx-auto mb-8" src="@/assets/svg/qr.svg" alt="" />

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
  </v-card>
</template>

<script lang="ts" setup>
defineEmits(['closeModal'])
</script>

<style lang="scss" scoped>
i {
  font-size: 12px;
  cursor: pointer;
}
</style>
