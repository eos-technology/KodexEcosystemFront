<template>
  <nav class="d-md-none">
    <v-toolbar class="bg-secondary">
      <template v-slot:title>
        <img class="d-block my-auto" src="@/assets/svg/kodex-logo-primary.svg" alt="" />
      </template>

      <v-app-bar-nav-icon
        @click="show = !show"
        size="40"
        color="white"
        class="bg-primary rounded-lg"
      ></v-app-bar-nav-icon
    ></v-toolbar>
  </nav>
  <section :class="show ? 'menu' : 'menu-hide'">
    <router-link
      class="d-flex text-decoration-none"
      @click="show = false"
      :to="{ name: 'Dashboard' }"
      ><img class="mr-2" src="@/assets/svg/dashboard-blue.svg" alt="" />
      <p class="font-weight-bold text-primary-darken-1">
        {{ $t('wallet.dashboard') }}
      </p></router-link
    >
    <router-link class="d-flex text-decoration-none" @click="show = false" :to="{ name: 'wallet' }"
      ><img class="mr-2" src="@/assets/svg/wallet-blue.svg" alt="" />
      <p class="font-weight-bold text-primary-darken-1">{{ $t('wallet.wallet') }}</p></router-link
    >
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const show = ref(false)
</script>

<style lang="scss" scoped>
.menu {
  background-color: #f6f8fa;
  position: fixed;
  min-height: 100vh;
  height: 100%;
  z-index: 2;
  width: 100%;
  padding: 2rem;
  transition: transform 0.3s ease-in;
  transform: translateX(0%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  &-hide {
    transition: transform 0.3s ease-out;
    transform: translateX(-100%);
    height: 0;
  }
}
</style>
