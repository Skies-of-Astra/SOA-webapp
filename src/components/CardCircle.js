/**
 *
 * @param {{cssClass: string, src: string, subTitle: string, title: string}} props
 */

const CardCircle = (props) => {
  return (
    <div className={props.cssClass}>
      <img className="margin_bottom_2rem" src={props.src} alt="circle" />
      <div className="text_align_center">
        <h4 className="margin_bottom_XS">{props.subTitle}</h4>
        <h5>{props.title}</h5>
      </div>
    </div>
  );
};

export default CardCircle;
