export default {
  title: "base components / bc-button / default",
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes).filter((a) => a !== "default"),
  template: `
  <bc-button v-bind="$props">
    ${args.default}
  </bc-button>
  `,
});

export const Default = Template.bind({});
Default.args = {
  default: "Submit",
  disabled: false,
  outline: false,
  small: false,
  large: false,
};

export const Tablet = Template.bind({});
Tablet.args = { ...Default.args };
Tablet.parameters = {
  viewport: {
    defaultViewport: "tablet",
  },
};

export const Mobile = Template.bind({});
Mobile.args = { ...Default.args };
Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile1",
  },
};

export const WithCustomHtml = Template.bind({});
WithCustomHtml.args = {
  ...Default.args,
  default: `<i>${Default.args.default}</i> normal copy`,
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  small: true,
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  large: true,
};
