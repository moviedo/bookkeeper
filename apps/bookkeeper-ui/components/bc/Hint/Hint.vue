<template>
  <p class="text-sm font-normal" :class="style">
    <ExclamationIcon class="inline h-5 w-5 pr-1" aria-hidden="true" />
    <slot />
  </p>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

import ExclamationIcon from "~/assets/icons/ExclamationIcon.svg?inline";

export enum HintType {
  error = "error",
  warning = "warning",
}

export default Vue.extend({
  name: "BcHint",
  components: {
    ExclamationIcon,
  },
  props: {
    type: {
      type: String,
      default: HintType.error,
    } as PropOptions<HintType>,
  },
  computed: {
    style(): HintType {
      return HintType[this.type];
    },
  },
});
</script>

<style scoped>
.error {
  @apply text-rose-500;
}
.warning {
  @apply text-amber-500;
}
</style>
