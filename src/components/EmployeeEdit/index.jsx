import { useEffect } from 'react';
import M from "materialize-css";

import './style.scss';

function PeopleEdit() {

  useEffect(() => {
    M.Dropdown.init(document.querySelectorAll('.dropdown-trigger')); // Starting Dropdown
  }, [])

  return ( 
    <div id="modal-edit" className="modal modal-people-edit">
      <div className="modal-header">
        <h5>Employee Edit</h5>
      </div>

      <div className="modal-content">
        <div className="input-field">
          <input  type="text" id="name-edit" required />
          <label htmlFor="name-edit">Name</label>
        </div>

        <div className="input-field">
          <input  type="text" id="email-edit" required />
          <label htmlFor="email-edit">Email</label>
        </div>

        <div className="input-field">
          <input  type="number" id="month-edit" required />
          <label htmlFor="month-edit">Start date</label>
        </div>
        
        <div className="input-field">
          <input className='dropdown-trigger' id="team-edit" href='#' data-target='dropdown-team' />
          <label htmlFor="team-edit">Team</label>
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
        <a href="#!" className="modal-close waves-effect waves-teal btn">Confirm</a>
      </div>
    </div>
  );
}

export default PeopleEdit;