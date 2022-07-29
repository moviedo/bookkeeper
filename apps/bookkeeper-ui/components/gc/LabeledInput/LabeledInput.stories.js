export default {
  title: "grouped components / gc-labeled-input",
};

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
  <gc-labeled-input v-bind="$props.$attrs">
    <template #label v-if="$props.labelSlot">
      {{$props.labelSlot}}
    </template>

    <template #hint v-if="$props.hintSlot">
      {{$props.hintSlot}}
    </template>
  </gc-labeled-input>`,
});

export const Default = Template.bind({});
Default.args = {
  $attrs: {
    id: "username",
    name: "username",
    placeholder: "Username",
  },
  labelSlot: "Username",
};

export const WithHint = Template.bind({});
WithHint.args = {
  ...Default.args,
  hintSlot: "Password is not available.",
};
