import React, { Component } from 'react';
import styled from 'styled-components';
import media from '../common/media';
import Offer from './Offer';
import imgOfferTitle from '../assets/imgOfferTitle.png';
import pobeda from '../assets/pobeda.png';
import lufthansa from '../assets/lufthansa.png';

const Layout = styled.section`
  padding-top: 24px;
  background: linear-gradient(106.41deg, #00b0de -42.02%, #196ebd 57.98%);

  @media screen and (max-width: ${media.sm}) {
    padding-top: 16px;
    background: linear-gradient(162.96deg, #00b0de 41.41%, #196ebd 141.41%);
  }
`;

const Title = styled.h2`
  font-weight: 500;
  text-align: left;
  color: #fff;

  @media screen and (max-width: ${media.sm}) {
    margin-bottom: 24px;
    font-size: 28px;
  }
`;

class SpecialOffers extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Title>Спецпредложения на авиабилеты</Title>
            </div>
            <div className="col-xs-12 col-md-4">
              <Offer
                titleSrc={imgOfferTitle}
                title="Билеты от 499 рублей"
                companySrc={pobeda}
                price="499"
                remaining="49"
                text="
                  Билеты от 499 рублей!
                  Специальное предложение от авиакомпании Победа"
              />
            </div>
            <div className="col-xs-12 col-md-4">
              <Offer
                titleSrc=""
                title="В Нью-Йорк от 20680 ₽"
                companySrc={lufthansa}
                price="20680"
                remaining="49"
                text="
                  Из Москвы в США от 20680 рублей!
                  Специальное предложение от авиакомпании Lufthansa"
              />
            </div>
            <div className="col-xs-12 col-md-4">
              <Offer
                titleSrc=""
                title="В Нью-Йорк от 20680 ₽"
                companySrc={lufthansa}
                price="20680"
                remaining="49"
                text="
                  Из Москвы в США от 20680 рублей!
                  Специальное предложение от авиакомпании Lufthansa"
              />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default SpecialOffers;
