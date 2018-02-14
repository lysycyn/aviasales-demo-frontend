import React, { Component } from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.p`
  text-transfrom: uppercase;
  color: #4a4a4a;
  margin-bottom: 16px;
`;

const Link = styled.a`
  margin-bottom: 12px;
  color: #5b5b5c;
  font-size: 12px;
`;

const AllLink = styled.a`
  font-size: 12px;
  font-weight: 500;
  color: #4a4a4a;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class ListLinks extends Component {
  render() {
    const { title, links, allLink } = { ...this.props };
    return (
      <Layout>
        <Title>{title}</Title>
        <LinksWrapper>{links.map(link => <Link href="/">{link}</Link>)}</LinksWrapper>
        <AllLink href="#">{allLink}</AllLink>
      </Layout>
    );
  }
}

export default ListLinks;
