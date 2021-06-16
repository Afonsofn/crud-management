import { useEffect } from 'react';
import M from "materialize-css";

import PeopleRegistration from '../../components/PeopleRegistration';
import DeleteConfirmation from '../../components/DeleteConfirmation';
import EmployeeEdit from '../../components/EmployeeEdit';

import { useManagement } from '../../context/managementContext'

import './style.scss';

function Home() {

  const { getEmployees, employeeList, setDeleteEmployeeId } = useManagement()

  useEffect(() => {
    getEmployees()
    console.log(employeeList);
    M.Modal.init(document.querySelectorAll('.modal-people-registration'))
    M.Modal.init(document.querySelectorAll('.modal-people-edit'))
    M.Modal.init(document.querySelectorAll('.modal-delete-confirmation'))
  }, [])

  const resp = employeeList

  return (
    <div className="table-container">
      <a className="waves-effect waves-light btn new-employee modal-trigger" href="#modal-registration"><i className="material-icons left">add</i>new employee</a>
      
      <table className="striped responsive-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Start Date</th>
            <th>Team</th>
          </tr>
        </thead>

        <tbody>
          { resp.length !== 0 && resp.map((employee, index) => {
            return (
              <tr>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.start_date}</td>
                <td>{employee.team}</td>

                <td className="button-td">
                  <div className="button-wrapper">
                    <a className="waves-effect waves-teal btn-small modal-trigger" href="#modal-edit">
                      <i className="material-icons ">mode_edit</i>
                    </a>

                    <a
                      className="waves-effect waves-red btn-small modal-trigger red lighten-2"
                      href="#modal-delete"
                      onClick={() => setDeleteEmployeeId(index)}
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
      {/* MODALS */}
      <PeopleRegistration />
      <DeleteConfirmation />
      <EmployeeEdit />
    </div>
  );
}

export default Home;