import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LinksSection from './LinksSection';
import AppLink from './AppLink';

import vkontakte from './vk.svg';
import facebook from './facebook.svg';
import twitter from './twitter.svg';
import instagram from './instagram.svg';
import viber from './viber.svg';
import windows from './windows.svg';
import apple from './apple.svg';
import google from './apple.svg';

const Footer = styled.footer`
  padding-top: 32px;
  background: #f8fcff;
`;

const Navigation = styled.div`
  padding-bottom: 24px;
  border-bottom: 1px solid #e0e6e8;
`;

const Social = styled.div`
  padding: 24px 0;
`;

const ArticleLink = styled.a`
  display: inline-block;
  margin-bottom: 12px;
  margin-right: 8px;
  color: #5b5b5c;
`;

const SocialLink = styled.a`
  display: inline-block;
  padding-left: 20px;
  margin-right: 12px;
  color: #5b5b5c;
  background-image: url(${props => props.icon});
  background-repeat: no-repeat;
  background-position: left center;
`;

const AppLinks = styled.div`
  padding-top: 24px;
  text-align: center;
`;

const Note = styled.p`
  padding-top: 24px;
  text-align: center;
  font-size: 12px;
  color: #5b5b5c;
`;

const Copyright = styled.p`
  padding-top: 24px;
  text-align: center;
  font-size: 12px;
  color: #5b5b5c;
`;

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
    title: 'В контакте',
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
    title: 'Apple Store',
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

export default () => (
  <Footer>
    <Navigation>
      <Grid>
        <Row>
          {navLinks.map(links => (
            <Col xs={6} sm={4} lg={2}>
              <LinksSection>{links}</LinksSection>
            </Col>
          ))}
        </Row>
      </Grid>
    </Navigation>
    <Grid>
      <Row>
        <Col xs={12}>
          <Social>
            {socialLinks.map(link => (
              <SocialLink href="#" icon={link.icon}>
                {link.title}
              </SocialLink>
            ))}
            {pageLinks.map(link => <ArticleLink>{link}</ArticleLink>)}
            <AppLinks>{appLinks.map(link => <AppLink>{link}</AppLink>)}</AppLinks>
            <Note>Поиск и бронирование отелей</Note>
            <Copyright>© 2007–2018, Aviasales — дешевые авиабилеты</Copyright>
          </Social>
        </Col>
      </Row>
    </Grid>
  </Footer>
);
