import React, { Component } from 'react';
import styled from 'styled-components';
import media from './../common/media';
import arrows from './../assets/arrows.svg';
import arrow from './../assets/arrow.svg';
import calendar from './../assets/calendar.svg';
import plane from './../assets/plane.svg';

const Wrapper = styled.div`
  margin-bottom: 48px;
  border-radius: 3px;
  overflow: hidden;
  display: flex;

  @media screen and (max-width: ${media.sm}) {
    margin-bottom: 16px;
    flex-wrap: wrap;
  }
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
  width: 212px;
  text-align: left;

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

  @media screen and (max-width: ${media.sm}) {
    width: 100%;
  }
`;

const SubmitButton = styled.button`
  display: inline-block;
  margin: 0 auto;
  padding: 16px 0;
  border-radius: 4px;
  background-color: #ff9241;
  text-align: center;
  color: #fff;
  font-size: 24px;
  font-weight: 700;

  @media screen and (max-width: ${media.sm}) {
    width: 100%;
  }
  )

  &::before {
    content: '';
    position: absolute;
    display: block;
  }
`;

const Icon = styled.img`
  display: inline-block;
  width: 25px;
  height: 20px;
  margin-left: 16px;
`;

const InputWrapper = styled.div`
  position: relative;
  margin-right: 2px;
  background: #fff;

  &:last-child {
    margin-right: 0;
    margin-bottom: 0;
  }

  ${props =>
    props.lg &&
    `
    @media screen and (max-width: ${media.sm}) {
      margin-right: 0;
      flex-basis: 100%; 
      max-width: 100%;

      margin-bottom: 2px;

      &:nth-child(2n) {
        margin-right: 0;
      }  
    }
  `};
  ${props =>
    props.sm &&
    `
    @media screen and (max-width: ${media.sm}) {
      margin-bottom: 2px;
      flex-basis: calc(50% - 1px); 
      max-width: calc(50% - 1px);

      &:nth-child(2n) {
      margin-right: 0;
    }
    }
  `};

  ${props =>
    props.date &&
    `
    &:before {
      content: '';
      position: absolute;
      top: 18px;
      right: 16px;
      display: block;
      width: 17px;
      height: 20px;
      background-image: url(${calendar});
      background-size: cover;
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
  background: transparent;
  cursor: pointer;
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
  color: #fff;
  font-family: Roboto;
  font-size: 32px;
  font-weight: bold;
  text-align: center;

  @media screen and (max-width: ${media.sm}) {
    font-size: 20px;
    margin-bottom: 16px;
  }
`;

const SubTitle = styled.h2`
  color: #fff;
  font-family: Roboto;
  font-size: 20px;
  text-align: center;
  margin-bottom: 40px;

  @media screen and (max-width: ${media.sm}) {
    display: none;
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

class Form extends Component {
  render() {
    return (
      <form>
        <Title>Поиск дешевых авиабилетов</Title>
        <SubTitle>Лучший способ купить авиабилеты дешево</SubTitle>
        <Wrapper>
          <InputWrapper lg>
            <Input type="text" placeholder="Город отправления" defaultValue="Москва" />
            <ButtonToggleCity />
            <AutoComplete>MOW</AutoComplete>
          </InputWrapper>
          <InputWrapper lg>
            <Input type="text" placeholder="Город прибытия" />
            <AutoComplete />
          </InputWrapper>
          <InputWrapper sm date>
            <Input type="text" placeholder="Туда" />
          </InputWrapper>
          <InputWrapper sm date>
            <Input type="text" placeholder="Обратно" />
          </InputWrapper>
          <InputWrapper lg>
            <PassengersButton>
              <PassengersCountLabel>1 пассажир</PassengersCountLabel>
              <ClassLabel>эконом</ClassLabel>
            </PassengersButton>
          </InputWrapper>
        </Wrapper>
        <SubmitButton>
          Найти билеты
          <Icon src={plane} />
        </SubmitButton>
      </form>
    );
  }
}

export default Form;
