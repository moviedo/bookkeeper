<template>
  <input type="text" class="default hover focus" />
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "BcInput",
});
</script>

<style scoped>
.default {
  @apply block w-full appearance-none rounded border-[1px] border-slate-300 px-4 py-[14px] text-base font-normal text-slate-800 placeholder-slate-400 caret-slate-900;
}

.hover {
  @apply hover:bg-slate-50;
}

input[disabled] {
  @apply border-none bg-gray-50 text-gray-400 placeholder-gray-400;
}

.focus {
  @apply focus:outline focus:outline-4 focus:outline-blue-100;
}

input[errored] {
  @apply border-rose-300 focus:outline-rose-100;
}
</style>
