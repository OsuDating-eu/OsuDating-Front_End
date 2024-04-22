<script setup lang="ts">
defineProps<{
  buttonText: string,
  buttonDestination: string,
  isMobile: boolean,
}>();
</script>

<template>
  <RouterLink
    class="container"
    :to="buttonDestination"
  >
    <img src="../../assets/images/logo.png">
    <span 
      v-if="!isMobile"
      class="textButton header-24"
    >OsuDating</span>
  </RouterLink>
</template>

<style scoped>
.container {
  display: flex;
  gap: 12px;
  align-items: center;
  text-decoration: inherit;
}

.container>.textButton {
  color: var(--text-white);
}
</style>