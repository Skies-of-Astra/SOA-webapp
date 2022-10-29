// import React from 'react';

const ButtonTwitterA = () => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href="https://twitter.com/SkiesOfAstra"
      alt="Twitter"
    >
      <div className="social_container flex_row button_hover">
        <p className="p_social margin-right-small">Join the community ➔</p>
        <img
          className="social_icons"
          src="assets/icon_twitter2.svg"
          alt="Twitter"
        />
      </div>
    </a>
  );
};

export default ButtonTwitterA;
