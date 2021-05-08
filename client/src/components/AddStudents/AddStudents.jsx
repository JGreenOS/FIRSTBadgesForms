import  { useState } from "react";
import Axios from "axios";


function StudentForm () {
    const [first_name, setFN] = useState("");
    const [last_name, setLN] = useState("");
    const [email, setEmail] = useState("");
    const [team_number, setTeamNum] = useState(0);
    
    const [studentList, setStudentList] = useState([]);
    
    const saveStudent = () => {
        Axios.post("http:localhost:3001/students", {
            first_name: first_name,
            last_name: last_name,
            email: email,
            team_number: team_number,
        }).then(() => {
            setStudentList([
                ...studentList,
                {first_name: first_name,
                    last_name: last_name,
                    email:email,
                    team_number:team_number
                },
            ])
        });
};

return (
    <div>
        <label>First Name</label>
        <input type="text"
        onChange={(event) => {
            setFN(event.target.value);
        }}
        />

        <label>Last Name</label>
        <input type="text" onChange={(event) => {
            setLN(event.target.value);
        }}
        />

        <label>Student Email Address</label>
        <input type="text" onChange={(event) => {
            setEmail(event.target.value);
        }}
        />

        <label> Team Number</label>
        <input type="number" onChange={(event) => {
            setTeamNum(event.target.value);
        }}
        />
        <button onClick={saveStudent}>Save Student</button>

    </div>
)
    }

export default StudentForm; 
// saveStudent: function(studentData) {
//     return axios.post("/api/students", studentData);