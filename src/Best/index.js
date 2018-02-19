import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import media from '../common/media';
import BestDestination from './BestDestination';
import calendar from './calendarBig.svg';
import RoundIcon from '../common/RoundIcon';
import flagRu from '../assets/flag_ru.png';
import flagAm from '../assets/flag_am.png';
import flagMd from '../assets/flag_md.png';

const pricesList = [
  {
    flag: flagRu,
    prices: [
      { city: 'Из Москвы', price: '4813' },
      { city: 'Из Санкт-Петербурга', price: '7857' },
      { city: 'Из Новосибирска', price: '15127' },
      { city: 'Из Екатеринбурга', price: '9275' },
      { city: 'Из Челябинска', price: '9185' },
    ],
    country: 'Россия',
    city: 'Симферополь',
  },
  {
    flag: flagAm,
    prices: [
      { city: 'Из Москвы', price: '4813' },
      { city: 'Из Санкт-Петербурга', price: '7857' },
      { city: 'Из Новосибирска', price: '15127' },
      { city: 'Из Екатеринбурга', price: '9275' },
      { city: 'Из Челябинска', price: '9185' },
    ],
    country: 'Армения',
    city: 'Ереван',
  },
  {
    flag: flagMd,
    prices: [
      { city: 'Из Москвы', price: '4813' },
      { city: 'Из Санкт-Петербурга', price: '7857' },
      { city: 'Из Новосибирска', price: '15127' },
      { city: 'Из Екатеринбурга', price: '9275' },
      { city: 'Из Челябинска', price: '9185' },
    ],
    country: 'Молдова',
    city: 'Кишенев',
  },
];

const Wrapper = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f8fcff;

  @media screen and (min-width: ${media.sm}) {
    padding-top: 56px;
    padding-bottom: 60px;
  }
`;

const Title = styled.h2`
  font-weight: 500;
  text-align: center;
  margin: 0 0 40px;
  font-size: 18px;
  line-height: 24px;

  @media screen and (min-width: ${media.sm}) {
    margin-bottom: 60px;
    font-size: 24px;
    line-height: 36px;
  }
`;

const Text = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  padding-top: 40px;
  margin: 0 0 24px;
  color: #4a4a4a;

  @media screen and (min-width: ${media.lg}) {
    line-height: 26px;
  }
`;

const Notice = styled.p`
  margin: 0;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  color: #a0b0b9;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed #afbec6;

  @media screen and (min-width: ${media.lg}) {
    width: 1px;
    height: 100%;
    margin: 0 auto;
    border-bottom: none;
    border-right: 1px dashed #afbec6;
  }
`;

export default () => (
  <Wrapper>
    <RoundIcon src={calendar} />
    <Grid>
      <Row>
        <Col xsOffset={1} xs={10} smOffset={2} sm={8} lgOffset={4} lg={4}>
          <Title>Лучшие цены на авиабилеты за последний месяц</Title>
        </Col>
        <Col xs={12}>
          <Row between="lg">
            <Col lg={1} />
            <Col xs={12} smOffset={1} sm={10} lgOffset={0} lg={3}>
              <BestDestination
                flag={pricesList[0].flag}
                country={pricesList[0].country}
                city={pricesList[0].city}
              >
                {pricesList[0].prices}
              </BestDestination>
            </Col>
            <Col xs={12} smOffset={1} sm={10} lgOffset={0} lg>
              <Divider />
            </Col>
            <Col xs={12} smOffset={1} sm={10} lgOffset={0} lg={3}>
              <BestDestination
                flag={pricesList[1].flag}
                country={pricesList[1].country}
                city={pricesList[1].city}
              >
                {pricesList[1].prices}
              </BestDestination>
            </Col>
            <Col xs={12} smOffset={1} sm={10} lgOffset={0} lg>
              <Divider />
            </Col>
            <Col xs={12} smOffset={1} sm={10} lgOffset={0} lg={3}>
              <BestDestination
                flag={pricesList[2].flag}
                country={pricesList[2].country}
                city={pricesList[2].city}
              >
                {pricesList[2].prices}
              </BestDestination>
            </Col>
            <Col lg={1} />
          </Row>
        </Col>
        <Col xs={12} smOffset={2} sm={8} lgOffset={3} lg={6}>
          <Text>
            Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220 стран мира. Поиск и
            сравнение цен на авиабилеты среди 100 агентств и 728 авиакомпаний.
          </Text>
          <Notice>
            Цены, найденные пользователями за последние 48 часов, не являются офертой.
          </Notice>
        </Col>
      </Row>
    </Grid>
  </Wrapper>
);
