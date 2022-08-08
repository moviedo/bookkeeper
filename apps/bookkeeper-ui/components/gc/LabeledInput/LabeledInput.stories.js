export default {
  title: "grouped components / gc-labeled-input",
  argTypes: {
    hintSlot: {
      control: { type: "text" },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
  <gc-labeled-input style="width: 320px;" v-bind="$props.$attrs">
    <template #label>
      ${args.labelSlot}
    </template>

    <template #hint v-if="${"hintSlot" in args}">
      ${args.hintSlot}
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
