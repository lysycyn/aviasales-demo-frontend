import React from 'react';
import styled from 'styled-components';

const Icon = styled.div`
  border-radius: 50%;
  width: 64px;
  height: 64px;
  margin: 0 auto;
  margin-bottom: 20px;
  background-color: #e2f8ff;
  background-image: url(${props => props.src});
  background-position: center;
  background-repeat: no-repeat;
`;

export default props => <Icon src={props.src} />;
