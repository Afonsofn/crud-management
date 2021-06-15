import DeleteConfirmation from '../../components/DeleteConfirmation';
import { useEffect } from 'react';
import M from "materialize-css";
import './style.scss';

function Home() {

  useEffect(() => {
    M.Modal.init(document.querySelectorAll('.modal-delete-confirmation'))
  }, [])

  return (
    <div className="table-container">
      <a class="waves-effect waves-light btn new-employee" ><i class="material-icons left">add</i>new employee</a>
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
          <tr>
            <td>Alvin</td>
            <td>AlvinEclair@gmail.com</td>
            <td>19/11/1997</td>
            <td>Front-End Developer</td> 
            <td className="button-td">
              <div className="button-wrapper">
                <a class="waves-effect waves-light btn-small">
                  <i class="material-icons ">mode_edit</i>
                </a>
                <a class="waves-effect waves-light btn-small red modal-trigger lighten-2" href="#modal-delete">
                  <i class="material-icons">clear</i>
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <DeleteConfirmation />
    </div>
  );
}

export default Home;