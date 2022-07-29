export default {
  title: "base components / bc-input",
};

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<bc-input v-bind="$props" placeholder="default data" />',
});

export const Default = Template.bind({});

export const Tablet = Template.bind({});
Tablet.parameters = {
  viewport: {
    defaultViewport: "tablet",
  },
};

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile1",
  },
};

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
