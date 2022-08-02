<template>
  <button class="default hover focus active">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "BcButton",
});
</script>

<style scoped>
.default {
  @apply w-full rounded bg-slate-700 pt-[13.5px] pb-[15.5px] text-base font-medium text-white md:w-auto md:px-24;
}

button[outline] {
  @apply border-[1px] border-slate-300 bg-blue-50 text-slate-700;
}

.hover {
  @apply hover:bg-slate-900;
}
button[outline].hover {
  @apply hover:bg-blue-100;
}

.focus {
  @apply focus:ring focus:ring-slate-900 focus:ring-offset-2;
}

button[disabled] {
  @apply bg-gray-100 text-gray-400 hover:bg-gray-100;
}

button[outline][disabled] {
  @apply hover:bg-gray-100;
}

button[small] {
  @apply px-[60px] pt-[5.5px] pb-[7.5px];
}

button[large] {
  @apply px-36 pt-[17.5px] pb-[19.5px];
}
</style>
