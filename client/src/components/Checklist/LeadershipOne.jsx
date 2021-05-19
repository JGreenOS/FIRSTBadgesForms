import React, { useState } from 'react';
import axios from 'axios';
import './style.css';
import badgelogoL1 from '../Images/Leadership1Sample.png';

function LeadershipOne(props) {
  const [state, setState] = useState({
    req_ids: [],
  });
  const [submitting, setSubmitting] = useState(false);

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
          console.log(res);
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
      <h4 className='email-prop'>
        <b>Student Email: {props.email}</b>
      </h4>
      <form
        style={{ textAlign: 'center', maxWidth: '400px' }}
        onSubmit={handleSubmit}
      >
        <div>
          <h4>Leadership</h4>
          <img src={badgelogoL1}/>
        </div>
        <input
          type='checkbox'
          id='L1.1'
          name='L1.1'
          value='11'
          onChange={handleChange}
        />
        <label for='L1.1'>&nbsp; Leadership1.1 (L1.1) </label> <br />
        <input
          type='checkbox'
          id='L1.2'
          name='L1.2'
          value='12'
          onChange={handleChange}
        />
        <label for='L1.1'>&nbsp; Leadership1.2 (L1.2) </label>
        <br />
        <input
          type='checkbox'
          id='L1.3'
          name='L1.3'
          value='13'
          onChange={handleChange}
        />
        <label for='L1.3'>&nbsp; Leadership1.3 (L1.3)</label>
        <br />
        <input
          type='checkbox'
          id='L1.4'
          name='L1.4'
          value='14'
          onChange={handleChange}
        />
        <label for='L1.4'>&nbsp; Leadership1.4 (L1.4)</label>
        <br />
        <input
          type='checkbox'
          id='L1.5'
          name='L1.5'
          value='15'
          onChange={handleChange}
        />
        <label for='L1.5'>&nbsp; Leadership1.5 (L1.5)</label>
        <br />
        <button type='submit'>Update Leadership 1</button>
        <span>
          {' '}
          <button disabled>Send Badge</button>
        </span>
      </form>
    </div>
  );
}

export default LeadershipOne;
