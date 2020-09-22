import React from 'react';
import { Grid, Cell } from 'react-mdl';

function Skills(props) {

  const Skill = ({ data }) => {
    const { yearStarted, name } = data;
    const numberOfYears = yearStarted ? (new Date().getFullYear()) - yearStarted : ''

    return (
      <Cell col={6}>
        <div style={{ height: '10px'}}>
          <p>{name}{numberOfYears > 0 && ' - ' + numberOfYears + ` year${numberOfYears > 1 ? 's' : ''}`}</p>
        </div>
      </Cell>
    )
  }

  return (
    <Grid>
      {props.data.map((sData) => <Skill data={sData} />)}
    </Grid>
  )
}

export default Skills;
