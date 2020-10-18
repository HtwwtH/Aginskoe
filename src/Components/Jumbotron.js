import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import img1 from './../images/img1.jpg';
import styled from 'styled-components';

const Styles = styled.div`
  .jumbo{
    background: url(${img1}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 400px;
    position: relative;
    z-index: -2;
  }
  .overlay{
    background-color: #000;
    opacity: 0.7;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

const Jumbotron = () => {
  return (
    <Styles>
      <Jumbo fluid className="jumbo">
        <div className="overlay">
          <Container style={{ paddingTop: '50px' }}>
            <h1>Агинское</h1>
            <p >
              Cело в Красноярском крае, административный центр Саянского района и Агинского сельсовета.<br />
              Агинское расположено при впадении реки Аги в реку Анжу, в 217 км к юго-востоку от Красноярска и в 40 км от железнодорожной станции Саянская (узел линий на Абакан, Тайшет и Уяр).<br />
              Село было основано в 1829 г. ссыльными поселенцами.
            </p>
          </Container>
        </div>
      </Jumbo>
    </Styles >
  );
}

export default Jumbotron;