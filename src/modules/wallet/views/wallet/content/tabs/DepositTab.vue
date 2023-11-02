<template>
  <div class="mt-8">
    <label for="amount">
      <p class="text-body-2 text-grey-darken-1">{{ $t('wallet.amount') }}</p>
      <v-text-field
        class="inpt"
        elevation-0
        density="compact"
        hide-details
        variant="solo-filled"
        id="amount"
        placeholder="$0.000 = $0.000"
        type="number"
      >
      </v-text-field>
      <div class="d-flex justify-space-between align-center">
        <p class="text-body-2 text-grey-darken-1">Fee $0.000</p>
        <p class="text-body-2 text-grey-darken-1">Max $0.000</p>
      </div>
    </label>
  </div>
  <div class="mt-8">
    <label for="amount">
      <p class="text-body-2 text-grey-darken-1">{{ $t('wallet.amount') }}</p>
      <v-text-field
        class="inpt"
        elevation-0
        density="compact"
        hide-details
        variant="solo-filled"
        id="amount"
        placeholder="Copia dirección de wallet "
      >
        <template v-slot:append-inner>
          <v-icon class="mr-4">
            <i class="icon-qr text-primary-darken-1 bg-white pa-2 rounded-lg"></i>
          </v-icon>
          <v-icon class="mx-2">
            <i class="icon-copy bg-info pa-2 rounded-lg"></i>
          </v-icon>
        </template>
      </v-text-field>
    </label>
  </div>
  <v-divider class="my-8"></v-divider>

  <v-card-text class="d-flex justify-space-between align-center">
    <div>
      <p class="text-body-2 text-primary font-weight-medium">Cantidad a recibir</p>
      <h5 class="text-h5 text-primary-darken-1 font-weight-bold">0.000090</h5>
    </div>
    <div class="d-flex flex-column align-end">
      <img class="bg-icon pa-4 rounded-xl mb-1" src="@/assets/svg/tron.svg" alt="dollar icon" />
    </div>
  </v-card-text>
  <v-card-actions>
    <v-btn class="btn bg-primary w-100"><p>Enviar</p></v-btn>
  </v-card-actions>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
i {
  font-size: 12px;
  cursor: pointer;
}
</style>
