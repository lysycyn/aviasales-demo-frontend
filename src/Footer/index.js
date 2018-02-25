import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LinksSection from './LinksSection';
import AppLink from './AppLink';
import media from '../common/media';

import vkontakte from './vk.svg';
import facebook from './facebook.svg';
import twitter from './twitter.svg';
import instagram from './instagram.svg';
import viber from './viber.svg';
import windows from './windows.svg';
import apple from './apple.svg';
import google from './google.svg';

const navLinks = [
  {
    title: 'Страны',
    links: ['Россия', 'Таиланд', 'Черногория', 'Кипр', 'Болгария', 'Грузия'],
    allLink: 'Все страны',
  },
  {
    title: 'Города',
    links: ['Москва', 'Санкт-петербург', 'Симферополь', 'Адлер', 'Екатеринбург', 'Лондон'],
    allLink: 'Все города',
  },
  {
    title: 'Авиакомпании',
    links: ['Air Berlin', 'Air France', 'Alitalia', 'Air Baltic', 'Emirates', 'KLM'],
    allLink: 'Все авиакомпании',
  },
  {
    title: 'Аэропорты',
    links: ['Шереметьево', 'Курумоч', 'Домодедово', 'Толмачево', 'Владивосток', 'Гамбург'],
    allLink: 'Все аэропорты',
  },
  {
    title: 'Направления',
    links: ['MOW – SIP', 'MOW – AER', 'MOW – TIV', 'MOW – MRV', 'LED – MOW', 'MOW – BKK'],
  },
  {
    title: 'Сервисы',
    links: [
      'Горящие авиабилеты',
      'Календарь низких цен',
      'Карта низких цен',
      'Спецпредложения',
      'Таблица цен',
      'Блог',
      'Помощь',
    ],
  },
];

const socialLinks = [
  {
    icon: vkontakte,
    title: 'В контакте',
  },
  {
    icon: facebook,
    title: 'Facebook',
  },
  {
    icon: twitter,
    title: 'Твиттер',
  },
  {
    icon: instagram,
    title: 'Инстаграм',
  },
  {
    icon: viber,
    title: 'Вайбер',
  },
];

const appLinks = [
  {
    icon: apple,
    title: 'Apple Store',
    subTitle: 'скачайте в',
  },
  {
    icon: google,
    title: 'Google Play',
    subTitle: 'скачайте в',
  },
  {
    icon: windows,
    title: 'Windows Phone',
  },
];

const pageLinks = [
  'О компании',
  'Партнерская программа',
  'Реклама',
  'Вакансии',
  'Помощь',
  'Правила',
  'White Label авиабилеты',
];

const Footer = styled.footer`
  padding-top: 32px;
  background: #f8fcff;
`;

const Navigation = styled.div`
  border-bottom: 1px solid #e0e6e8;
  margin-bottom: 30px;
`;

const Articles = styled.div``;

const ArticleLink = styled.a`
  font-size: 12px;
  display: inline-block;
  margin-bottom: 8px;
  margin-right: 8px;
  color: #5b5b5c;
`;

const Social = styled.div`
  display: flex;
  padding: 12px 0 24px;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media screen and (min-width: ${media.xl}) {
    padding: 8px 0 12px;
  }
`;

const SocialLink = styled.a`
  display: inline-block;
  flex-basis: 33%;
  padding-left: 20px;
  box-sizing: border-box;
  margin-bottom: 8px;
  color: #5b5b5c;
  background-image: url(${props => props.icon});
  background-repeat: no-repeat;
  background-position: left center;

  @media screen and (min-width: ${media.sm}) {
    flex-basis: auto;
    margin-right: 12px;
    font-size: 12px;
  }
`;

const AppLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${media.sm}) {
    flex-direction: row;
    justify-content: flex-start;
  }

  @media screen and (min-width: ${media.xl}) {
    justify-content: flex-end;
  }
`;

const Note = styled.p`
  margin: 0 0 24px;
  text-align: center;
  font-size: 12px;
  color: #5b5b5c;

  @media screen and (min-width: ${media.sm}) {
    text-align: left;
  }
`;

const Copyright = styled.p`
  margin: 0 0 12px;
  padding-top: 24px;
  text-align: center;
  font-size: 12px;
  color: #5b5b5c;

  @media screen and (min-width: ${media.sm}) {
    text-align: left;
  }

  @media screen and (min-width: ${media.xl}) {
    text-align: right;
  }
`;

export default () => (
  <Footer>
    <Navigation>
      <Grid>
        <Row>
          {navLinks.map(links => (
            <Col xs={6} sm={3} xl={2}>
              <LinksSection>{links}</LinksSection>
            </Col>
          ))}
        </Row>
      </Grid>
    </Navigation>
    <Grid>
      <Row>
        <Col xs={12} xl={7}>
          <Articles>{pageLinks.map(link => <ArticleLink>{link}</ArticleLink>)}</Articles>
          <Social>
            {socialLinks.map(link => (
              <SocialLink href="#" icon={link.icon}>
                {link.title}
              </SocialLink>
            ))}
          </Social>
          <Note>Поиск и бронирование отелей</Note>
        </Col>
        <Col xs={12} xl={5}>
          <AppLinks>
            {appLinks.map(link => (
              <AppLink subTitle={link.subTitle} icon={link.icon}>
                {link.title}
              </AppLink>
            ))}
          </AppLinks>
          <Copyright>© 2007–2018, Aviasales — дешевые авиабилеты</Copyright>
        </Col>
      </Row>
    </Grid>
  </Footer>
);
