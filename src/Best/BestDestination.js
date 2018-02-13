import React, { Component } from 'react';
import styled from 'styled-components';
import media from '../common/media';

const Wrapper = styled.div`
  border-right: 1px dashed #afbec6;
  padding-right: 16px;

  @media screen and (max-width: ${media.sm}) {
    padding-right: 0;
    padding-top: 24px;
    padding-bottom: 24px;
    border: none;
    border-bottom: 1px dashed #afbec6;
  }
`;

const PlaceBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 24px;
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

const Country = styled.div`
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  color: #a0b0b9;
`;

const Flag = styled.img`
  width: 44px;
  height: 44px;
  margin-right: 16px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Price = styled.a`
  font-size: 16px;
  line-height: 20px;
  color: #00bae8;
`;

class BestDestination extends Component {
  render() {
    return (
      <Wrapper>
        <PlaceBlock>
          <Flag src={this.props.flag} />
          <div>
            <City>{this.props.city}</City>
            <Country>{this.props.country}</Country>
          </div>
        </PlaceBlock>
        {this.props.rows.map(row => (
          <Row key={row.city}>
            <City>{row.city}</City>
            <Price href="#">от {row.price} ₽</Price>
          </Row>
        ))}
      </Wrapper>
    );
  }
}

export default BestDestination;
