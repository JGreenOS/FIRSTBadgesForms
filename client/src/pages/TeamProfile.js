import React from 'react';
import { Container } from '../components/Grid';
import TeamDropDown from '../components/StudentTableItem/TeamDropDown.jsx';

const TeamProfile = (props) => {

  
  return (
    <>
      <div>
        <Container fluid>
          <br />
          <TeamDropDown />
          <br />
        </Container>
      </div>
    </>
  );
};

export default TeamProfile;
