export default {
  title: "base components / bc-input",
  argTypes: {
    disabled: { control: "boolean" },
    errored: { control: "boolean" },
  },
  args: {
    placeholder: "default data",
  },
};

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<bc-input style="width: 320px;" v-bind="$props" />',
});

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Hover = Template.bind({});
Hover.parameters = {
  pseudo: {
    hover: true,
  },
};

export const Focus = Template.bind({});
Focus.parameters = {
  pseudo: {
    focus: true,
  },
};

export const ErrorDefault = Template.bind({});
ErrorDefault.args = {
  errored: true,
};

export const ErrorFocus = Template.bind({});
ErrorFocus.parameters = { ...Focus.parameters };
ErrorFocus.args = { ...ErrorDefault.args };
