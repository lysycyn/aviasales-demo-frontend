import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 16px;
`;

const Title = styled.h3`
  padding-left: 30px;
  margin-bottom: 22px;
  background-position: left center;
  background-repeat: no-repeat;
  background-image: url(${props => props.src});
  background-size: 16px 16px;
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase;
  color: #4a4a4a;
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #4a4a4a;
  text-align: justify;
`;

const Link = styled.a`
  display: inline-block;
  margin-left: 5px;
  color: #00ace2;
`;

export default (props) => {
  const { titleIcon, title } = { ...props };
  return (
    <Wrapper>
      <Title src={titleIcon}>{title}</Title>
      <Text>
        {props.children}
        <Link href="/">подробнее</Link>
      </Text>
    </Wrapper>
  );
};
