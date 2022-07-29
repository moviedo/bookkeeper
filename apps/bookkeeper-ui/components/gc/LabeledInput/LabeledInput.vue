<template>
  <fieldset>
    <bc-lable class="pl-px" :for="id">
      <slot name="label">Default Label</slot>
    </bc-lable>

    <bc-input :id="id" class="my-2" v-bind="$attrs" />

    <bc-hint class="pl-px">
      <slot name="hint" />
    </bc-hint>
  </fieldset>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "GcLabeldInput",
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      required: true,
    },
  },
});
</script>
