<template>
  <v-card class="pa-4 pa-md-6 rounded-lg border elevation-0 theme">
    <!-- Tabs -->
    <!-- Para centrar se puede usar start - center - end -->
    <v-tabs class="tabs-line" align-tabs="start" v-model="tab">
      <v-tab value="one">Item One</v-tab>
      <v-tab value="two">Item Two</v-tab>
      <v-tab value="three">Item Three</v-tab>
    </v-tabs>
    <!-- Para centrar se puede usar start - center - end -->
    <v-tabs class="tabs-rounded" align-tabs="center" v-model="tab">
      <v-tab value="one">Item One</v-tab>
      <v-tab value="two">Item Two</v-tab>
      <v-tab value="three">Item Three</v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item class="theme__buttons" value="one">
        <v-btn class="btn" color="primary">Botón primary</v-btn>
        <v-btn class="btn" color="secondary">Botón secondary</v-btn>
        <v-btn class="btn" color="error">Botón error</v-btn>
        <v-btn class="btn" color="info">Botón info</v-btn>
        <v-btn class="btn" color="success">Botón success</v-btn>
        <v-btn class="btn" color="warning">Botón warning</v-btn>
        <v-btn class="btn" color="disable">Botón warning</v-btn>
      </v-window-item>

      <v-window-item class="theme__buttons" value="two">
        <v-btn class="btn" variant="outlined" color="primary">Botón primary</v-btn>
        <v-btn class="btn" variant="outlined" color="secondary">
          <p class="text-primary">Botón secondary</p>
        </v-btn>
        <v-btn class="btn" variant="outlined" color="error">Botón error</v-btn>
        <v-btn class="btn" variant="outlined" color="info">Botón info</v-btn>
        <v-btn class="btn" variant="outlined" color="success">Botón success</v-btn>
        <v-btn class="btn" variant="outlined" color="warning">Botón warning</v-btn>
        <v-btn class="btn" variant="outlined" color="disable">Botón warning</v-btn>
      </v-window-item>
    </v-window>

    <v-radio-group density="compact" hide-details color="primary" inline>
      <v-radio label="Radio 1" value="1"></v-radio>
      <v-radio label="Radio 2" value="2"></v-radio>
      <v-radio label="Radio 3" value="3"></v-radio>
    </v-radio-group>

    <v-checkbox density="compact" hide-details color="primary" label="Checkbox"></v-checkbox>

    <v-switch density="compact" hide-details color="primary" inset label="Switch"></v-switch>

    <v-text-field
      class="inpt inpt-search"
      elevation-0
      density="compact"
      hide-details
      type="search"
      variant="solo-filled"
      placeholder="Search"
    >
      <template v-slot:prepend-inner>
        <v-icon>
          <img src="@/assets/svg/search.svg" alt="" />
        </v-icon>
      </template>
    </v-text-field>

    <v-text-field
      class="inpt"
      elevation-0
      density="compact"
      hide-details
      label="Label"
      variant="solo-filled"
    >
    </v-text-field>

    <v-select
      class="inpt"
      elevation-0
      density="compact"
      hide-details
      variant="solo-filled"
      label="Select"
      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
    ></v-select>

    <v-textarea
      class="inpt"
      elevation-0
      hide-details
      variant="solo-filled"
      label="Label"
    ></v-textarea>

    <v-btn class="btn" color="primary" @click="$router.push({ name: 'config-payments' })"
      >Config</v-btn
    >
  </v-card>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const tab = ref(null)
</script>

<style lang="scss" scoped>
.theme {
  display: grid;
  gap: 1rem;
  &__buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
}
</style>
