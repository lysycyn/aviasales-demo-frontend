import React, { Component } from 'react';
import styled from 'styled-components';
import media from '../common/media';
import BestDestination from './BestDestination';
import calendar from '../assets/calendarBig.svg';
import RoundIcon from '../common/RoundIcon';
import flagRu from '../assets/flag_ru.png';
import flagAm from '../assets/flag_am.png';
import flagMd from '../assets/flag_md.png';

const rows1 = [
  { city: 'Из Москвы', price: '4813' },
  { city: 'Из Санкт-Петербурга', price: '7857' },
  { city: 'Из Новосибирска', price: '15127' },
  { city: 'Из Екатеринбурга', price: '9275' },
  { city: 'Из Челябинска', price: '9185' },
];

const Layout = styled.section`
  padding-top: 56px;
  padding-bottom: 60px;
  background-color: #f8fcff;

  @media screen and (max-width: ${media.sm}) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

const Title = styled.h2`
  font-weight: 500;
  text-align: center;
  margin-bottom: 16px;

  @media screen and (max-width: ${media.sm}) {
    font-size: 18px;
    line-height: 24px;
  }
`;

const Text = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  padding-top: 40px;
  margin-bottom: 24px;
  color: #4a4a4a;
`;

const Notice = styled.p`
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  color: #a0b0b9;
`;

class Best extends Component {
  render() {
    return (
      <Layout>
        <RoundIcon src={calendar} />
        <div className="container">
          <div className="row">
            <div className="
              col-xs-offset-1
              col-xs-10
              col-sm-offset-2
              col-sm-8
              col-lg-offset-4
              col-lg-4"
            >
              <Title>Лучшие цены на авиабилеты за последний месяц</Title>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-lg-4">
              <BestDestination rows={rows1} flag={flagRu} country="Россия" city="Симферополь" />
            </div>
            <div className="col-xs-12 col-lg-4">
              <BestDestination rows={rows1} flag={flagAm} country="Армения" city="Ереван" />
            </div>
            <div className="col-xs-12 col-lg-4">
              <BestDestination rows={rows1} flag={flagMd} country="Молдова" city="Кишенев" />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-offset-2 col-sm-8 col-lg-offset-4 col-lg-4">
              <Text>
                Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220 стран мира. Поиск и
                сравнение цен на авиабилеты среди 100 агентств и 728 авиакомпаний.
              </Text>
              <Notice>
                Цены, найденные пользователями за последние 48 часов, не являются офертой.
              </Notice>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Best;
