export default {
  title: "base components / bc-hint",
};

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<bc-hint v-bind="$props">{{$props.slot}}</bc-hint>',
});

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
  slot: "Some hint to user",
};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
  slot: "Some hint to user",
};
