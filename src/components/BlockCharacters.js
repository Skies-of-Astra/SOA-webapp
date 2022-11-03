import TitleH1 from "./TitleH1";
import Paragraph from "./Paragraph";
import ImgWrapper from "./ImgWrapper";
import DividerBlock from "./DividerBlock";

import ActionClick from "./ActionClick";

const BlockCharacters = (props) => {
  return (
    <div className="parallax_block z_index_base position_relative padding-top-med">
      <div id="CLASSES"></div>
      <div className="content-width margin-center animate_parallax m_p_large m-margin-bottom-large">
        <TitleH1 cssClass="text_align_center" label="Character Classes" />
        <Paragraph cssClass="text_align_center margin_bottom_med margin-center">
          There are 5 different classes, each with its own distinctive
          attributes.
        </Paragraph>
        <div className="m_flex_row overflow_hidden margin_bottom_large m-flex-wrap-on flex-justify-center">
          <ActionClick
            cssClass="soa_image_carousel animate_parallax carousel_chars"
            callBack={props.callBack}
            callBackArgs={0}
          >
            <ImgWrapper
              tagID={0}
              cssClassDiv=""
              cssClassImg=""
              src="assets/img_nighflyer.png"
              key={0}
            />
          </ActionClick>

          <ActionClick
            cssClass="soa_image_carousel animate_parallax carousel_chars"
            callBack={props.callBack}
            callBackArgs={1}
          >
            <ImgWrapper
              tagID={1}
              cssClassDiv=""
              cssClassImg=""
              src="assets/img_astrian.png"
              key={1}
            />
          </ActionClick>

          <ActionClick
            cssClass="soa_image_carousel animate_parallax carousel_chars"
            callBack={props.callBack}
            callBackArgs={2}
          >
            <ImgWrapper
              tagID={2}
              cssClassDiv=""
              cssClassImg=""
              src="assets/img_creep.png"
              key={2}
            />
          </ActionClick>

          <ActionClick
            cssClass="soa_image_carousel animate_parallax carousel_chars"
            callBack={props.callBack}
            callBackArgs={3}
          >
            <ImgWrapper
              tagID={3}
              cssClassDiv=""
              cssClassImg=""
              src="assets/img_rogue.png"
              key={3}
            />
          </ActionClick>

          <ActionClick
            cssClass="soa_image_carousel animate_parallax carousel_chars"
            callBack={props.callBack}
            callBackArgs={4}
          >
            <ImgWrapper
              tagID={4}
              cssClassDiv=""
              cssClassImg=""
              src="assets/img_lost.png"
              key={4}
            />
          </ActionClick>
        </div>
        <ImgWrapper
          tagID=""
          cssClassDiv="img_parallax_block"
          cssClassImg="display_block margin-center"
          src="assets/img_dream.png"
        />
      </div>
      <DividerBlock src="assets/img_line_top.png" cssClass="img_bottom_line" />
    </div>
  );
};

export default BlockCharacters;
