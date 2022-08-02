import { Default as ButtonDefault } from "./Default.stories";

export default {
  title: "base components / bc-button / outlined",
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
  ...ButtonDefault.args,
  outline: true,
};

export const Hover = Template.bind({});
Hover.args = { ...Default.args };
Hover.parameters = {
  pseudo: {
    hover: true,
  },
};

export const Focus = Template.bind({});
Focus.args = { ...Default.args };
Focus.parameters = {
  pseudo: {
    focus: true,
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
