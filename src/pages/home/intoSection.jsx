import React, { useEffect, useState } from "react";

// Assets
import "./style.css";
import Images from "../../assets/Images";
import Icons from "../../assets/Icons";

// Components
import Button from "../../components/Button";

const IntoSection = () => {
  const redirectMDPA = () => {
    window.open("https://play.google.com/store/apps/details?id=com.mdpd");
  };
  const redirectStucred = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.kreon.stucred"
    );
  };

  return (
    <div className="hero-container">
      <div className="home-head">
        <h1 className="home-title">
          Redefining Financial <br /> Freedom
        </h1>
        <p className="home-desc">
          Revolutionizing finance with technology, enabling seamless
          transactions, smarter <br />
          investments, and empowering global financial freedom
        </p>
      </div>
      <div className="home-contentbox">
        <div className="contentbox-intro">
          <div className="contentbox-intro-head">
            <div className="intro-head-title">MDPD™</div>
            <img className="intro-head-img" src={Images.mdpa} />
          </div>
          <div className="contentbox-intro-short">
            Salary advance <br /> credit
          </div>
          <div className="contentbox-intro-download">
            <Button
              key={`mdpa-download-app`}
              id="mdpa-download-app"
              label="DOWNLOAD APP"
              icon={Icons.playstore}
              iconAlign={"right"}
              callback={() => redirectMDPA()}
            />
          </div>
          <div className="contentbox-intro-desc">
            “launching MDPD to power up salary advances through our robust
            credit services”
          </div>
        </div>
        <img className="contentbox-mockup" src={Images.mockups.home} />

        <div className="contentbox-intro">
          <div className="contentbox-intro-head">
            <div className="intro-head-title">StuCred™</div>
            <img className="intro-head-img" src={Images.stucred} />
          </div>
          <div className="contentbox-intro-short">
            Real-time <br />
            Student Credit
          </div>
          <div className="contentbox-intro-download">
            <Button
              key={`mdpa-download-app`}
              id="mdpa-download-app"
              label="DOWNLOAD APP"
              icon={Icons.playstore}
              iconAlign={"right"}
              callback={() => redirectStucred()}
            />
          </div>
          <div className="contentbox-intro-points">
            <div className="contentbox-intro-point">
              <div className="value">1M+</div>
              <div className="label">Downloads</div>
            </div>
            <div className="contentbox-intro-point">
              <div className="value-main">
                <div className="value">4.6</div>
                <div
                  className="icon"
                  dangerouslySetInnerHTML={{ __html: Icons.star }}
                ></div>
              </div>
              <div className="label">60k+ Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntoSection;
