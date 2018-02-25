import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import media from '../../common/media';
import Platform from './Platform';
import phone from './mobile.png';
import rating from './rating.svg';
import apple from './apple.svg';
import android from './android.svg';
import windowsPhone from './wphone.svg';

const MobileApp = styled.section`
  background: linear-gradient(137.4deg, #00b0de 4.18%, #196ebd 104.18%);
  padding-top: 24px;
`;

const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 50px;
`;

const Image = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 162px;

  @media screen and (min-width: ${media.sm}) {
    width: 30%;
    max-width: 237px;
  }
`;

const Title = styled.h2`
  text-align: center;
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 24px;

  @media screen and (min-width: ${media.sm}) {
    text-align: left;
  }
`;

const SubTitle = styled.p`
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  margin-bottom: 56px;

  @media screen and (min-width: ${media.sm}) {
    text-align: left;
  }
`;

const Raiting = styled.img`
  width: 70px;
  height: 10px;
  margin-right: 10px;
`;

const Platforms = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${media.sm}) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const platforms = [
  {
    img: apple,
    title: 'Iphone или Ipad',
  },
  {
    img: android,
    title: 'Google Play',
  },
  {
    img: windowsPhone,
    title: 'Windows Phone',
  },
];

export default () => (
  <MobileApp>
    <Grid>
      <Row>
        <Col xs={12} lgOffset={1} lg={10}>
          <ImageWrapper>
            <Image src={phone} />
            <Row>
              <Col xs={12} smOffset={4} sm={8}>
                <Title>Скачай мобильное приложение Aviasales.ru</Title>
                <SubTitle>
                  <Raiting src={rating} />
                  Более 103 000 загрузок
                </SubTitle>
              </Col>
              <Col xsOffset={6} xs={6} smOffset={4} sm={8}>
                <Row>
                  <Platforms>
                    {platforms.map(platform => (
                      <Platform img={platform.img}>{platform.title}</Platform>
                    ))}
                  </Platforms>
                </Row>
              </Col>
            </Row>
          </ImageWrapper>
        </Col>
      </Row>
    </Grid>
  </MobileApp>
);
