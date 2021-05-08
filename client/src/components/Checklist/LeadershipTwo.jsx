import React from 'react';

function LeadershipTwo() {
    return (
        <div> 
            <ul>
                <input type="checkbox" id="L2.1" name="L2.1" value="L2.1"/>
                <label for="L2.1"> Requirement Leadership 2.1 (L2.1) </label> <br/>
            
                <input type="checkbox" id="L2.2" name="L2.2" value="L2.2"/>
                <label for="L2.1">Requirement Leadership 2.2 (L2.2) </label><br/>
                
                <input type="checkbox" id="L2.3" name="L2.3" value="L2.3"/>
                <label for="L2.3"> Requirement Leadership 2.3 (L2.3)</label><br/>

                <input type="checkbox" id="L2.4" name="L2.4" value="L2.4"/>
                <label for="L2.4">Requirement Leadership 2.4 (L2.4)</label><br/>


                <input type="checkbox" id="L2.5" name="L2.5" value="L2.5"/>
                <label for="L2.5">Requirement Leadership 2.5 (L2.5)</label><br/>

            </ul>
            <button>Send Leadership 2 badge to student</button>
        </div>
    );
}

export default LeadershipTwo;