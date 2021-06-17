import { useState } from 'react';

import { useManagement } from '../../context/managementContext'

import './style.scss';

function PeopleEdit() {

  const { editEmployee, validaEmail } = useManagement()

  const [values, setValues] = useState({
    name: "",
    team: "Mobile",
    email: "",
    start_date: "",
  })

  const handleinputChange = ({ target }) => {
    setValues({...values, [target.name]: target.value})
  }

  const submitForm = () => {
    if (validaDados(values) === true) {
      document.getElementById("msgerroedit").innerHTML="";
      editEmployee(values)
      document.getElementById("cancelButtonEdit").click()
      resetInputs()
    } else {
      document.getElementById("msgerroedit").innerHTML="<font color='red'>Wrong or incomplete data, please try again :)</font>";
    }
  }

  const validaDados = () => {
    return (
      values.name && values.name.length >= 3 && 
      values.team && values.team.length >= 2 &&
      values.email && values.email.length >= 5 &&
      values.start_date && values.start_date.length === 7 &&
      validaEmail(values.email) === true ? true : false
    )
  }

  const resetInputs = () => {
    setValues({
      name: "",
      team: "Mobile",
      email: "",
      start_date: "",
    })
  }

  return ( 
    <div id="modal-edit" className="modal modal-people-edit">
      <div className="modal-header">
        <h5>Employee Edit</h5>
      </div>

      <div className="modal-content">
      <div className="input-field">
          <input
            onChange={handleinputChange}
            value={values.name}
            type="text"
            name="name"
            required
          />
          <label htmlFor="name">Name</label>
        </div>

        <div className="input-field">
          <input
            onChange={handleinputChange}
            value={values.email}
            type="text"
            name="email"
            required
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className="input-field select">
          <select
            onChange={handleinputChange}
            value={values.team}
            className="browser-default"
            name="team"
          >
            <option value="Mobile">Mobile</option>
            <option value="FrontEnd">FrontEnd</option>
            <option value="BackEnd">BackEnd</option>
            <option value="N/A">N/A</option>
          </select>
          <label htmlFor="team">Team</label>
        </div>

        <div className="input-field select">
          <input
            onChange={handleinputChange}
            value={values.start_date}
            type="month"
            name="start_date"
            required 
          />
          <label htmlFor="start_date">Start date</label>
        </div>

        <div id="msgerroedit" className="center"></div>
      </div>

      <div className="modal-footer">
      <a href="#!" className="modal-close waves-effect red lighten-2 btn" id="cancelButtonEdit">Cancel</a>
        <a href="#!" className="waves-effect waves-teal btn" onClick={submitForm}>Register</a>
      </div>
    </div>
  );
}

export default PeopleEdit;