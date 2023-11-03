<template>
  <v-card class="my-2 rounded-xl elevation-0 bg-white"
    ><v-card-text class="d-flex justify-space-between align-center py-1"
      ><div>
        <p class="text-subtitle-1 text-primary font-weight-medium">{{ title }}</p>
        <h5 v-if="hide === false" class="text-h5 text-primary-darken-1 font-weight-bold">
          {{ amount }}
        </h5>
        <p v-if="hide === false" class="text-subtitle-1 text-primary">{{ value }}</p>
        <h5 v-if="hide" class="text-h5 text-primary-darken-1 font-weight-bold">********</h5>
        <p v-if="hide" class="text-subtitle-1 text-primary">********</p>
      </div>
      <div class="d-flex flex-column align-end">
        <img
          class="bg-icon pa-4 rounded-xl mb-1"
          :src="
            getFile({
              route: 'svg',
              url: `${icon}`,
              extension: 'svg'
            })
          "
          :alt="`${icon}`"
        />
      </div> </v-card-text
  ></v-card>
</template>

<script lang="ts" setup>
import getFile from '@/helpers/getFile'
defineProps({
  title: String,
  amount: String,
  value: String,
  icon: String,
  hide: Boolean
})
</script>

<style lang="scss" scoped></style>
