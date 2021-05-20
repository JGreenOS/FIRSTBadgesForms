import React, { useState } from 'react';
import axios from 'axios';
import Ele1 from '../Images/ele1.svg';

function ElectronicsOne(props) {
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
        .post('/api/form/sturequirements', {
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
      <form
        style={{ textAlign: 'center', maxWidth: '400px' }}
        onSubmit={handleSubmit}
        className='whatever'
      >
        <div>
          <h4>Electronics</h4>
        </div>
        <div>
          <img
            src={Ele1}
            alt='ele1'
            style={{ maxWidth: '100px', maxHeight: '100px' }}
          />
        </div>
        <input
          type='checkbox'
          id='E1.1'
          name='E1.1'
          value='1'
          onChange={handleChange}
        />
        <label for='E1.1'>&nbsp; Electronics1.1 (E1.1) </label> <br />
        <input
          type='checkbox'
          id='E1.2'
          name='E1.2'
          value='2'
          onChange={handleChange}
        />
        <label for='E1.1'>&nbsp; Electronics1.2 (E1.2) </label>
        <br />
        <input
          type='checkbox'
          id='E1.3'
          name='E1.3'
          value='3'
          onChange={handleChange}
        />
        <label for='E1.3'>&nbsp; Electronics1.3 (E1.3)</label>
        <br />
        <input
          type='checkbox'
          id='E1.4'
          name='E1.4'
          value='4'
          onChange={handleChange}
        />
        <label for='E1.4'>&nbsp; Electronics1.4 (E1.4)</label>
        <br />
        <input
          type='checkbox'
          id='E1.5'
          name='E1.5'
          value='5'
          onChange={handleChange}
        />
        <label for='E1.5'>&nbsp; Electronics1.5 (E1.5)</label>
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

export default ElectronicsOne;
