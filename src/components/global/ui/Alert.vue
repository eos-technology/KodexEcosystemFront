<template>
  <div>
    <v-alert
      v-model="alert"
      border="start"
      variant="tonal"
      closable
      close-label="Close Alert"
      color="info"
      title="Closable Alert"
    >
      Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut neque. Cras dapibus. Vivamus
      consectetuer hendrerit lacus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam
      libero, non adipiscing dolor urna a orci. Sed mollis, eros et ultrices tempus, mauris ipsum
      aliquam libero, non adipiscing dolor urna a orci. Curabitur blandit mollis lacus. Curabitur
      ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
    </v-alert>

    <div class="text-center">
      <v-btn @click="toggleAlert"> Reset {{ alert }} </v-btn>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { formatDate } from '@/helpers/Index'
formatDate()
let alert = ref(true)

const toggleAlert = () => {
  alert.value = !alert.value
}
</script>
