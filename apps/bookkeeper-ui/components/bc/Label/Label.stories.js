export default {
  title: "base components / bc-label",
};

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: "<bc-label>{{$props.slot}}</bc-label>",
});

export const Default = Template.bind({});
Default.args = {
  slot: "Input Label",
};
