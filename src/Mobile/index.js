import React, { Component } from 'react';
import styled from 'styled-components';
import media from '../common/media';
import Platform from './Platform';
import phone from '../assets/mobile.png';
import raiting from '../assets/raiting.svg';
import apple from '../assets/apple.svg';
import android from '../assets/android.svg';
import wf from '../assets/wf.svg';

const Layout = styled.section`
  background: linear-gradient(137.4deg, #00b0de 4.18%, #196ebd 104.18%);
  padding-top: 24px;
`;

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 50px;
`;

const Image = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 237px;
  height: 312px;

  @media screen and (max-width: ${media.sm}) {
    width: 162px;
    height: 213px;
  }
`;

const Title = styled.h2`
  text-align: center;
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 24px;
`;

const SubTitle = styled.p`
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  margin-bottom: 56px;
`;

const Raiting = styled.img`
  width: 70px;
  height: 10px;
`;

class Mobile extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <Wrapper>
            <Image src={phone} />
            <div className="row">
              <div className="col-xs-12 col-md-offset-4 col-md-8">
                <Title>Скачай мобильное приложение Aviasales.ru</Title>
                <SubTitle>
                  <Raiting src={raiting} />
                  Более 103 000 загрузок
                </SubTitle>
              </div>
            </div>
            <div className="col-xs-offset-6 col-xs-6 col-md-offset-4 col-md-8">
              <div className="row">
                <div className="col-xs-12 col-md-4">
                  <Platform src={apple} text="Iphone или Ipad" />
                </div>
                <div className="col-xs-12 col-md-4">
                  <Platform src={android} text="Android" />
                </div>
                <div className="col-xs-12 col-md-4">
                  <Platform src={wf} text="Windows Phone" />
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      </Layout>
    );
  }
}

export default Mobile;
