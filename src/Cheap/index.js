import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import media from '../common/media';
import barBg from './bar.png';
import aeroflot from './aeroflot.png';
import jews from './jews.png';
import koreanAir from './korean_air.png';
import oneTwoTrip from './one_two_trip.png';
import s7 from './s7.png';
import arrow from './arrow.svg';

const Cheap = styled.section`
  display: none;

  @media screen and (min-width: ${media.sm}) {
    background: #f8fcff;
    display: block;
    padding-top: 20px;
  }
`;

const Bar = styled.hr`
  margin: 0;
  width: 100%;
  height: 7px;
  background-image: url(${barBg});
  border: none;
`;

const Title = styled.h2`
  margin: 0 0 24px;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
`;

const Slider = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const NextSlide = styled.button`
  position: absolute;
  left: calc(100% - 20px);
  top: 0;
  bottom: 0;
  margin: auto;
  width: 20px;
  height: 34px;
  padding: 0;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

const PrevSlide = NextSlide.extend`
  left: 0;
  transform: scale(-1, 1);
`;

const Slides = styled.div`
  width: 300%;
  display: flex;
`;
const Slide = styled.div`
  padding: 24px 0;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  justify-content: center;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const PaginationButton = styled.button`
  margin-right: 8px;
  padding: 0;
  font-size: 0;
  box-sizing: border-box;
  display: inline-block;
  cursor: pointer;
  width: 10px;
  height: 10px;
  border: 1px solid #818181;
  border-radius: 50%;
  background-color: ${props => props.current && '#818181'};

  &:last-child {
    margin-right: 0;
  }
`;

const Image = styled.img`
  width: 149px;
  margin: 16px 8px;
`;

export default () => (
  <Cheap>
    <Grid>
      <Row>
        <Col smOffset={1} sm={10}>
          <Title>Дешевые авиабилеты от крупнейших авиакомпаний и агентств</Title>
          <Slider>
            <Slides>
              <PrevSlide />
              <Slide>
                <Image src={aeroflot} />
                <Image src={jews} />
                <Image src={oneTwoTrip} />
                <Image src={koreanAir} />
                <Image src={s7} />
              </Slide>
              <Slide />
              <Slide />
              <NextSlide />
            </Slides>
          </Slider>
          <Pagination>
            <PaginationButton current />
            <PaginationButton />
            <PaginationButton />
          </Pagination>
        </Col>
      </Row>
    </Grid>
    <Bar />
  </Cheap>
);
