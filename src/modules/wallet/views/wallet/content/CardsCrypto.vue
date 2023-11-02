<template>
  <v-card class="my-4 rounded-xl elevation-0 bg-white"
    ><v-card-text class="d-flex justify-space-between align-center"
      ><div>
        <p class="text-subtitle-1 text-primary font-weight-medium">{{ title }}</p>
        <h5 class="text-h5 text-primary-darken-1 font-weight-bold">{{ amount }}</h5>
        <p class="text-subtitle-1 text-primary">{{ value }}</p>
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
  icon: String
})
</script>

<style lang="scss" scoped></style>
