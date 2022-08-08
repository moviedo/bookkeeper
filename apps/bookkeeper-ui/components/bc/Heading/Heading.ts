import Vue, { PropOptions, VNode } from "vue";

export enum Heading {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
}

export default Vue.extend({
  name: "BcHeading",
  props: {
    type: {
      type: Object,
      default: Heading.h1,
    } as PropOptions<Heading>,
  },
  render(createElement): VNode {
    const headingEl: Heading = this.$props.type;
    const heading = createElement(
      headingEl,
      {
        class: [
          getTextSize(headingEl),
          getTestWeight(headingEl),
          "text-slate-800",
          this.$slots.subtitle && !this.$slots.group ? "mb-2" : "",
        ],
      },
      this.$slots.default
    );

    if (this.$slots.subtitle && !this.$slots.group) {
      return createElement("hgroup", [
        heading,
        createElement(
          "p",
          { class: "text-base font-medium" },
          this.$slots.subtitle
        ),
      ]);
    } else if (this.$slots.group) {
      return createElement("hgroup", [heading, this.$slots.group]);
    }

    return heading;
  },
});

function getTextSize(headingEl: Heading): string {
  switch (headingEl) {
    case Heading.h5:
      return "font-bold";
    case Heading.h3:
      return "font-medium";
    default:
      return "font-normal";
  }
}

function getTestWeight(headingEl: Heading): string {
  switch (headingEl) {
    case Heading.h6:
    case Heading.h5:
      return "text-xl";
    case Heading.h4:
      return "text-2xl";
    case Heading.h3:
      return "text-3xl";
    case Heading.h2:
      return "text-4xl";
    default:
      return "text-5xl";
  }
}
