import { createContext, useState, ReactNode, useContext } from "react"
import M from "materialize-css";

export const ManagementContext = createContext({})

export function ManagementContextProvider({ children }) {
  const [employeeList, setEmployeeList] = useState([])
  const [deleteEmployeeId, setDeleteEmployeeId] = useState(null)
    

    function getEmployees() {
      //api.get('/nutemployee', { headers: {"authorization": 'Bearer 3f755b8e95acf134c6448d8661672101ab0d5bb920b5456ea4ea222ea9bdcca3'} })
    //  .then(response => {
    //    console.log(response);
    //  })
    //  .catch(error => {
    //    console.log(error);
    //  })

    const response = [
      {
        name: 'Alvin',
        email: 'AlvinEclair@gmail.com',
        start_date: '19/11/1997',
        team: 'Front-End Developer'
      },
      {
        name: 'Kelvin',
        email: 'Kelvin@gmail.com',
        start_date: '11/02/1997',
        team: 'Front-End Developer'
      },
      {
        name: 'Jose',
        email: 'JoseEclair@gmail.com',
        start_date: '02/03/1997',
        team: 'Front-End Developer'
      },
      {
        name: 'Afonso',
        email: 'AfonsoEclair@gmail.com',
        start_date: '01/09/1997',
        team: 'Front-End Developer'
      },
      {
        name: 'Alvin',
        email: 'AlvinEclair@gmail.com',
        start_date: '19/11/1997',
        team: 'Front-End Developer'
      },
    ]

    setEmployeeList(response)
    }

    function deleteEmployees() {
    //api.delete(`/nutemployee/&{deleteEmployeeId}`, { headers: {"authorization": 'Bearer 3f755b8e95acf134c6448d8661672101ab0d5bb920b5456ea4ea222ea9bdcca3'} })
    //  .then(response => {
    //    console.log(response);
    //    M.toast({html: 'Employee deleted.'})
    //  })
    //  .catch(error => {
    //    console.log(error);
    //    M.toast({html: 'Something went wrong, try later.'})
    //  })

      getEmployees()
    }

  return (
    <ManagementContext.Provider
      value={{
        getEmployees,
        employeeList,
        setDeleteEmployeeId,
        deleteEmployees
      }}
    >
      {children}
    </ManagementContext.Provider>
  )

}

export const useManagement = () => {
  return useContext(ManagementContext)
}