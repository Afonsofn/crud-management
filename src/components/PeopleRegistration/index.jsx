import { useState } from 'react';

import { useManagement } from '../../context/managementContext'

import './style.scss';

function PeopleRegistration() {

  const { createEmployees, validaEmail } = useManagement()

  const [values, setValues] = useState({
    name: "",
    date: "",
    gender: "Male",
    team: "Mobile",
    email: "",
    cpf: "",
    start_date: "",
  })

  const handleinputChange = ({ target }) => {
    setValues({...values, [target.id]: target.value})
  }  

  const submitForm = () => {
    if (validaDados(values) === true) {
      document.getElementById("msgerro").innerHTML="";
      createEmployees(values)
      document.getElementById("cancelButton").click()
      resetInputs()
    } else {
      document.getElementById("msgerro").innerHTML="<font color='red'>Wrong or incomplete data, please try again :)</font>";
    }
  }

  const validaDados = () => {
    return (
      values.name && values.name.length >= 3 && 
      values.date && values.date.length === 10 &&
      values.gender && values.gender.length >= 3 &&
      values.team && values.team.length >= 2 &&
      values.email && values.email.length >= 5 &&
      values.cpf && values.cpf.length === 11 &&
      values.start_date && values.start_date.length === 7 &&
      validaEmail(values.email) === true ? true : false
    )
  }

  const resetInputs = () => {
    setValues({
      name: "",
      date: "",
      gender: "Male",
      team: "Mobile",
      email: "",
      cpf: "",
      start_date: "",
    })
  }

  return ( 
    <div id="modal-registration" className="modal modal-people-registration">
      <div className="modal-header">
        <h5>People Registration</h5>
      </div>

      <div className="modal-content">
        <div className="input-field">
          <input
            onChange={handleinputChange}
            value={values.name}
            type="text"
            id="name"
            required
          />
          <label htmlFor="name">Name</label>
        </div>

        <div className="input-field">
          <input
            onChange={handleinputChange}
            value={values.date}
            type="date"
            id="date"
            required
          />
          <label htmlFor="date">Date</label>
        </div>

        <div className="input-field select">
          <select
            onChange={handleinputChange}
            value={values.gender}
            className="browser-default"
            name="gender"
            id="gender"
            required
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <label htmlFor="gender">Gender</label>
        </div>

        <div className="input-field select">
          <select
            onChange={handleinputChange}
            value={values.team}
            className="browser-default"
            name="team"
            id="team"
          >
            <option value="Mobile">Mobile</option>
            <option value="FrontEnd">FrontEnd</option>
            <option value="BackEnd">BackEnd</option>
            <option value="N/A">N/A</option>
          </select>
          <label htmlFor="team">Team</label>
        </div>

        <div className="input-field">
          <input
            onChange={handleinputChange}
            value={values.email}
            type="text"
            id="email"
            required
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className="input-field">
          <input
            onChange={handleinputChange}
            value={values.cpf}
            type="number"
            id="cpf"
            size="15"
            required
          />
          <label htmlFor="cpf">CPF</label>
        </div>

        <div className="input-field select">
          <input
            onChange={handleinputChange}
            value={values.start_date}
            type="month"
            id="start_date"
            required 
          />
          <label htmlFor="start_date">Start date</label>
        </div>

        <div id="msgerro" className="center"></div>
      </div>
      
      
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect red lighten-2 btn" id="cancelButton">Cancel</a>
        <a href="#!" className="waves-effect waves-teal btn" onClick={submitForm}>Register</a>
      </div>
    </div>
  );
}

export default PeopleRegistration;