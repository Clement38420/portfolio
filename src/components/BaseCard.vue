<script setup lang="ts">
defineProps<{
  noHover?: boolean
}>()
</script>

<template>
  <div class="card" :class="{ 'no-hover': noHover }">
    <div class="content"><slot></slot></div>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  background-color: var(--bg-color);
  padding: 1.5em;
  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease;
  border: 1px solid var(--bg-dark-color);
}

.card:hover::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -12px;
  height: 28px;
}

.card:not(.no-hover):hover {
  box-shadow: var(--card-shadow-high);
  transform: translate(-5px, -5px);
}

.content {
  position: relative;
  z-index: 1;
}
</style>
