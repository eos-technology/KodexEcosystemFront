<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useErrorsStore } from '@/stores/errors'

export default defineComponent({
  name: 'ErrorComponent',
  setup() {
    const errorStore = useErrorsStore()
    const errors = computed(() => errorStore.getErrors)

    return {
      errors
    }
  }
})
</script>
<template>
  <div>
    <v-alert v-if="errors && errors.length > 0" type="error" variant="tonal" class="mb-4">
      <h5 class="text-h6 text-capitalize">Errores</h5>
      <div v-for="error in errors">{{ error }}</div>
    </v-alert>
  </div>
</template>
