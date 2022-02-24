<script setup>
import DefaultTheme from 'vitepress/theme';
const { Layout } = DefaultTheme;
</script>

<template>
  <Layout class="dark:bg-color-red">
    <template #navbar-search><SwitchAppearance /></template>
  </Layout>
</template>

<style>
.dark body {
  background: var(--bg);
}
</style>
