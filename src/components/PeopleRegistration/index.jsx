import { useEffect } from 'react';
import M from "materialize-css";

import './style.scss';

function PeopleRegistration() {

  useEffect(() => {
    M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'));
    M.Datepicker.init(document.querySelectorAll('.datepicker'));
  }, [])

  return ( 
    <div id="modal-registration" className="modal modal-people-registration">
      <div className="modal-header">
        <h5>People Registration</h5>
      </div>

      <div className="modal-content">
        <div className="input-field">
          <input  type="text" id="name" required />
          <label htmlFor="name">Name</label>
        </div>

        <div className="input-field">
          <input type="text" className="datepicker" id="date" required />
          <label htmlFor="date">Date</label>
        </div>

        <div className="input-field">
          <input className='dropdown-trigger' id="gender" href='#' data-target='dropdown1' required />
          <label htmlFor="gender">Gender</label>
        </div>
        <ul id='dropdown1' className='dropdown-content'>
          <li><a href="#!">Male</a></li>
          <li><a href="#!">Female</a></li>
          <li><a href="#!">Other</a></li>
        </ul>

        <div className="input-field">
          <input  type="text" id="email" required />
          <label htmlFor="email">Email</label>
        </div>

        <div className="input-field">
          <input  type="number" id="cpf" required />
          <label htmlFor="cpf">CPF</label>
        </div>

        <div className="input-field">
          <input  type="number" id="month" required />
          <label htmlFor="month">Start date</label>
        </div>

        <div className="input-field">
          <input className='dropdown-trigger' id="team" href='#' data-target='dropdown-team' />
          <label htmlFor="team">Team</label>
        </div>
        <ul id='dropdown-team' className='dropdown-content'>
          <li><a href="#!">Mobile</a></li>
          <li><a href="#!">FrontEnd</a></li>
          <li><a href="#!">BackEnd</a></li>
          <li><a href="#!">N/A</a></li>
        </ul>
      </div>
      
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect red lighten-2 btn">Cancel</a>
        <a href="#!" className="modal-close waves-effect waves-teal btn">Register</a>
      </div>
    </div>
  );
}

export default PeopleRegistration;