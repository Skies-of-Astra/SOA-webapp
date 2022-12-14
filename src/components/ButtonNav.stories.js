// YourComponent.stories.js|jsx

import ButtonNav from "./ButtonNav";

//π This default export determines where your story goes in the story list
export default {
  /* π The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button nav",
  component: ButtonNav,
};

//π We create a βtemplateβ of how args map to rendering
const Template = (args) => <ButtonNav {...args} />;

export const Default = {
  args: {
    cssClass: "",
    label: "Home",
    //π The args you need here will depend on your component
  },
};
