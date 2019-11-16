import React from "react";
import styled from "styled-components";
import _ from "lodash";
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";

import FullWidth from "../components/FullWidth";

import logoAmazon from "../images/amazon.svg";
import logoAngular from "../images/angular.svg";
import logoApple from "../images/apple.svg";
import logoGatsby from "../images/gatsby.svg";
import logoLamborghini from "../images/lamborghini.svg";
import logoMicrosoft from "../images/microsoft.svg";
import logoNext from "../images/next.svg";
import logoPython from "../images/python.svg";
import logoRollsRoyce from "../images/rolls-royce.svg";
import logoTesla from "../images/tesla-motors.svg";
import logoTwilio from "../images/twilio.svg";

const Height = styled.div`
  position: relative;
  width: 100%;
  height: ${props => (props.height ? props.height + "px" : "auto")};
`;

const Company = styled.div`
  position: relative;
  width: 75px;
  height: 75px;
`;

const Circle = styled.div`
  position: absolute;
  transform: scale(0.5);
  object-position: center center;
  will-change: transform, opacity;
  width: 150px;
  height: 150px;
  top: -50%;
  left: -50%;
  border-radius: 50%;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1), 0 3px 10px rgba(0, 0, 0, 0.07);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  display: block;
  /* https://stackoverflow.com/questions/24843676/how-can-i-fit-a-square-html-image-inside-a-circle-border */
  /* just making it < 70.7% */
  width: 60%;
  height: 60%;
`;

const icons = [
  logoAmazon,
  logoGatsby,
  logoAngular,
  logoApple,
  logoLamborghini,
  logoMicrosoft,
  logoNext,
  logoPython,
  logoRollsRoyce,
  logoTesla,
  logoTwilio,
];

const Companies = () => (
  <FullWidth>
    <Height height={500}>
      <Marquee velocity={12} scatterRandomly minScale={0.7} resetAfterTries={200} debug>
        {_.times(8, Number).map(key => (
          <Motion
            key={`marquee-example-company-${key}`}
            initDeg={randomIntFromInterval(0, 360)}
            direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
            velocity={10}
            radius={100}
          >
            <Company>
              <Circle>
                <Logo src={icons[key]} alt="" />
              </Circle>
            </Company>
          </Motion>
        ))}
      </Marquee>
    </Height>
  </FullWidth>
);

export default Companies;
