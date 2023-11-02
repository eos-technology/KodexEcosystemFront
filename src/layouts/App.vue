import { reactive } from 'vue';
<template>
  <v-card class="bg-background overflow-auto">
    <v-layout>
      <v-navigation-drawer
        class="bg-background"
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item>
          <template v-slot:prepend>
            <img
              style="height: 27px"
              v-if="rail === true"
              src="@/assets/svg/kodex.svg"
              alt="kodex logo"
              nav
            />
            <img v-if="rail === false" src="@/assets/svg/kodex-logo.svg" alt="kodex logo" nav />
          </template>
          <template v-slot:append>
            <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
          </template>
        </v-list-item>
        <!-- Routes -->
        <v-list density="compact" nav>
          <v-list-item
            v-for="route in routes"
            :to="{ name: route.route }"
            :key="route.value"
            :title="$t(`routes.${route.name}`)"
            :value="route.value"
          >
            <template v-slot:prepend>
              <v-icon>
                <img :src="`src/assets/svg/${route.icon}.svg`" :alt="`${route.name} Icon`" />
              </v-icon>
            </template>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main class="h-screen h-100"
        ><section class="pa-4">
          <HeaderComponent />
          <RouterView /></section
      ></v-main>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderComponent from '@/components/ui/HeaderComponent.vue'

const drawer = ref(true)
const rail = ref(true)

const routes = [
  { name: 'dashboard', value: 'dashboard', icon: 'dashboard', route: 'Dashboard' },
  { name: 'wallet', value: 'wallet', icon: 'wallet', route: 'wallet' },
  { name: 'posSystem', value: 'pos', icon: 'pos' },
  { name: 'p2p', value: 'p2p', icon: 'p2p' },
  { name: 'remittances', value: 'remittances', icon: 'cart' },
  { name: 'mass', value: 'send', icon: 'doc' },
  { name: 'humanResources', value: 'resources', icon: 'doc' }
]
</script>

<style lang="scss" scoped></style>
