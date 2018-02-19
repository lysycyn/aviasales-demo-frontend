import React from 'react';
import styled from 'styled-components';
import media from '../common/media';

const Card = styled.div`
  margin-bottom: 25px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);

  @media screen and (min-width: ${media.sm}) {
    margin-bottom: 23px;
  }

  @media screen and (min-width: ${media.lg}) {
    margin-bottom: 31px;
  }
`;

const Image = styled.img`
  height: 176px;
  width: 100%;
  object-fit: cover;

  @media screen and (min-width: ${media.sm}) {
    height: 212px;
  }
`;

const Content = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;

const City = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  margin: 0 0 4px;

  @media screen and (min-width: ${media.sm}) {
    font-size: 22px;
    line-height: 32px;
  }
`;

const Price = styled.a`
  display: inline-block;
  font-size: 14px;
  line-height: 20px;
  color: #00bae8;
  margin-bottom: 4px;

  @media screen and (min-width: ${media.sm}) {
    font-size: 22px;
    line-height: 32px;
  }
`;

const Country = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  color: #a0b0b9;
`;

const Date = styled.p`
  margin: 0;
  font-size: 12px;
  color: #a0b0b9;
  text-align: right;
`;

const Place = styled.div`
  display: flex;
  align-items: center;
`;

const Flag = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 16px;
  border-radius: 50%;
  display: none;

  @media screen and (min-width: ${media.sm}) {
    display: block;
  }
`;

export default props => (
  <Card>
    <Image src={props.src} srcSet={`${props.src2x} 2x`} />
    <Content>
      <Place>
        <Flag src={props.flag} />
        <div>
          <City>{props.city}</City>
          <Country>{props.country}</Country>
        </div>
      </Place>
      <div>
        <Price href="#">Найти от {props.price} ₽</Price>
        <Date>{props.date}</Date>
      </div>
    </Content>
  </Card>
);
