import React, { Component } from 'react';
import styled from 'styled-components';
import media from '../common/media';
import edit from '../assets/edit.svg';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;

  @media screen and (max-width: ${media.sm}) {
    display: block;
    text-align: center;
  }
`;

const DropDownList = styled.div`
  position: absolute;
  display: none;
`;

const Button = styled.button`
  color: #1cade0;
  font-size: 24px;

  &::after {
    content: '';
    display: inline-block;
    margin-left: 5px;
    width: 15px;
    height: 15px;
    background-image: url(${edit});
  }

  @media screen and (max-width: ${media.sm}) {
    font-size: 18px;
  }
`;

class DropDownCity extends Component {
  render() {
    return (
      <Wrapper>
        <Button>Москва</Button>
        <DropDownList />
      </Wrapper>
    );
  }
}

export default DropDownCity;
