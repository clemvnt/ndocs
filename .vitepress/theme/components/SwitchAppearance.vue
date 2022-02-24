<script lang="ts" setup>
import Switch from './Switch.vue';
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggle = useToggle(isDark);
</script>

<template>
  <Switch
    class="switch-appearance"
    aria-label="toggle dark mode"
    @click="toggle"
  >
    <div
      class="
        absolute
        top-3px
        left-3px
        w-12px
        h-12px
        transition
        i-tabler-sun
        dark:i-tabler-moon
      "
    />
  </Switch>
</template>

<style>
.dark .switch-appearance .switch-check {
  transform: translateX(18px);
}
</style>
