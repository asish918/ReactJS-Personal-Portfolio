import React from 'react';
import Atropos from 'atropos/react';
import images from '../../constants/images'
import './AtroposComponent.scss'

const AtroposComponent = () => {
  return (
    <div className="container">
      <Atropos className="atropos-banner" highlight={false}>
        <img className="atropos-banner-spacer" src={images.bg} alt="" />
        <video data-atropos-offset="-4.5" autoPlay={true} loop={true} playsInline={true}>
          <source src={images.marvel_video} type="video/mp4" />
        </video>
        <img data-atropos-offset="5" src={images.marvel}alt="" />
      </Atropos>
    </div>
  );
};

export default AtroposComponent;
