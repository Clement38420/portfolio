<script setup lang="ts"></script>

<template>
  <div class="card">
    <div class="highlight"></div>
    <div class="content"><slot></slot></div>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  background-color: var(--bg-color);
  border-radius: 12px;
  box-shadow: var(--card-shadow);
  padding: 16px;
  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.card:hover {
  box-shadow: var(--card-shadow-high);
  transform: translateY(-5px);
}

.highlight {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 16px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background: linear-gradient(0, var(--bg-color), var(--bg-light-color));
  transform-origin: top center;
  transition: height 0.2s ease;
}

.card:hover .highlight {
  height: 70%;
}

.content {
  position: relative;
  z-index: 1;
}
</style>
