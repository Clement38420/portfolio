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
  border-radius: 24px;
  box-shadow: var(--card-shadow);
  padding: 2rem;
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

.card:hover {
  box-shadow: var(--card-shadow-high);
  transform: translateY(-12px) scale(1.02);
}

.highlight {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 24px;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
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
