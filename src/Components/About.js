import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Jumbotron from './Jumbotron';
import img1 from './../images/About/1.jpg';
import img2 from './../images/About/2.jpg';
import img3 from './../images/About/3.jpg';
import img4 from './../images/About/4.jpg';
import img5 from './../images/About/5.jpg';

const About = () => {
  return (
    <>
      <Jumbotron />

      <Container style={{ marginBottom: '20px' }}>
        <Row>
          <Col lg={true} style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img src={img1} height={250} alt='img' />
          </Col>

          <Col lg={true} >
            <h2>
              Велопрогулки
              </h2>
            <p>
              На всем протяжении села вы можете найти прекрасно оборудованные дороги и тропинки для вашей велопрогулки. <br />
            </p>
          </Col>
        </Row>

        <Row>
          <Col lg={true} style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img src={img2} height={250} alt='img' />
          </Col>

          <Col lg={true} >
            <h2>
              Домашний уют
              </h2>
            <p>
              Заварите чаек из листьев всяких посадок с Вашего огорода! <br />
            </p>
          </Col>
        </Row>

        <Row>
          <Col lg={true} style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img src={img3} height={250} alt='img' />
          </Col>

          <Col lg={true} >
            <h2>
              Дары природы
              </h2>
            <p>
              Займитесь собирательством диких плодов и грибов в близлежащих лесах и рощах. <br />
            </p>
          </Col>
        </Row>

        <Row>
          <Col lg={true} style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img src={img4} height={250} alt='img' />
          </Col>

          <Col lg={true} >
            <h2>
              Прекрасные виды
              </h2>
            <p>
              Исследуйте все доступные реки и горы, встретьте закат на Старой Деревне. <br />
            </p>
          </Col>
        </Row>

        <Row>
          <Col lg={true} style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img src={img5} height={250} alt='img' />
          </Col>

          <Col lg={true} >
            <h2>
              Флора и фауна
              </h2>
            <p>
              Познакомьтесь с представителями местной флоры и фауны. <br />
            </p>
          </Col>
        </Row>


      </Container>
    </>
  )

};

export default About;
