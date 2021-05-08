import React from 'react';

function LeadershipOne() {
    return (
        <div> 
            <ul>
                <input type="checkbox" id="L1.1" name="L1.1" value="L1.1"/>
                <label for="L1.1"> Requirement Leadership1.1 (L1.1) </label> <br/>
            
                <input type="checkbox" id="L1.2" name="L1.2" value="L1.2"/>
                <label for="L1.1">Requirement Leadership1.2 (L1.2) </label><br/>
                
                <input type="checkbox" id="L1.3" name="L1.3" value="L1.3"/>
                <label for="L1.3"> Requirement Leadership1.3 (L1.3)</label><br/>

                <input type="checkbox" id="L1.4" name="L1.4" value="L1.4"/>
                <label for="L1.4">Requirement Leadership1.4 (L1.4)</label><br/>


                <input type="checkbox" id="L1.5" name="L1.5" value="L1.5"/>
                <label for="L1.5">Requirement Leadership1.5 (L1.5)</label><br/>

            </ul>

            <button>Update this student's requirements in the database</button>
            <button>Send Leadership 1 badge to student</button>

        </div>
    );
}

export default LeadershipOne;