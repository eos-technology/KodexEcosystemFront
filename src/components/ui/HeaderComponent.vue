<template>
  <header class="pl-4 pb-4 d-flex justify-space-between">
    <h1 class="text-h4 text-capitalize">{{ $route.name }}</h1>
    <div class="flex">
      <v-btn class="mr-4" size="40" rounded="lg"><i class="icon-bell"></i></v-btn>
      <v-btn size="40" rounded="lg"><i class="icon-setting"></i></v-btn>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
i {
  font-size: 1.5rem;
}
</style>
