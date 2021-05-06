import axios from "axios";



export default {
  // Gets all students for the given team number
  getTeam: function(team) {
    return axios.get("/api/team/" + team);
  },
  // Gets the requirements for the specific student
  getRequirements: function(id) {
    return axios.get("/api/form/" + id);
  },
  // Saves a new student to the database
  saveStudent: function(studentData) {
    return axios.post("/api/students", studentData);
  },
  saveRequirements: function(requirementData) {
    return axios.post("/api/requirements", requirementData);
  },
};
