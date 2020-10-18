import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from './../images/img1.jpg';
import img2 from './../images/img2.jpg';
import img3 from './../images/img3.jpg';

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item style={{ maxHeight: '400px' }}>
        <img style={{ backgroundSize: 'cover' }}
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption style={{ borderRadius: '5px', backgroundColor: 'rgba(31, 48, 41, .5)', paddingTop: '0' }}>
          <h3>Село Агинское</h3>
          <p>Место, где вы обретаете душевный покой.</p>
        </Carousel.Caption>

      </Carousel.Item>

      <Carousel.Item style={{
        maxHeight: '400px'
      }}>
        <img style={{ backgroundSize: 'cover' }}
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption style={{ borderRadius: '5px', backgroundColor: 'rgba(31, 48, 41, .5)', paddingTop: '0' }}>
          <h3>Село Агинское</h3>
          <p>Место, где вы можете быть самим собой.</p>
        </Carousel.Caption>

      </Carousel.Item >

      <Carousel.Item style={{ maxHeight: '400px' }}>
        <img style={{ backgroundSize: 'cover' }}
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption style={{ borderRadius: '5px', backgroundColor: 'rgba(31, 48, 41, .5)', paddingTop: '0' }}>
          <h3>Село Агинское</h3>
          <p>Так близко, и так далеко...</p>
        </Carousel.Caption>

      </Carousel.Item >
    </Carousel >
  );
}

export default Slider;