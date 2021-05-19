import React, { useState } from 'react';
import axios from 'axios';

import badgelogoL2 from '../Images/Leadership2Sample.png'
import './style.css';

function LeadershipTwo(props) {
  const [state, setState] = useState({
    req_ids: [],
  });
  const [submitting, setSubmitting] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    state.req_ids.forEach((req_id) => {
      axios
        .post('http://localhost:8080/api/form/sturequirements', {
          email: props.email,
          req_id: req_id,
        })
        .then((res) => {
          setAlert(true);
          setSubmitting(false);
        })
        .catch((err) => console.log(err));
    });
  };

  const handleChange = (event) => {
    const newReqId = event.target.value;
    let newReqIds = state.req_ids;
    // if indexOf is -1, item is not in the array => add to array
    if (newReqIds.indexOf(newReqId) === -1) {
      newReqIds.push(newReqId);
    } else {
      newReqIds.splice(newReqIds.indexOf(newReqId), 1);
    }
    setState({ req_ids: newReqIds });
  };

  return (
    <div>
      <img src={badgelogoL2} />
      <form
        style={{ textAlign: 'center', maxWidth: '400px' }}
        onSubmit={handleSubmit}
        className='whatever'
      >
        <input
          type='checkbox'
          id='L2.1'
          name='L2.1'
          value='16'
          onChange={handleChange}
        />
        <label for='L2.1'>&nbsp; Leadership2.1 (L2.1) </label> <br />
        <input
          type='checkbox'
          id='L2.2'
          name='L2.2'
          value='17'
          onChange={handleChange}
        />
        <label for='L2.1'>&nbsp; Leadership2.2 (L2.2) </label>
        <br />
        <input
          type='checkbox'
          id='L2.3'
          name='L2.3'
          value='18'
          onChange={handleChange}
        />
        <label for='L2.3'>&nbsp; Leadership2.3 (L2.3)</label>
        <br />
        <input
          type='checkbox'
          id='L2.4'
          name='L2.4'
          value='19'
          onChange={handleChange}
        />
        <label for='L2.4'>&nbsp; Leadership2.4 (L2.4)</label>
        <br />
        <input
          type='checkbox'
          id='L2.5'
          name='L2.5'
          value='20'
          onChange={handleChange}
        />
        <label for='L2.5'>&nbsp; Leadership2.5 (L2.5)</label>
        <br />
        <button type='submit'>Add Requirements</button>
        <span>
          <button disabled>Send Badge</button>
        </span>
        <span>
          <button onClick={props.handleReset}>Reset</button>
        </span>
        {alert && (
          <p>
            <b> Successfully Entered into Database!</b>
          </p>
        )}
      </form>
    </div>
  );
}

export default LeadershipTwo;
