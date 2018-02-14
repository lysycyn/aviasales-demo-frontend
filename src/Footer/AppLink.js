import React, { Component } from 'react';
import styled from 'styled-components';

const Layout = styled.a`
  display: inline-block;
  margin-bottom: 12px;
  border-radius: 4px;
  padding: 6px 16px;
  background-color: #1e292d;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-position: 16px center;
  padding-left: 43px;
`;

const Title = styled.p`
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
`;

const Note = styled.p`
  text-align: left;
  color: #fff;
  font-size: 9px;
  margin-bottom: 8px;
`;

class AppLink extends Component {
  render() {
    return (
      <Layout src={this.props.src}>
        <Note>скачайте в</Note>
        <Title>{this.props.title}</Title>
      </Layout>
    );
  }
}

export default AppLink;
