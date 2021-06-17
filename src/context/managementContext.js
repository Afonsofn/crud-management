import { createContext, useState, useContext } from "react"
import { api } from '../services/api'
import M from "materialize-css";

export const ManagementContext = createContext({})

export function ManagementContextProvider({ children }) {
  const [employeeList, setEmployeeList] = useState([])
  const [deleteEmployeeId, setDeleteEmployeeId] = useState(0)

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

  return (
    <ManagementContext.Provider // Providing states and functions for generic component
      value={{
        getEmployees,
        setDeleteEmployeeId,
        deleteEmployees,
        createEmployees,
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