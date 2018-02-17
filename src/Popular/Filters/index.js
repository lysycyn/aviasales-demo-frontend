import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Filter from './Filter';
import anywhere from './anywhere.svg';
import sun from './sun.svg';
import shop from './shop.svg';
import culture from './culture.svg';
import nightlife from './nightlife.svg';
import children from './children.svg';

const Filters = styled.div`
  padding-bottom: 20px;
`;

const filters = [
  {
    img: anywhere,
    title: 'Куда угодно',
  },
  {
    img: sun,
    title: 'Солнце и море',
  },
  {
    img: shop,
    title: 'Шопинг, город',
  },
  {
    img: culture,
    title: 'Культура и история',
  },
  {
    img: nightlife,
    title: 'Ночная жизнь',
  },
  {
    img: children,
    title: 'Отдых и семья',
  },
];

export default () => (
  <Filters>
    <Grid>
      <Row>
        {filters.map(filter => (
          <Col xs={4} sm={2}>
            <Filter>{filter}</Filter>
          </Col>
        ))}
      </Row>
    </Grid>
  </Filters>
);
