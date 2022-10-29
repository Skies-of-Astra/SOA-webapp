// YourComponent.stories.js|jsx

import TitleH1 from "./TitleH1";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Title H1",
  component: TitleH1,
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <TitleH1 {...args} />;

export const DefaultView = {
  args: {
    cssClass: "",
    label: "Skies of Astra",
    //👇 The args you need here will depend on your component
  },
};