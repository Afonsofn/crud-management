import { useEffect } from 'react';
import M from "materialize-css";

import PeopleRegistration from '../../components/PeopleRegistration';
import DeleteConfirmation from '../../components/DeleteConfirmation';
import EmployeeEdit from '../../components/EmployeeEdit';

import { useManagement } from '../../context/managementContext'

import './style.scss';

function Home() {

  const { getEmployees, employeeList, setDeleteEmployeeId, setEditEmployeeId, capitalizeFirstLetter } = useManagement()

  useEffect(() => {
    getEmployees()
    M.updateTextFields();
    M.Modal.init(document.querySelectorAll('.modal-people-registration'))
    M.Modal.init(document.querySelectorAll('.modal-people-edit'))
    M.Modal.init(document.querySelectorAll('.modal-delete-confirmation'))
  }, [])

  return (
    <div className="table-container">
      <a className="waves-effect waves-light btn new-employee modal-trigger" href="#modal-registration"><i className="material-icons left">add</i>new employee</a>
      
      <table className="striped responsive-table hide-on-med-and-down"> {/* Shows on larges screens */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Start Date</th>
            <th>Team</th>
          </tr>
        </thead>

        <tbody>
          { employeeList.length !== 0 && employeeList.map((employee, index) => {  // If employeeList has more than zero items, show this..
            return (
              <tr key={index}>
                <td>{capitalizeFirstLetter(employee.name)}</td>
                <td>{employee.email}</td>
                <td>{employee.start_date}</td>
                <td>{employee.team}</td>

                <td className="button-td">
                  <div className="button-wrapper">
                  <a
                    className="waves-effect waves-teal btn-small modal-trigger"
                    href="#modal-edit"
                    onClick={() => setEditEmployeeId(employee._id)}
                  >
                    <i className="material-icons ">mode_edit</i>
                  </a>

                    <a
                      className="waves-effect waves-red btn-small modal-trigger red lighten-2"
                      href="#modal-delete"
                      onClick={() => setDeleteEmployeeId(employee._id)}
                    >
                      <i className="material-icons">clear</i>
                    </a>
                  </div>
                </td>
              </tr>
            )
          }) }
        </tbody>
      </table>
      <div className="cards-wrapper hide-on-large-only"> {/* Shows on small screens */}
        { employeeList.length !== 0 && employeeList.map((employee, index) => {  // If employeeList has more than zero items, show this..
          return (
          <div className="card" key={employee._id}>
            <div className="card-content">
              <div className="info-wrapper">
                <div className="input-field">
                  <input disabled value={capitalizeFirstLetter(employee.name)} type="text" id={`${employee._id}-name`} required />
                  <label className="active" htmlFor={`${employee._id}-name`}>Name</label>
                </div>

                <div className="input-field">
                  <input disabled value={employee.email} type="text" id={`${employee._id}-email`} required />
                  <label className="active" htmlFor={`${employee._id}-email`}>Email</label>
                </div>

                <div className="input-field">
                  <input disabled value={employee.start_date} type="text" id={`${employee._id}-month`} required />
                  <label className="active" htmlFor={`${employee._id}-month`}>Start Date</label>
                </div>

                <div className="input-field">
                  <input disabled value={employee.team} type="text" id={`${employee._id}-team`} required />
                  <label className="active" htmlFor={`${employee._id}-team`}>Team</label>
                </div>
              </div>
              
              <div className="divider"></div>
              
              <div className="button-wrapper">
                <a
                  className="waves-effect waves-teal btn-small modal-trigger"
                  href="#modal-edit"
                  onClick={() => setEditEmployeeId(employee._id)}
                >
                  <i className="material-icons ">mode_edit</i>
                </a>

                <a
                  className="waves-effect waves-red btn-small modal-trigger red lighten-2"
                  href="#modal-delete"
                  onClick={() => setDeleteEmployeeId(employee._id)}
                  >
                  <i className="material-icons">clear</i>
                </a>
              </div>
            </div>
          </div>
        )
        }) }
      </div>
      {/* MODALS */}
      <PeopleRegistration />
      <DeleteConfirmation />
      <EmployeeEdit />
    </div>
  );
}

export default Home;