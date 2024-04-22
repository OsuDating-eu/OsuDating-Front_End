<script setup lang="ts">
import AppHeader from './components/layout/AppHeader.vue';
</script>

<template>
  <div class="parent">
    <div class="element">
      <AppHeader />
    </div>
  </div>
  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import './assets/styles/variables.css';
</style>

<style scoped>
.parent {
  margin-top: 100px;
  position: relative;
}

.element {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>