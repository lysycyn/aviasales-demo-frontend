import React, { Component } from 'react';
import styled from 'styled-components';
import Filter from './Filter';
import filter1 from '../../assets/filter1.svg';
import filter2 from '../../assets/filter2.svg';
import filter3 from '../../assets/filter3.svg';
import filter4 from '../../assets/filter4.svg';
import filter5 from '../../assets/filter5.svg';
import filter6 from '../../assets/filter6.svg';

const Wrapper = styled.div`
  padding-bottom: 20px;
`;

class Filters extends Component {
  render() {
    return (
      <Wrapper>
        <div className="container">
          <div className="row">
            <div className="col-xs-4 col-sm-2">
              <Filter src={filter1} title="Куда угодно" />
            </div>
            <div className="col-xs-4 col-sm-2">
              <Filter src={filter2} title="Солнце и море" />
            </div>
            <div className="col-xs-4 col-sm-2">
              <Filter src={filter3} title="Шопинг, город" />
            </div>
            <div className="col-xs-4 col-sm-2">
              <Filter src={filter4} title="Культура и история" />
            </div>
            <div className="col-xs-4 col-sm-2">
              <Filter src={filter5} title="Ночная жизнь" />
            </div>
            <div className="col-xs-4 col-sm-2">
              <Filter src={filter6} title="Отдых и семья" />
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Filters;
