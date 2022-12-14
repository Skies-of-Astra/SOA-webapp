// YourComponent.stories.js|jsx

import Nav from "./Nav";

//π This default export determines where your story goes in the story list
export default {
  /* π The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Navigation",
  component: Nav,
};

//π We create a βtemplateβ of how args map to rendering
const Template = (args) => <Nav {...args} />;

export const DefaultView = {
  args: {
    //π The args you need here will depend on your component
  },
};
