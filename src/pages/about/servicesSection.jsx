import React, { useEffect, useState } from "react";

// Assets
import "./style.css";
import Images from "../../assets/Images";
import Icons from "../../assets/Icons";

// Components
import Button from "../../components/Button";

const ServicesSection = () => {
  const [Services, setServices] = useState([
    {
      title: "Salary Credit",
      desc: "An Earned Wage Access platform providing professionals instant access to earned wages, promoting financial wellness and reducing reliance on costly borrowing.",
      banner: Images.salary_credit,
      ratings: [
        { label: "1M+ Downloads" },
        { label: "4.6", icon: Icons.star },
        { label: "60k+ Reviews" },
      ],
      buttons: [
        {
          label: "DOWNLOAD APP",
          icon: Icons.playstore,
          iconAlign: "right",
          callback: () => {
            window.open(
              "https://play.google.com/store/apps/details?id=com.mdpd"
            );
          },
          customStyle: { width: "100%" },
        },
        {
          label: "VISIT SITE",
          icon: Icons.link,
          iconAlign: "right",
          callback: () => {
            window.open("https://kreon.in/");
          },
          type: "secondary",
          customStyle: { width: "100%" },
        },
      ],
    },
    {
      title: "Student Credit",
      desc: "A digital lending platform providing instant overdraft facilities to college students across India, promoting formal nancial inclusion and credit discipline.",
      banner: Images.student_credit,
      ratings: [
        { label: "1M+ Downloads" },
        { label: "4.6", icon: Icons.star },
        { label: "60k+ Reviews" },
      ],
      buttons: [
        {
          label: "DOWNLOAD APP",
          icon: Icons.playstore,
          iconAlign: "right",
          callback: () => {
            window.open(
              "https://play.google.com/store/apps/details?id=com.kreon.stucred"
            );
          },
          customStyle: { width: "100%" },
        },
        {
          label: "VISIT SITE",
          icon: Icons.link,
          iconAlign: "right",
          callback: () => {
            window.open("https://stucred.com/");
          },
          type: "secondary",
          customStyle: { width: "100%" },
        },
      ],
    },
    {
      title: "Traditional Lending",
      desc: "We offer tailored loans with flexible terms and competitive rates, supporting personal growth, business expansion, and financial stability with trust and transparency.",
      banner: Images.lending,
      ratings: [
        { label: "₹4000Cr+  Disbursed" },
        { label: "Transparent Terms" },
        { label: "1M+ Satisfied Users" },
        { label: "Rapid Disbursals" },
      ],
      buttons: [
        {
          label: "GET MY LOAN",
          icon: Icons.playstore,
          iconAlign: "right",
          callback: () => {},
          customStyle: { width: "100%" },
        },
      ],
    },
  ]);

  return (
    <div className="services-container-main">
      <div className="services-container-content">
        <div className="services-head">
          <img className="services-logo" src={Images.logo_border} />
          <h1 className="services-title">Our Services</h1>
        </div>

        <div className="services-content-main">
          <div className="services-content-items">
            {Services.map((service, index) => (
              <div className="services-content-item">
                <div className="title">{service.title}</div>
                <div className="desc">{service.desc}</div>
                <img className="banner" src={service.banner} />

                <div className="item-rating-items">
                  {service.ratings.map((rating, index) => (
                    <div className="item-rating-item">
                      <div className="label">{rating.label}</div>
                      {rating.icon && (
                        <div
                          className="icon"
                          dangerouslySetInnerHTML={{ __html: rating.icon }}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="item-buttons">
                  {service.buttons.map((button, index) => (
                    <Button
                      key={`button-${index}`}
                      id={`button-${index}`}
                      label={button.label}
                      icon={button.icon}
                      iconAlign={button.iconAlign}
                      callback={button.callback}
                      type={button.type}
                      customStyle={button.customStyle}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
