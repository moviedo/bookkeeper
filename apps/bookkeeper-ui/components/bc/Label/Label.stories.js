export default {
  title: "base components / bc-label",
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<bc-label>${args.default}</bc-label>`,
});

export const Default = Template.bind({});
Default.args = {
  default: "Input Label",
};

export const WithCustomHtml = Template.bind({});
WithCustomHtml.args = {
  default: "<strong>Strong Label</strong>: with normal label",
};
