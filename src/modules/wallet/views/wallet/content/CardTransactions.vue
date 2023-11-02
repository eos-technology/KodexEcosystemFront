<template>
  <div class="d-flex align-center">
    <img
      class="bg-icon pa-4 rounded-xl mb-1 mr-4"
      :src="
        getFile({
          route: 'svg',
          url: `${icon}`,
          extension: 'svg'
        })
      "
      :alt="`${icon}`"
    />
    <!-- <img
      
      :src="`src/assets/svg/${icon}.svg`"
      alt="dollar icon"
    /> -->
    <div class="mr-4">
      <p class="text-subtitle-1 text-primary font-weight-medium">{{ title }}</p>
      <h5 class="text-h5 text-success font-weight-bold">{{ value }}</h5>
      <p class="text-subtitle-1 text-primary">{{ $t('wallet.receive') }} {{ date }}</p>
    </div>
    <v-btn rounded="lg" elevation="0" size="32px" @click="open = !open"
      ><i class="icon-arrow-right font-weight-bold"></i>
    </v-btn>
  </div>
  <!-- Modal -->
  <v-dialog width="500" v-model="open">
    <v-card title="Dialog">
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn text="Close Dialog" @click="open = false"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { getFile } from '@/helpers/Index'
const open = ref(false)
defineProps({
  title: String,
  value: String,
  date: String,
  icon: String
})
</script>

<style lang="scss" scoped></style>
