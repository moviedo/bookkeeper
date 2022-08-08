import { Heading } from "./Heading";

export default {
  title: "base components / bc-heading",
  argTypes: {
    type: {
      control: "select",
      options: Object.values(Heading),
      description: "h1-h6",
      defaultValue: "h1",
    },
    default: {
      control: "text",
      description: "default slot",
      defaultValue: "Heading 1",
    },
    subtitle: {
      control: "text",
      description: "subtitle slot that's automatically wrapped in hgroup",
    },
    group: {
      control: "text",
      description: "group slot that's automatically wrapped in hgroup",
    },
  },
};

export const Typography = () => ({
  template: `
    <div>
      <bc-heading type="h1">Heading 1</bc-heading>
      <bc-heading type="h2">Heading 2</bc-heading>
      <bc-heading type="h3">Heading 3</bc-heading>
      <bc-heading type="h4">Heading 4</bc-heading>
      <bc-heading type="h5">Heading 5</bc-heading>
      <bc-heading type="h6">Heading 6</bc-heading>
    </div>
  `,
});

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes).filter(
    (a) => !["default", "subtitle", "group"].includes(a)
  ),
  template: `
    <bc-heading v-bind="$props">
      ${args.default}
      <template v-if="${"subtitle" in args}" #subtitle>
        ${args.subtitle}
      </template>
      <template v-if="${"group" in args}" #group>
        ${args.group}
      </template>
    </bc-heading>`,
});

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  subtitle: "Some subtitle",
};

export const GroupedHeading = Template.bind({});
GroupedHeading.args = {
  group: '<bc-heading type="h2">Heading 2</bc-heading>',
};

export const WithCustomAttr = Template.bind({});
WithCustomAttr.args = {
  group: '<bc-heading type="h2" style="color:red;">Heading 2</bc-heading>',
};
