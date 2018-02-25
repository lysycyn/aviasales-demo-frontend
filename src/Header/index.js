import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Form from './Form';
import logo from './logo.svg';
import media from '../common/media';

const Header = styled.section`
  background: linear-gradient(
    #00b0de 0%,
    #01aedc 3.7%,
    #02abdb 7.44%,
    #02abdb 11.16%,
    #02abdb 11.38%,
    #196ebd 100%
  );
  height: 100vh;
  display: flex;
  align-items: center;
`;

const Title = styled.header`
  position: absolute;
  top: 0;
  padding: 12px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
`;

const Name = styled.p`
  display: none;
  margin: 0;
  margin-left: 12px;
  text-transform: lowercase;
  color: #fff;
  font-size: 20px;

  @media screen and (min-width: ${media.sm}) {
    display: block;
  }
`;

export default () => (
  <Header>
    <Grid>
      <Row>
        <Col xs={12}>
          <Title>
            <Logo src={logo} alt="Aviasales" />
            <Name>Aviasales</Name>
            {/* <Route path="/search" component={}/> */}
          </Title>
        </Col>
        <Col xs={12} smOffset={1} sm={10}>
          <Form />
        </Col>
      </Row>
    </Grid>
  </Header>
);
