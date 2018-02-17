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
import krs_1x from './krasnodar_1x.jpg';
import krs_2x from './krasnodar_2x.jpg';
import sch_1x from './sochi_1x.jpg';
import sch_2x from './sochi_2x.jpg';
import spb_1x from './spb_1x.jpg';
import spb_2x from './spb_2x.jpg';
import mnv_1x from './minvody_1x.jpg';
import mnv_2x from './minvody_2x.jpg';
import smf_1x from './simferopol_1x.jpg';
import smf_2x from './simferopol_2x.jpg';
import brc_1x from './barcelona_1x.jpg';
import brc_2x from './barcelona_2x.jpg';

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
    src: krs_1x,
    src_2x: krs_2x,
    city: 'Краснодар',
    country: 'Россия',
    date: '18 марта',
    price: '1212',
  },
  {
    flag: flagRu,
    src: sch_1x,
    src_2x: sch_2x,
    city: 'Сочи (Адлер)',
    country: 'Россия',
    date: '23 марта',
    price: '1334',
  },
  {
    flag: flagRu,
    src: spb_1x,
    src_2x: spb_2x,
    city: 'Санкт-Петербург',
    country: 'Россия',
    date: '19 февраля',
    price: '1508',
  },
  {
    flag: flagRu,
    src: mnv_1x,
    src_2x: mnv_2x,
    city: 'Минеральные воды',
    country: 'Россия',
    date: '19 февраля',
    price: '1508',
  },
  {
    flag: flagRu,
    src: smf_1x,
    src_2x: smf_2x,
    city: 'Симферополь',
    country: 'Россия',
    date: '19 февраля',
    price: '1508',
  },
  {
    flag: flagEs,
    src: brc_1x,
    src_2x: brc_2x,
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
                <Card>{popular}</Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Grid>
  </Popular>
);
