import React, { Component } from 'react';
import styled from 'styled-components';
import Form from './Form';
import logo from '../assets/logo.svg';
import media from '../common/media';

const Layout = styled.section`
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

const HeaderWrapper = styled.header`
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

const Title = styled.div`
  margin-left: 12px;
  text-transform: lowercase;
  color: #fff;
  font-size: 20px;

  @media screen and (max-width: ${media.sm}) {
    display: none;
  }
`;

class Header extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <HeaderWrapper>
                <Logo src={logo} alt="Aviasales" />
                <Title>Aviasales</Title>
              </HeaderWrapper>
            </div>
            <div className="col-xs-12 col-sm-offset-1 col-sm-10">
              <Form />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Header;
