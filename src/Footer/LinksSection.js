import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
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

const Links = styled.div`
  display: flex;
  flex-direction: column;
`;

export default (props) => {
  const { title, links, allLink } = { ...props.children };
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Links>{links.map(link => <Link href="/">{link}</Link>)}</Links>
      <AllLink href="#">{allLink}</AllLink>
    </Wrapper>
  );
};
