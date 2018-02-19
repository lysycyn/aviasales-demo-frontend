import React from 'react';
import styled from 'styled-components';
import media from './../common/media';

const Link = styled.a`
  display: inline-block;
  width: 85px;
  margin-bottom: 12px;
  border-radius: 4px;
  padding: 8px 16px;
  background-color: #1e292d;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-position: 16px center;
  padding-left: 43px;

  @media screen and (min-width: ${media.sm}) {
    margin-right: 16px;
    margin-bottom: 0;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const Title = styled.p`
  margin: 0;
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  text-align: left;
  max-width: 80px;
`;

const Note = styled.p`
  margin: 0;
  text-align: left;
  color: #fff;
  font-size: 9px;
  min-height: 9px;
  margin-bottom: 5px;
`;

export default props => (
  <Link href="/" src={props.icon}>
    {props.subTitle && <Note>{props.subTitle}</Note>}
    <Title>{props.children}</Title>
  </Link>
);
