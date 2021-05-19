import React, { useState } from 'react';
import axios from 'axios';
import Ele2 from '../Images/ele2.svg';

function ElectronicsTwo(props) {
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
      <form
        style={{ textAlign: 'center', maxWidth: '400px' }}
        onSubmit={handleSubmit}
        className='whatever'
      >
        <div>
          <img
            src={Ele2}
            alt='Ele2'
            style={{ maxWidth: '100px', maxHeight: '100px' }}
          />
        </div>
        <input
          type='checkbox'
          id='E2.1'
          name='E2.1'
          value='6'
          onChange={handleChange}
        />
        <label for='E2.1'>&nbsp; Electronics2.1 (E2.1) </label> <br />
        <input
          type='checkbox'
          id='E2.2'
          name='E2.2'
          value='7'
          onChange={handleChange}
        />
        <label for='E2.1'>&nbsp; Electronics2.2 (E2.2) </label>
        <br />
        <input
          type='checkbox'
          id='E2.3'
          name='E2.3'
          value='8'
          onChange={handleChange}
        />
        <label for='E2.3'>&nbsp; Electronics2.3 (E2.3)</label>
        <br />
        <input
          type='checkbox'
          id='E2.4'
          name='E2.4'
          value='9'
          onChange={handleChange}
        />
        <label for='E2.4'>&nbsp; Electronics2.4 (E2.4)</label>
        <br />
        <input
          type='checkbox'
          id='E2.5'
          name='E2.5'
          value='10'
          onChange={handleChange}
        />
        <label for='E2.5'>&nbsp; Electronics2.5 (E2.5)</label>
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

export default ElectronicsTwo;
