import React, { useEffect, useState } from "react";
import Marquee from "react-marquee-slider";
import styled from "styled-components";
import times from "lodash/times";
import { withSize } from "react-sizeme";
import { nanoid } from "nanoid";

import FullWidth from "./FullWidth";

const Photo = styled.img`
  width: ${(props) => props.scale * 300}px;
  height: ${(props) => props.scale * 150}px;
  border-radius: 4px;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.12);
  object-fit: cover;
  object-position: top;
  margin-left: ${(props) => (props.offset === "true" ? props.scale * 7 : props.scale * 87)}px;
  margin-right: ${(props) => (props.offset === "true" ? props.scale * 80 : 0)}px;
`;

const photos = [
  '/Images/Clients/Abb.jpeg',
  '/Images/Clients/abbott-logo.png',
  '/Images/Clients/Allana.jpeg',
  '/Images/Clients/Amul.jpeg',
  '/Images/Clients/Bovis.jpeg',
  '/Images/Clients/Buhler.jpeg',
  '/Images/Clients/CocaCola.jpeg',
  '/Images/Clients/Cremica.jpeg',
  '/Images/Clients/dabur.png',
  '/Images/Clients/DSgroup.jpeg',
  '/Images/Clients/dukes-logo1.png',
  '/Images/Clients/schrieber.png',
  '/Images/Clients/Finolex.jpeg',
  '/Images/Clients/frooti.png',
  '/Images/Clients/gea.jpeg',
  '/Images/Clients/gsk.jpeg',
  '/Images/Clients/ITC1.jpeg',
  '/Images/Clients/laval.jpeg',
  '/Images/Clients/lipton.png',
  '/Images/Clients/MDLZ-logo-col.jpg',
  '/Images/Clients/mother-dairy.png',
  '/Images/Clients/Nestle.jpeg',
  '/Images/Clients/Nirulas-1.png',
  '/Images/Clients/Osram.jpg',
  '/Images/Clients/Pepsi.jpeg',
  '/Images/Clients/Perfetti.jpeg',
  '/Images/Clients/06-ranbaxy-logo.jpg',
  '/Images/Clients/Riddhi.jpeg',
  '/Images/Clients/rockwell.png',
  '/Images/Clients/Schneider.png',
  '/Images/Clients/siemens-logo_large.png',
  '/Images/Clients/United.jpeg',
  '/Images/Clients/Yakult.jpeg',
  '/Images/Clients/york.webp'
];

const People = ({ size }) => {
  const [key, setKey] = useState(nanoid());

  useEffect(() => {
    setKey(nanoid());
  }, [size, size.width]);

  let scale = 0.5;

  if (size && size.width > 800) {
    scale = 0.65;
  }

  if (size && size.width > 1100) {
    scale = 0.8;
  }

  if (size && size.width > 1400) {
    scale = 1;
  }

  return (
    <FullWidth>
      <div style={{ height: scale * 200 }}>
        <Marquee key={key} velocity={25}>
          {times(20, Number).map((id) => (
            <Photo src={photos[id]} alt="" key={`marquee-example-people-${id}`} scale={scale} />
          ))}
        </Marquee>
      </div>

      <div style={{ height: scale * 60 }} />

      <div style={{ height: scale * 200 }}>
        <Marquee key={key} velocity={25}>
          {times(18, Number).map((id) => (
            <Photo
              src={photos[id + 16]}
              alt=""
              key={`marquee-example-people-${id + 17}`}
              offset="true"
              scale={scale}
            />
          ))}
        </Marquee>
      </div>
    </FullWidth>
  );
};

export default withSize()(People);