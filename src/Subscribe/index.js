import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import media from '../common/media';
import Form from './Form';

import twitter from './twitter.svg';
import facebook from './facebook.svg';
import vkontakte from './vk.svg';
import rss from './rss.svg';

const Subscribe = styled.section`
  padding: 40px 0 20px;
  background: #f8fcff;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  @media screen and (min-width: ${media.xl}) {
    flex-direction: row;
  }
`;

const Header = styled.div`
  flex-basis: 45%;
  text-align: center;

  @media screen and (min-width: ${media.xl}) {
    text-align: left;
  }
`;

const Title = styled.h3`
  margin: 0 0 4px;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #5c5c5c;
`;

const SubTitle = styled.p`
  margin: 0 0 20px;
  font-size: 16px;
  line-height: 20px;
  color: #5c5c5c;
`;

const Socials = styled.div`
  margin-bottom: 16px;
  text-align: center;
  flex: 0 0 auto;

  @media screen and (min-width: ${media.xl}) {
    margin-bottom: 0;
    text-align: left;
  }
`;

const Button = styled.button`
  width: 36px;
  height: 36px;
  margin: 0 8px;
  padding: 0;
  background-color: #9b9b9b;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;

  cursor: pointer;
`;

export default () => (
  <Subscribe>
    <Grid>
      <Row>
        <Col smOffset={1} sm={10}>
          <Wrapper>
            <Header>
              <Title>Хотите знать всё о скидках на авиабилеты?</Title>
              <SubTitle>
                Вы можете подписаться на нашу рассылку через соцсети или по электронной почте.
              </SubTitle>
            </Header>
            <Socials>
              <Button img={twitter} />
              <Button img={facebook} />
              <Button img={vkontakte} />
              <Button img={rss} />
            </Socials>
            <Form />
          </Wrapper>
        </Col>
      </Row>
    </Grid>
  </Subscribe>
);
