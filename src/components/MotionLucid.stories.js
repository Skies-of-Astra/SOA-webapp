// YourComponent.stories.js|jsx

import AnimationLucid from "./AnimationLucid";

//π This default export determines where your story goes in the story list
export default {
  /* π The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Motion - characters",
  component: AnimationLucid,
};

//π We create a βtemplateβ of how args map to rendering
const Template = (args) => <AnimationLucid {...args} />;

export const Default = {
  args: {
    //π The args you need here will depend on your component
  },
};
