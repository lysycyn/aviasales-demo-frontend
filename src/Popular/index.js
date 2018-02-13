import React, { Component } from 'react';
import styled from 'styled-components';
import media from '../common/media';
import Filters from './Filters';
import RoundIcon from './../common/RoundIcon';
import compass from './../assets/compass.svg';
import DropDownCity from './DropDownCity';

const Layout = styled.section`
  padding-top: 56px;
  background-color: #f8fcff;

  @media screen and (max-width: ${media.sm}) {
    padding-top: 40px;
  }
`;

const Title = styled.h2`
  font-weight: 500;
  text-align: center;
  margin-bottom: 56px;

  @media screen and (max-width: ${media.sm}) {
    margin-bottom: 32px;
    font-size: 18px;
    line-height: 24px;
  }
`;

class Popular extends Component {
  render() {
    return (
      <Layout>
        <RoundIcon src={compass} />
        <div className="container">
          <div className="row">
            <div className="col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8 col-lg-offset-4 col-lg-4">
              <Title>
                Популярные направления перелетов из города
                <DropDownCity />
              </Title>
            </div>
          </div>
        </div>
        <Filters />
      </Layout>
    );
  }
}

export default Popular;
