<template>
  <header class="pt-4 px-4 justify-space-between d-none d-md-flex">
    <h1 class="text-h4 text-capitalize">{{ $route.name }}</h1>
    <div class="flex">
      <v-btn class="mr-4" size="40" rounded="lg"><i class="icon-bell"></i></v-btn>
      <v-btn size="40" rounded="lg"><i class="icon-setting"></i></v-btn>
    </div>
  </header>
  <nav-bar />
</template>

<script setup lang="ts">
import NavBar from './NavBar.vue'
</script>

<style lang="scss" scoped>
i {
  font-size: 1.5rem;
}
</style>
