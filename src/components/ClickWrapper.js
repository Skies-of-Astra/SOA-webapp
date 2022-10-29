/**
 *
 * @param {{cssClass:string, callBack:function, component:array}} props
 */

const ClickWrapper = (props) => {
  const callBackAction = () => {
    props.callBack(props.callBackArgs);
  };
  return (
    <div className={props.cssClass} onClick={callBackAction}>
      {props.component}
    </div>
  );
};

export default ClickWrapper;
