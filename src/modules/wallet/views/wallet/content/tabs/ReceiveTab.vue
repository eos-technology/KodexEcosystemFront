<template>
  <img class="d-block mb-8 mx-auto" src="@/assets/svg/qr.svg" alt="" />
  <div class="mb-8">
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
            <i class="icon-copy bg-info pa-2 rounded-lg" :title="$t('wallet.copy')"></i>
          </v-icon>
        </template>
      </v-text-field>
    </label>
  </div>
  <label for="share">
    <p class="text-body-2 text-grey-darken-1">{{ $t('wallet.link') }}</p>
    <v-text-field
      class="inpt"
      elevation-0
      density="compact"
      hide-details
      variant="solo-filled"
      id="share"
      readonly
      placeholder="TQpayT2c2KKrmKJt4QjLSWnGtScaPbqqPP"
    >
      <template v-slot:append-inner>
        <v-icon>
          <i class="icon-send bg-info pa-2 rounded-lg" :title="$t('wallet.share')"></i>
        </v-icon>
      </template>
    </v-text-field>
  </label>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
i {
  font-size: 12px;
  cursor: pointer;
}
</style>
