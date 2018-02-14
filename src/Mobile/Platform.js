import React, { Component } from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 14px;
  color: #fff;
`;

const Image = styled.img`
  margin-right: 8px;
`;

class Platform extends Component {
  render() {
    const { src, text } = { ...this.props };
    return (
      <Layout>
        <Image src={src} />
        <Text>{text}</Text>
      </Layout>
    );
  }
}

export default Platform;
