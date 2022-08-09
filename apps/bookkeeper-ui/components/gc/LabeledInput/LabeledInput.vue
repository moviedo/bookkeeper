<template>
  <fieldset>
    <bc-label class="pl-px" :for="id">
      <slot name="label">Default Label</slot>
    </bc-label>

    <bc-input :id="id" class="my-2" v-bind="$attrs" />

    <bc-hint v-if="hasHint" class="pl-px">
      <slot name="hint" />
    </bc-hint>
  </fieldset>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "GcLabeledInput",
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    hasHint: false,
  }),
  mounted() {
    this.hasHint = Boolean(this.$slots.hint);
  },
});
</script>
