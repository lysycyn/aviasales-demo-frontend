import React from 'react';
import styled from 'styled-components';
import media from './../common/media';

const Offer = styled.section`
  margin-bottom: 12px;
`;

const Header = styled.div`
  background-color: #cd2027;
  padding: 12px 16px;
`;

const Content = styled.div`
  padding: 18px 8px;
  background-color: #fff;
`;

const Title = styled.h3`
  margin: 0;
  padding-right: 45px;
  background-size: 38px 38px;
  background-repeat: no-repeat;
  background-image: url(${props => props.img});
  background-position: right center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 16px;
  line-height: 38px;
  color: #fff;
`;

const Company = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Image = styled.img`
  width: 122px;
  height: 30px;
`;

const PriceInformation = styled.div`
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

const Descr = styled.p`
  font-size: 12px;
  line-height: 16px;
  margin: 0 0 45px;

  @media screen and (min-width: ${media.sm}) {
    min-height: 50px;
  }
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

export default (props) => {
  const {
    titleBg, title, companyImgSrc, price, remaining,
  } = { ...props };
  return (
    <Offer>
      <Header>
        <Title img={titleBg}>{title}</Title>
      </Header>
      <Content>
        <Company>
          <Image src={companyImgSrc} />
          <PriceInformation>
            <Price>{price}</Price>
            <Remaining>Осталось {remaining} дней</Remaining>
          </PriceInformation>
        </Company>
        <Descr>{props.children}</Descr>
        <Button>Узнать подробности</Button>
      </Content>
    </Offer>
  );
};
