import React, { Component } from 'react';
import styled from 'styled-components';

const Layout = styled.section`
  margin-bottom: 12px;
`;

const Header = styled.div`
  background-color: #cd2027;
  padding: 12px 16px;
`;

const Content = styled.div`
  padding: 16px 8px;
  background-color: #fff;
`;

const Title = styled.p`
  background-size: 38px 38px;
  background-repeat: no-repeat;
  background-image: url(${props => props.src});
  background-position: right center;
  font-size: 16px;
  line-height: 38px;
  color: #fff;
`;

const CompanyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const CompanyImage = styled.img`
  width: 122px;
  height: 30px;
`;

const PriceWrapper = styled.div`
  text-align: right;
`;

const Price = styled.span`
  color: #5c5c5c;
  font-size: 20px;
  line-height: 16px;

  &::before {
    content: 'от ';
    font-size: 12px;
  }

  &::after {
    content: ' ₽';
    font-size: 20px;
    line-height: 16px;
  }
`;

const Remaining = styled.div`
  color: #d93633;
  font-size: 12px;
  text-align: right:
`;

const Text = styled.p`
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 45px;
`;

const Button = styled.button`
  padding: 10px 0;
  display: block;
  width: 100%;
  font-size: 12px;
  color: #d93533;
  line-height: 20px;
  background: transparent;
  border: 2px solid #cd1f27;
  border-radius: 3px;
`;

class Offer extends Component {
  render() {
    const {
      titleSrc, title, companySrc, price, remaining, text,
    } = { ...this.props };
    return (
      <Layout>
        <Header>
          <Title src={titleSrc}>{title}</Title>
        </Header>
        <Content>
          <CompanyWrapper>
            <CompanyImage src={companySrc} />
            <PriceWrapper>
              <Price>{price}</Price>
              <Remaining>Осталось {remaining} дней</Remaining>
            </PriceWrapper>
          </CompanyWrapper>
          <Text>{text}</Text>
          <Button>Узнать подробности</Button>
        </Content>
      </Layout>
    );
  }
}

export default Offer;
