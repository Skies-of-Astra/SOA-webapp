// YourComponent.stories.js|jsx

import CardCircle from "./CardCircle";

//π This default export determines where your story goes in the story list
export default {
  /* π The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Card - circle",
  component: CardCircle,
};

//π We create a βtemplateβ of how args map to rendering
const Template = (args) => <CardCircle {...args} />;

export const Default = {
  args: {
    cssClass:
      "flex_col soa_image_carousel animate_parallax carousel_team flex-justify-between soa_image_carousel_team padding-small",
    title: "Milo",
    subTitle: "Creative Director",
    src: "assets/img_team_01.jpg",
    //π The args you need here will depend on your component
  },
};
