<template>
  <label class="text-base font-normal text-slate-600">
    <slot />
  </label>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "BcLabel",
});
</script>
