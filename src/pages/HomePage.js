import { useState } from "react";

import Nav from "../components/Nav";
import BlockIntro from "../components/BlockIntro";
import BlockParallax from "../components/BlockParallax";
import BlockLucid from "../components/BlockLucid";
import BlockCharacters from "../components/BlockCharacters";
import LightBoxChars from "../components/LightBoxChars";
import BlockWorld from "../components/BlockWorld";
import BlockPartners from "../components/BlockPartners";
import BlockTeam from "../components/BlockTeam";
import BlockFooter from "../components/BlockFooter";
// import ButtonBackTop from "../components/ButtonBackTop";

const Homepage = () => {
  const [showCharBox, setShowCharBox] = useState(true);
  const [charNum, setCharNum] = useState(0);

  const HideCharBox = () => {
    setShowCharBox(false);
  };

  const ViewCharBox = (num) => {
    setCharNum(num);
    setShowCharBox(true);
  };

  return (
    <div>
      {/* {showBackButton ? <ButtonBackTop /> : ""} */}
      {showCharBox ? (
        <LightBoxChars callBack={HideCharBox} charNum={charNum} />
      ) : (
        ""
      )}
      <div className="soa_block padding-bottom-large position_relative">
        <Nav />
        <BlockIntro />
      </div>
      <BlockParallax />
      <BlockLucid />
      <BlockCharacters callBack={ViewCharBox} />
      <BlockWorld />
      <BlockPartners />
      <BlockTeam />
      <BlockFooter />
    </div>
  );
};

export default Homepage;
