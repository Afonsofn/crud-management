import { createContext, useState, useContext } from "react"
import { api } from '../services/api'
import M from "materialize-css";

export const ManagementContext = createContext({})

export function ManagementContextProvider({ children }) {
  const [employeeList, setEmployeeList] = useState([])
  const [deleteEmployeeId, setDeleteEmployeeId] = useState(0)
  const [editEmployeeId, setEditEmployeeId] = useState(0)

    function getEmployees() {
      api.get('/nutemployee/')
      .then( ({ data }) => {
        setEmployeeList(Object.values(data)) // Convert to array to interact with it
      })
      .catch(_error => {
        M.toast({html: 'Ops... something went wrong, try later.'})
      })
    }

    function deleteEmployees() {
      api.delete(`/nutemployee/${deleteEmployeeId}`)
      .then(_response => {
        M.toast({html: 'Employee deleted.'})
      })
      .catch(_error => {
        M.toast({html: 'Ops... something went wrong, try later.'})
      })
      .finally(() => {
        getEmployees() // Refresh employess
      })
    }

    function createEmployees(payload) {
      api.post('/nutemployee/', payload)
      .then( (_response) => {
        M.toast({html: 'Employee created.'})
      })
      .catch(_error => {
        M.toast({html: 'Ops... something went wrong, try later.'})
      })
      .finally(() => {
        getEmployees() // Refresh employess
      })
    }

    function editEmployee(payload) {
      api.put(`/nutemployee/${editEmployeeId}`, payload)
      .then( (_response) => {
        M.toast({html: 'Employee edited.'})
      })
      .catch(_error => {
        M.toast({html: 'Ops... something went wrong, try later.'})
      })
      .finally(() => {
        getEmployees() // Refresh employess
      })
    }

    const capitalizeFirstLetter = (string) => {
      return string.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())
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
    <ManagementContext.Provider // Providing states and functions for generic component
      value={{
        getEmployees,
        setDeleteEmployeeId,
        setEditEmployeeId,
        deleteEmployees,
        createEmployees,
        editEmployee,
        capitalizeFirstLetter,
        validaEmail,
        employeeList
      }}
    >
      {children}
    </ManagementContext.Provider>
  )

}

export const useManagement = () => { // A shortcut to not declaring useContext every time
  return useContext(ManagementContext)
}