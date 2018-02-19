import React from 'react';
import styled from 'styled-components';
import media from './../common/media';

const Platform = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (min-width: ${media.sm}) {
    padding: 0 21px;
    border-right: 1px solid #fff;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
      border: none;
    }
  }
`;

const Title = styled.p`
  margin: 0;
  font-size: 14px;
  color: #fff;
`;

const Image = styled.img`
  margin-right: 8px;
`;

export default (props) => {
  const { img } = { ...props };
  return (
    <Platform>
      <Image src={img} />
      <Title>{props.children}</Title>
    </Platform>
  );
};
