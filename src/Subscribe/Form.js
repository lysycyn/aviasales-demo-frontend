import React from 'react';
import styled from 'styled-components';
import media from '../common/media';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  flex: 0 1 auto;

  @media screen and (min-width: ${media.xl}) {
    margin-top: 0;
    margin-left: 2rem;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const Form = styled.form`
  display: flex;
  flex-wrap: nowrap;
  width: fit-content;
  border-radius: 2px;
  border: 1px solid #a0b0b9;
`;

const Email = styled.input`
  color: inherit;
  padding: 8px 16px;
  margin: 0;
  box-sizing: border-box;
  border-radius: none;
`;

const Submit = styled.button`
  padding: 8px 20px;
  background: #ff8e41;
  color: #fff;
  cursor: pointer;
`;

export default () => (
  <Wrapper>
    <Form>
      <Email type="email" placeholder="Ваш email" />
      <Submit>Подписаться</Submit>
    </Form>
  </Wrapper>
);
