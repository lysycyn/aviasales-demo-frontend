import React from 'react';
import styled from 'styled-components';
import media from '../common/media';

const Wrapper = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;

  @media screen and (min-width: ${media.lg}) {
    padding-top: 0;
    padding-bottom: 0;
    border: none;
  }

  &:last-child {
    border: none;
  }
`;

const PlaceBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 24px;
`;

const City = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  margin-bottom: 4px;
`;

const Country = styled.div`
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  color: #a0b0b9;
`;

const Flag = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 16px;
  border-radius: 50%;
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

export default (props) => {
  const {
    flag, city, country, prices,
  } = { ...props.children };
  return (
    <Wrapper>
      <PlaceBlock>
        <Flag src={flag} />
        <div>
          <City>{city}</City>
          <Country>{country}</Country>
        </div>
      </PlaceBlock>
      {prices.map(row => (
        <Row key={row.city}>
          <City>{row.city}</City>
          <Price href="#">от {row.price} ₽</Price>
        </Row>
      ))}
    </Wrapper>
  );
};
