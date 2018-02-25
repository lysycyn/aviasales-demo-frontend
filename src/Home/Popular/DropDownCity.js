import React from 'react';
import styled from 'styled-components';
import media from '../../common/media';
import edit from './icon_edit.svg';

const DropDownCity = styled.div`
  display: block;
  text-align: center;
  position: relative;

  @media screen and (min-width: ${media.sm}) {
    display: inline-block;
  }
`;

const DropDownList = styled.div`
  position: absolute;
  display: none;
`;

const Button = styled.button`
  color: #1cade0;
  font-size: 18px;

  &::after {
    content: '';
    display: inline-block;
    margin-left: 5px;
    width: 15px;
    height: 15px;
    background-image: url(${edit});
  }

  @media screen and (min-width: ${media.sm}) {
    font-size: 24px;
  }
`;

export default () => (
  <DropDownCity>
    <Button>Москва</Button>
    <DropDownList />
  </DropDownCity>
);
