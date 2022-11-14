import React from 'react';

import './ActivityFilter.css';

const ActivityFilter = (props) => {

const filterYearHandler = (event) => {

   props.onChangeFilter(event.target.value);
}

  return (
    <div className='activity-filter'>
      <div className='activity-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterYearHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ActivityFilter;
