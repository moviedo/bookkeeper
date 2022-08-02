export default {
  title: "base components / bc-hint",
  argTypes: {
    default: {
      control: { type: "text" },
    },
    type: {
      control: "select",
      options: ["error", "warning"],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes).filter((a) => a !== "default"),
  template: `<bc-hint v-bind="$props">${args.default ?? ""}</bc-hint>`,
});

export const Default = Template.bind({});
Default.args = {
  default: "Some hint to user",
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  type: "error",
};

export const Warning = Template.bind({});
Warning.args = {
  ...Default.args,
  type: "warning",
};

export const Empty = Template.bind({});
