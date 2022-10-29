import TitleH1 from "./TitleH1";
import DividerBlock from "./DividerBlock";
import CardCircle from "./CardCircle";

const BlockTeam = () => {
  return (
    <div className="position_relative parallax_block collapse_fix padding-top-med">
      <div id="TEAM"></div>
      <div className="content-width margin-center animate_parallax m_p_large margin_bottom_XL m-margin-bottom-large">
        <TitleH1 cssClass="text_align_center" label="Meet the team" />
        <div className="flex_row margin_bottom_large m-flex-wrap-on flex-justify-between flex-no-shrink flex_align_center ios_scroll">
          <CardCircle
            cssClass="flex_col soa_image_carousel animate_parallax carousel_team flex-justify-between soa_image_carousel_team padding-small"
            title="Milo"
            subTitle="Creative Director"
            src="assets/img_team_01.jpg"
          />

          <CardCircle
            cssClass="flex_col soa_image_carousel animate_parallax carousel_team flex-justify-between soa_image_carousel_team padding-small"
            title="Fab"
            subTitle="Art Director"
            src="assets/img_team_02.jpg"
          />

          <CardCircle
            cssClass="flex_col soa_image_carousel animate_parallax carousel_team flex-justify-between soa_image_carousel_team padding-small"
            title="Ahmet"
            subTitle="Web3 Strategist"
            src="assets/img_team_03.jpg"
          />

          <CardCircle
            cssClass="flex_col soa_image_carousel animate_parallax carousel_team flex-justify-between soa_image_carousel_team padding-small"
            title="Lech"
            subTitle="Technical Director"
            src="assets/img_team_03.jpg"
          />
        </div>
      </div>
      <DividerBlock src="assets/img_line_top.png" cssClass="img_bottom_line" />
    </div>
  );
};

export default BlockTeam;
