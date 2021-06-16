import { useManagement } from '../../context/managementContext'

import './style.scss';

function DeleteConfirmation() {

  const { deleteEmployees } = useManagement()

  return (
    <div id="modal-delete" className="modal modal-delete-confirmation">
      <div className="modal-content center">
        <h5>Are you sure you want to delete ??</h5>
      </div>
      
      <div className="modal-footer">
        <a
          href="#!"
          className="modal-close waves-effect waves-light btn-flat grey"
        >
          Cancel
        </a>
        <a
          href="#!"
          className="modal-close waves-effect waves-red btn-flat red lighten-2"
          onClick={() => deleteEmployees()}
        >
          Delete
        </a>
      </div>
    </div>
  );
}

export default DeleteConfirmation;


