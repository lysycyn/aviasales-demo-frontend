import React, { Component } from 'react';
import styled from 'styled-components';
import media from '../common/media';

const Wrapper = styled.div`
  margin-bottom: 31px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);

  @media screen and (max-width: ${media.sm}) {
    margin-bottom: 25px;
  }
`;

const ImageBlock = styled.div`
  height: 212px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: ${media.sm}) {
    height: 176px;
  }
`;

const TextBlock = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;

const City = styled.div`
  font-size: 22px;
  line-height: 32px;
  font-weight: 700;
  margin-bottom: 4px;

  @media screen and (max-width: ${media.sm}) {
    font-size: 16px;
    line-height: 20px;
  }
`;

const Price = styled.a`
  display: inline-block;
  font-size: 22px;
  line-height: 32px;
  color: #00bae8;
  margin-bottom: 4px;

  @media screen and (max-width: ${media.sm}) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const Country = styled.div`
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  color: #a0b0b9;
`;

const Date = styled.div`
  font-size: 12px;
  color: #a0b0b9;
`;

const PlaceBlock = styled.div`
  display: flex;
  align-items: center;
`;

const Flag = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 16px;

  @media screen and (max-width: ${media.sm}) {
    display: none;
  }
`;

class Card extends Component {
  render() {
    return (
      <Wrapper>
        <ImageBlock src={this.props.srcImg} />
        <TextBlock>
          <PlaceBlock>
            <Flag src={this.props.flag} />
            <div>
              <City>{this.props.city}</City>
              <Country>{this.props.country}</Country>
            </div>
          </PlaceBlock>
          <div>
            <Price href={this.props.href}>Найти от {this.props.price} ₽</Price>
            <Date>{this.props.date}</Date>
          </div>
        </TextBlock>
      </Wrapper>
    );
  }
}

export default Card;
