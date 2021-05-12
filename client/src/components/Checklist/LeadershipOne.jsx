import React, { useReducer, useState } from 'react';

const formReducer = (state, event) => {
    return {
        ...state, [event.name]: event.value}
    }



function LeadershipOne() {
const [formData, setFormData] = useReducer(formReducer, {} );
const [submitting, setSubmitting] = useState(false);

const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout( () => {
        setSubmitting(false);
    },3000)
    }

const handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    setFormData({
        name: event.target.name,
        value: isCheckbox ? event.target.checked : event.target.value,
    });
}


    return (
        <div> 
                {submitting && <div>Submitting Form...</div>} You are submitting the following:
                <ul>
                    {Object.entries(formData).map(([name,value]) => (
                        <li key={name}><strong>{name}</strong>: {value.toString()} </li>
                    ))}
                </ul>

                <form onSubmit = {handleSubmit}>
                
                <input type="checkbox" id="L1.1" name="L1.1" value="1" onChange={handleChange}/>
                <label for="L1.1"> Requirement Leadership1.1 (L1.1) </label> <br/>
            
                <input type="checkbox" id="L1.2" name="L1.2" value="1" onChange={handleChange}/>
                <label for="L1.1">Requirement Leadership1.2 (L1.2) </label><br/>
                
                <input type="checkbox" id="L1.3" name="L1.3" value="0" onChange={handleChange}/>
                <label for="L1.3"> Requirement Leadership1.3 (L1.3)</label><br/>

                <input type="checkbox" id="L1.4" name="L1.4" value="0" onChange={handleChange}/>
                <label for="L1.4">Requirement Leadership1.4 (L1.4)</label><br/>

                <input type="checkbox" id="L1.5" name="L1.5" value="0" onChange={handleChange}/>
                <label for="L1.5">Requirement Leadership1.5 (L1.5)</label><br/>
                
            </form>

            

            <button type="submit">Update this student's requirements in the database</button>
            <button>Send Leadership 1 badge to student</button>

        </div>
    )};


export default LeadershipOne;































































































































































































































