import { reactive } from 'vue';
<template>
  <div class="main-color bg-background h-full">
    <v-layout>
      <v-navigation-drawer
        class="bg-background d-none d-md-flex"
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
            rounded="lg"
          >
            <template v-slot:prepend>
              <v-icon>
                <img
                  :src="
                    getFile({
                      route: 'svg',
                      url: `${route.icon}`,
                      extension: 'svg'
                    })
                  "
                  :alt="`${route.icon}`"
                />
              </v-icon>
            </template>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main class="main"
        ><section>
          <HeaderComponent />
          <div class="pa-md-4">
            <RouterView />
          </div></section
      ></v-main>
    </v-layout>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import getFile from '@/helpers/getFile'
import HeaderComponent from '@/components/ui/HeaderComponent.vue'

const drawer = ref(true)
const rail = ref(true)

const routes = [
  { name: 'dashboard', value: 'dashboard', icon: 'dashboard', route: 'Dashboard' },
  { name: 'wallet', value: 'wallet', icon: 'wallet', route: 'wallet' }
  // { name: 'posSystem', value: 'pos', icon: 'pos' },
  // { name: 'p2p', value: 'p2p', icon: 'p2p' },
  // { name: 'remittances', value: 'remittances', icon: 'cart' },
  // { name: 'mass', value: 'send', icon: 'doc' },
  // { name: 'humanResources', value: 'resources', icon: 'doc' }
]
</script>

<style lang="scss" scoped>
.main {
  min-height: 100vh;
  height: 100%;
  &-color {
    @media (max-width: 960px) {
      background-color: #f6f8fa !important;
      --v-layout-left: 0 !;
    }
  }
}
.v-list-item--active {
  background-color: #3587ff;
}
</style>

<style>
.main {
  @media (max-width: 960px) {
    --v-layout-left: 0 !important;
  }
}
</style>
