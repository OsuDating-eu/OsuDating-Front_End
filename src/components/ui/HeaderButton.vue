<script setup lang="ts">
  defineProps<{
    buttonText: string,
    buttonDestination: string,
    isFocused: boolean,
  }>()
</script>

<template>
  <div class="text-button">
    <RouterLink class="button-link button-24" :class="{ focused: isFocused }" :to="buttonDestination">{{ buttonText }}</RouterLink>
  </div>
</template>

<style scoped>
.text-button {
  padding-top: 6px;
  padding-bottom: 6px;
}

.text-button .button-link{
  text-decoration: inherit;
  color: var(--text-gray);
  transition: 0.3s;
}

.text-button:hover .button-link{
  color: var(--text-white)
}

.text-button .focused {
  color: var(--text-white) !important;
}
</style>