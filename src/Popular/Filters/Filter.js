import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

const Icon = styled.div`
  display: inline-block;
  margin-bottom: 12px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  box-shadow: 0px 2px 4px rgba(74, 74, 74, 0.1);
  background-color: #fff;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-position: center;
`;

const Title = styled.p`
  color: #00ace2;
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
`;

const Button = styled.button`
  text-align: center;
  max-width: 80px;

  &:hover {
    border-bottom: 1px solid #00ace2;
  }

  &:hover ${Icon} {
    box-shadow: 0px 4px 16px rgba(74, 74, 74, 0.12);
  }

  &:hover ${Title} {
    color: #5c5c5c;
  }
`;

class Filter extends Component {
  render() {
    return (
      <Wrapper>
        <Button>
          <Icon src={this.props.src} />
          <Title>{this.props.title}</Title>
        </Button>
      </Wrapper>
    );
  }
}

export default Filter;
