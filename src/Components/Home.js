import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Slider from './Slider';
import card1 from './../images/card1.jpg';
import card2 from './../images/card2.jpg';
import card3 from './../images/card3.jpg';
import history from './../images/history.jpg';
import Jumbotron from './Jumbotron';


const Home = () => {

  return (
    <>
      <Slider />
      <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Row>
          <Col style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
            <Card style={{ width: '18rem', margin: '0 auto' }}>
              <Card.Img variant="top" src={card1} />
              <Card.Body>
                <Card.Title>Природа</Card.Title>
                <Card.Text>
                  В окрестностях доступны леса, рощи, реки, поля и горы.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
            <Card style={{ width: '18rem', margin: '0 auto' }}>
              <Card.Img variant="top" src={card2} />
              <Card.Body>
                <Card.Title>Достопримечательности</Card.Title>
                <Card.Text>
                  Заброшенные заводы, древние руины, центральная площадь.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
            <Card style={{ width: '18rem', margin: '0 auto' }}>
              <Card.Img variant="top" src={card3} />
              <Card.Body>
                <Card.Title>Инфраструктура</Card.Title>
                <Card.Text>
                  Развитая инфраструктура, все блага цивилизации.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Jumbotron />

      <Container style={{ marginBottom: '20px' }}>
        <Row>
          <Col lg={true} style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img src={history} height={300} alt='img' />
          </Col>

          <Col lg={true} >
            <h2>
              История
            </h2>
            <p>
              Указ о начале строительства Агинского поступил в 1827 г. <br />
              К 1900 г. в Агинском проживали 822 человека. Жители села занимались хлебопашеством, скотоводством, звероводством, пчеловодством, мелкой кустарной промышленностью, добычей кедровых орехов, зарабатывали на золотых приисках.<br />

              В 1924 г. был образован Саянский район с центром в Агинском. <br />В 1969 г. было построено новое здание, в котором разместился районный Дом культуры.<br />

              После войны в Агинском стали строиться многоэтажные дома.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
};

export default Home;