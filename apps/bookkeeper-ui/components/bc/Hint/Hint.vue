<template>
  <p class="text-sm font-normal" :class="style">
    <ExclamationIcon
      v-show="hasText"
      class="inline h-5 w-5 pr-1"
      aria-hidden="true"
    />
    <span ref="text"><slot /></span>
  </p>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

import ExclamationIcon from "~/assets/icons/ExclamationIcon.svg?inline";

enum HintType {
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
  data: () => ({
    hasText: false,
  }),
  computed: {
    style(): HintType {
      return HintType[this.type];
    },
  },
  mounted() {
    this.hasText = Boolean(this.$refs.text?.textContent);
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
