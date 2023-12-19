import React from "react";
import { useState, useRef, useEffect } from "react";
import "./Achievement.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import logoVaip from "../../assets/logoVaip.jpg";
import logo from "../../assets/logo.png";
const Achievement = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const achievements = [
    {
      id: 1,
      logo: logoVaip,
      name: "Open source software Vietnam 2023 - Third Prize.",
      link: "https://vfossa.vn/tin-tuc/cong-bo-ket-qua-hang-muc-phan-mem-nguon-mo-olympic-tin-hoc-sinh-vien-2023-694.html",
    },
    {
      id: 2,
      logo: logo,
      name: "Software Solutions 24h OU 2023 - First Prize.",
      link: "https://www.facebook.com/share/qNjN8QQ44APThKi3/?mibextid=WiMSqg",
    },
    {
      id: 3,
      logo: logo,
      name: "Web-Design contest of HCMC OU 2023 - First Prize",
      link: "https://www.facebook.com/share/p/4HaVwm54xpYt7s5S/?mibextid=WiMSqg",
    },
    {
      id: 4,
      logo: logo,
      name: "Scholarships Sencouraging Study of HCMC OU - 2023",
      link: "http://it.ou.edu.vn/asset/ckfinder/userfiles/5/files/KHOA-CNTT-DANH-SACH-HOC-BONG-KKHT-HK1%20NH2223%20-%2010-07-2023.pdf",
    },
  ];

  return (
 
        <SliderWrapper>
          <Slider {...settings}>
            {achievements.map((achievement) => {
              return (
                <SliderItem>
                  <SliderLogo src={`${achievement.logo}`}></SliderLogo>
                  <SliderName>{achievement.name}</SliderName>
                  <SliderLink
                    target="_blank"
                    rel="noopener noreferrer"
                    href={achievement.link}
                  >
                    {achievement.link == null ? "Uploading" : "See more Here"}{" "}
                  </SliderLink>
                </SliderItem>
              );
            })}
          </Slider>
        </SliderWrapper>

  );
};

const SliderWrapper = styled.div`
  width: 40%;
  margin: 0 auto;
  min-height: 400px;
`;
const SliderLogo = styled.img`
  width: 200px;
  margin-top:20px;
  height: 200px;
`;
const SliderName = styled.div`
  font-weight: 700;
  font-size: 25px;
  
  margin-top: 25px;
`;

const SliderLink = styled.a`
  padding-bottom: 30px;
  margin-top: 10px;
  font-size: 20px;
  color: #1769bb;
`;

const SliderItem = styled.div`
  width: 100%;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  border: 1px solid;
  border-radius: 10px;
`;

export default Achievement;
