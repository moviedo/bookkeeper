export default {
  title: "base components / bc-hint",
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    template: `<bc-hint v-bind="$props">${args.text ?? ""}</bc-hint>`,
  };
};

export const Default = () => ({
  template: `
  <div>
    Element will be EMPTY by DEFAULT
    <bc-hint></bc-hint>
  </div>
  `,
});

export const Error = Template.bind({});
Error.args = {
  type: "error",
  text: "Some hint to user",
};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
  text: "Some hint to user",
};
