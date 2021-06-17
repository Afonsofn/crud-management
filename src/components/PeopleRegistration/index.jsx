import { useState } from 'react';

import { useManagement } from '../../context/managementContext'

import './style.scss';

function PeopleRegistration() {

  const { createEmployees } = useManagement()

  const [values, setValues] = useState({
    name: "",
    date: "",
    gender: "",
    team: "",
    email: "",
    cpf: "",
    month: "",
  })

  const handleinputChange = ({ target }) => {
    console.log(target.value.length);
    setValues({...values, [target.id]: target.value})
  }  

  const sumbmitForm = () => {
    if (validaDados(values) === true) {
      document.getElementById("msgerro").innerHTML="";
      createEmployees(values)
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
      values.month && values.month.length === 7 &&
      validaEmail(values.email) === true ? true : false
    )
  }

  const validaEmail = (email) => {
    const usuario = email.substring(0, email.indexOf("@"));
    const dominio = email.substring(email.indexOf("@")+ 1, email.length);

    if (
      (usuario.length >=1) &&
      (dominio.length >=3) &&
      (usuario.search("@")===-1) &&
      (dominio.search("@")===-1) &&
      (usuario.search(" ")===-1) &&
      (dominio.search(" ")===-1) &&
      (dominio.search(".")!==-1) &&
      (dominio.indexOf(".") >=1)&&
      (dominio.lastIndexOf(".") < dominio.length - 1)) {
      return true
    }
    else{
      return false
    }
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
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
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
            <option value="male">Mobile</option>
            <option value="female">FrontEnd</option>
            <option value="other">BackEnd</option>
            <option value="other">N/A</option>
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
            value={values.month}
            type="month"
            id="month"
            required 
          />
          <label htmlFor="month">Start date</label>
        </div>
        <div id="msgerro" className="center"></div>
      </div>
      
      
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect red lighten-2  btn">Cancel</a>
        <a href="#!" className="waves-effect waves-teal btn" onClick={sumbmitForm}>Register</a>
      </div>
    </div>
  );
}

export default PeopleRegistration;