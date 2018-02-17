import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import media from '../common/media';
import Offer from './Offer';
import provider from './provider.png';
import pobeda from './pobeda.png';
import lufthanza from './lufthanza.png';

const Special = styled.section`
  padding-top: 16px;
  padding-bottom: 24px;
  background: linear-gradient(162.96deg, #00b0de 41.41%, #196ebd 141.41%);

  @media screen and (min-width: ${media.sm}) {
    padding-top: 24px;

    background: linear-gradient(106.41deg, #00b0de -42.02%, #196ebd 57.98%);
  }
`;

const Title = styled.h2`
  font-weight: 500;
  text-align: left;
  font-size: 30px;
  margin-bottom: 24px;
  color: #fff;

  @media screen and (min-width: ${media.sm}) {
    margin-bottom: 24px;
    font-size: 30px;
  }
`;

const Notices = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${media.sm}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const AllLink = styled.a`
  font-size: 16px;
  margin-bottom: 8px;
  color: #fff;
  text-decoration: underline;
`;

const Remark = styled.span`
  color: #fff;
  font-size: 16px;
`;

const offers = [
  {
    titleBg: provider,
    title: 'Билеты от 499 рублей',
    companyImgSrc: pobeda,
    price: '499',
    remaining: '49',
    text: 'Билеты от 499 рублей! Специальное предложение от авиакомпании Победа',
  },
  {
    titleBg: provider,
    title: 'В Нью-Йорк от 20680 ₽',
    companyImgSrc: lufthanza,
    price: '20680',
    remaining: '49',
    text: 'Из Москвы в США от 20680 рублей! Специальное предложение от авиакомпании Lufthansa',
  },
  {
    titleBg: provider,
    title: 'В Лос-Анджелес от 22360 ₽',
    companyImgSrc: lufthanza,
    price: '22360',
    remaining: '49',
    text: 'Из Москвы в США от 22360 рублей! Специальное предложение от авиакомпании Lufthansa',
  },
];

export default () => (
  <Special>
    <Grid>
      <Row>
        <Col xs={12} lgOffset={1} lg={10}>
          <Title>Спецпредложения на авиабилеты</Title>
        </Col>
        <Col xs={12} lgOffset={1} lg={10}>
          <Row>
            {offers.map(offer => (
              <Col xs={12} md={4}>
                <Offer>{offer}</Offer>
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={12} lgOffset={1} lg={10}>
          <Notices>
            <AllLink href="#">Смотреть все спецпредложения</AllLink>
            <Remark>* средняя цена по направлению</Remark>
          </Notices>
        </Col>
      </Row>
    </Grid>
  </Special>
);
