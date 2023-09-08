import { section, wrap, list, h1, darkBlueHighlight } from '../index.css';

export const TrustSection = () => {
  return (
    <div className={section.trust}>
      <div className={wrap.text}>
        <h1 className={h1}>
          Collaborated with
          <span className={darkBlueHighlight}>
            <img
              src="/_static/icon/icon-face-in-clouds.png"
              alt="robot_icon"
              width={32}
            />
            Many teams
          </span>
        </h1>
      </div>
      <ul className={list}>Trusted by 10+ Teams 🏢 across 2+ Countries 🇰🇷🇺🇸</ul>
      <div className={wrap.logo}>
        {[
          'beginmate',
          'learners',
          'okkot',
          'plask',
          'rippleai',
          'sendbird',
          'sionicai',
          'skylabs',
          'timepercent',
          'wanted',
        ].map((item, index) => {
          return (
            <img
              key={index}
              src={`/_static/logo/icon-${item}-logo.svg`}
              alt={item}
              width={100}
              height={64}
            />
          );
        })}
      </div>
    </div>
  );
};
