import React, { Component } from 'react';
import styled from 'styled-components';
import ListLinks from './ListLinks';
import vk from '../assets/vk.svg';
import appleWhite from '../assets/appleWhite.svg';
import AppLink from './AppLink';

const Layout = styled.section`
  padding-top: 32px;
  background: #f8fcff;
`;

const NavWrapper = styled.div`
  padding-bottom: 24px;
  border-bottom: 1px solid #e0e6e8;
`;

const AppWrapper = styled.div`
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
  color: #5b5b5c;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-position: left center;
`;

const AppLinksWrapper = styled.div`
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
    links: ['Москва', 'Санкт-петербург', 'Семферополь', 'Адлер', 'Екатеринбург', 'Лондон'],
    allLink: 'Все города',
  },
  {
    title: 'Страны',
    links: ['Россия', 'Таиланд', 'Черногория', 'Кипр', 'Болгария', 'Грузия'],
    allLink: 'Все страны',
  },
  {
    title: 'Города',
    links: ['Москва', 'Санкт-петербург', 'Семферополь', 'Адлер', 'Екатеринбург', 'Лондон'],
    allLink: 'Все города',
  },
];

class Header extends Component {
  render() {
    return (
      <Layout>
        <NavWrapper>
          <div className="container">
            <div className="row">
              {navLinks.map(list => (
                <div className="col-xs-6">
                  <ListLinks title={list.title} allLink={list.allLink} links={list.links} />
                </div>
              ))}
            </div>
          </div>
        </NavWrapper>
        <AppWrapper>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <ArticleLink href="#">О компании</ArticleLink>
                <ArticleLink href="#">Партнерская программа</ArticleLink>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-4">
                <SocialLink href="#" src={vk}>
                  В контакте
                </SocialLink>
              </div>
              <div className="col-xs-4">
                <SocialLink href="#" src={vk}>
                  В контакте
                </SocialLink>
              </div>
              <div className="col-xs-4">
                <SocialLink href="#" src={vk}>
                  В контакте
                </SocialLink>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <Note>Поиск и бронирование отелей</Note>
                <AppLinksWrapper>
                  <div className="row">
                    <div className="col-xs-12">
                      <AppLink src={appleWhite} title="Apple Store" />
                    </div>
                    <div className="col-xs-12">
                      <AppLink src={appleWhite} title="Apple Store" />
                    </div>
                    <div className="col-xs-12">
                      <AppLink src={appleWhite} title="Apple Store" />
                    </div>
                  </div>
                </AppLinksWrapper>
                <Copyright>© 2007–2018, Aviasales — дешевые авиабилеты</Copyright>
              </div>
            </div>
          </div>
        </AppWrapper>
      </Layout>
    );
  }
}

export default Header;
