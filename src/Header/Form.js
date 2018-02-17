import React from 'react';
import styled from 'styled-components';
import media from './../common/media';
import arrows from './arrows.svg';
import arrow from './arrow.svg';
import calendar from './calendar.svg';
import plane from './plane.svg';

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
`;

const Inputs = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: ${media.sm}) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: ${media.lg}) {
    flex-wrap: no-wrap;
    margin-bottom: 48px;
    justify-content: flex-start;
  }
`;

const InputWrapperLg = styled.div`
  position: relative;
  padding-bottom: 2px;
  flex-basis: 100%;
  box-sizing: border-box;
  overflow: hidden;

  @media screen and (min-width: ${media.sm}) {
    flex-basis: 50%;
  }

  @media screen and (min-width: ${media.lg}) {
    flex-basis: 20%;
    padding-bottom: 0;
  }

  ${type =>
    type.depart &&
    `
    border-radius: 3px 3px 0 0;

    @media screen and (min-width: ${media.sm}) {
      padding-right: 1px;
      border-radius: 3px 0 0 0;
    }

    @media screen and (min-width: ${media.lg}) {
      border-radius: 3px 0 0 3px;
    }
  `};

  ${type =>
    type.arrival &&
    `
    @media screen and (min-width: ${media.sm}) {
      border-radius: 0 3px 0 0;
      padding-left: 1px;
      
    }

    @media screen and (min-width: ${media.lg}) {
      border-radius: 0;
      padding-right: 1px;
    }
  `};

  ${type =>
    type.passengers &&
    `
    padding-bottom: 0;
    border-radius: 0 0 3px 3px;

    @media screen and (min-width: ${media.sm}) {
      padding-left: 1px;  
      border-radius: 0 0 3px 0;
    }

    @media screen and (min-width: ${media.lg}) {
      flex-basis: 30%;
      border-radius: 0 3px 3px 0;
    }
  `};
`;

const InputWrapperSm = styled.div`
  flex-basis: 50%;
  padding-bottom: 2px;
  overflow: hidden;
  box-sizing: border-box;

  @media screen and (min-width: ${media.sm}) {
    flex-basis: 25%;
    padding-bottom: 0;
  }

  @media screen and (min-width: ${media.lg}) {
    flex-basis: 15%;
  }

  &:before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 18px;
    right: 16px;
    display: block;
    width: 17px;
    height: 20px;
    background-image: url(${calendar});
    background-size: cover;
  }

  ${type =>
    type.depart &&
    `
    padding-right: 1px;

    @media screen and (min-width: ${media.sm}) {
      padding-right: 1px;
      border-radius: 0 0 0 3px;
    }

    @media screen and (min-width: ${media.lg}) {
      padding-left: 1px;
      border-radius:
    }
  `};

  ${type =>
    type.arrival &&
    `
    padding-left: 1px;

    @media screen and (min-width: ${media.sm}) {
      padding-right: 1px;
    }
  `};
`;

const Input = styled.input`
  position: relative;
  width: 100%;
  padding: 18px 16px;
  box-sizing: border-box;
  color: #4a4a4a;
  outline: none;
  border: none;
  background: #fff;
  cursor: pointer;
`;

const ButtonToggleCity = styled.button`
  position: absolute;
  top: 19px;
  right: 16px;
  display: block;
  width: 16px;
  height: 18px;
  background-image: url(${arrows});
  background-size: cover;
`;

const PassengersButton = styled.button`
  padding: 18px 16px;
  position: relative;
  width: 100%;
  text-align: left;
  background: #fff;

  &::before {
    content: '';
    display: block;
    width: 10px;
    height: 5px;
    right: 16px;
    top: 24px;
    position: absolute;
    background-image: url(${arrow});
  }
`;

const Buttons = styled.div`
  text-align: center;
`;

const Search = styled.button`
  display: inline-block;
  width: 100%;
  padding: 16px 0;
  border-radius: 4px;
  background-color: #ff9241;
  text-align: center;
  color: #fff;
  font-size: 24px;
  font-weight: 700;

  @media screen and (min-width: ${media.sm}) {
    width: 308px;
    margin: 0 auto;
  }
`;

const Icon = styled.img`
  display: inline-block;
  width: 25px;
  height: 20px;
  margin-left: 16px;
`;

const AutoComplete = styled.span`
  position: absolute;
  display: inline-block;
  top: 0;
  right: 43px;
  top: 19px;
  text-transform: uppercase;
  color: #a0b0b9;
  font-size: 16px;
  line-height: 20px;
`;

const Title = styled.h1`
  margin: 0 0 8px;
  color: #fff;
  font-family: Roboto;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 16px;
  font-weight: bold;
  text-align: center;

  @media screen and (max-width: ${media.sm}) {
    font-size: 32px;
    margin-bottom: 8px;
  }

  @media screen and (max-width: ${media.lg}) {
    font-size: 40px;
    line-height: 48px;
  }
`;

const SubTitle = styled.h2`
  color: #fff;
  font-family: Roboto;
  font-size: 20px;
  text-align: center;
  margin: 0 0 40px;
  display: none;

  @media screen and (min-width: ${media.sm}) {
    display: block;
  }

  @media screen and (min-width: ${media.lg}) {
    font-size: 24px;
  }
`;

const PassengersCountLabel = styled.span`
  font-size: 16px;
  &::after {
    content: ',';
  }
`;

const ClassLabel = styled.span`
  display: inline-block;
  padding-left: 5px;
  font-size: 16px;
  color: #a0b0b9;
`;

export default () => (
  <Form>
    <Title>Поиск дешевых авиабилетов</Title>
    <SubTitle>Лучший способ купить авиабилеты дешево</SubTitle>
    <Inputs>
      <InputWrapperLg depart>
        <Input type="text" placeholder="Город отправления" defaultValue="Москва" />
        <ButtonToggleCity />
        <AutoComplete>MOW</AutoComplete>
      </InputWrapperLg>
      <InputWrapperLg arrival>
        <Input type="text" placeholder="Город прибытия" />
        <AutoComplete />
      </InputWrapperLg>
      <InputWrapperSm depart>
        <Input type="text" placeholder="Туда" />
      </InputWrapperSm>
      <InputWrapperSm arrival>
        <Input type="text" placeholder="Обратно" />
      </InputWrapperSm>
      <InputWrapperLg passengers>
        <PassengersButton>
          <PassengersCountLabel>1 пассажир</PassengersCountLabel>
          <ClassLabel>эконом</ClassLabel>
        </PassengersButton>
      </InputWrapperLg>
    </Inputs>
    <Buttons>
      <Search>
        Найти билеты
        <Icon src={plane} />
      </Search>
    </Buttons>
  </Form>
);
