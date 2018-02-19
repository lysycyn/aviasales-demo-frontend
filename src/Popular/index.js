import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import media from '../common/media';
import Filters from './Filters';
import RoundIcon from './../common/RoundIcon';
import compass from './compass.svg';
import DropDownCity from './DropDownCity';
import Card from './Card';
import flagRu from './../assets/flag_ru.png';
import flagEs from './../assets/flag_es.png';
import krs1x from './krasnodar_1x.jpg';
import krs2x from './krasnodar_2x.jpg';
import sch1x from './sochi_1x.jpg';
import sch2x from './sochi_2x.jpg';
import spb1x from './spb_1x.jpg';
import spb2x from './spb_2x.jpg';
import mnv1x from './minvody_1x.jpg';
import mnv2x from './minvody_2x.jpg';
import smf1x from './simferopol_1x.jpg';
import smf2x from './simferopol_2x.jpg';
import brc1x from './barcelona_1x.jpg';
import brc2x from './barcelona_2x.jpg';

const Popular = styled.section`
  padding-top: 40px;
  background-color: #f8fcff;

  @media screen and (min-width: ${media.sm}) {
    padding-top: 56px;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  text-align: center;
  margin: 0 0 32px;

  @media screen and (min-width: ${media.sm}) {
    margin-bottom: 56px;
    font-size: 24px;
    line-height: 36px;
  }
`;

const populars = [
  {
    flag: flagRu,
    src: krs1x,
    src2x: krs2x,
    city: 'Краснодар',
    country: 'Россия',
    date: '18 марта',
    price: '1212',
  },
  {
    flag: flagRu,
    src: sch1x,
    src2x: sch2x,
    city: 'Сочи (Адлер)',
    country: 'Россия',
    date: '23 марта',
    price: '1334',
  },
  {
    flag: flagRu,
    src: spb1x,
    src2x: spb2x,
    city: 'Санкт-Петербург',
    country: 'Россия',
    date: '19 февраля',
    price: '1508',
  },
  {
    flag: flagRu,
    src: mnv1x,
    src2x: mnv2x,
    city: 'Минеральные воды',
    country: 'Россия',
    date: '19 февраля',
    price: '1508',
  },
  {
    flag: flagRu,
    src: smf1x,
    src2x: smf2x,
    city: 'Симферополь',
    country: 'Россия',
    date: '19 февраля',
    price: '1508',
  },
  {
    flag: flagEs,
    src: brc1x,
    src2x: brc2x,
    city: 'Барселона',
    country: 'Испания',
    date: '24 марта',
    price: '4247',
  },
];

export default () => (
  <Popular>
    <RoundIcon src={compass} />
    <Grid>
      <Row>
        <Col xsOffset={1} xs={10} smOffset={2} sm={8} lgOffset={4} lg={4}>
          <Title>
            Популярные направления перелетов из города
            <DropDownCity />
          </Title>
        </Col>
        <Col xs={12} smOffset={1} sm={10}>
          <Filters />
          <Row>
            {populars.map(popular => (
              <Col xs={12} lg={6}>
                <Card
                  flag={popular.flag}
                  src={popular.src}
                  src2x={popular.src2x}
                  city={popular.city}
                  country={popular.country}
                  date={popular.date}
                  price={popular.price}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Grid>
  </Popular>
);
