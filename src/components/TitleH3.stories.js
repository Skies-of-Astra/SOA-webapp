// YourComponent.stories.js|jsx

import TitleH3 from "./TitleH3";

//π This default export determines where your story goes in the story list
export default {
  /* π The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Title H3",
  component: TitleH3,
};

//π We create a βtemplateβ of how args map to rendering
const Template = (args) => <TitleH3 {...args} />;

export const Left = {
  args: {
    cssClass: "",
    label: "Skies of Astra",
    //π The args you need here will depend on your component
  },
};

export const Center = {
  args: {
    cssClass: "text_align_center",
    label: "Skies of Astra",
    //π The args you need here will depend on your component
  },
};
