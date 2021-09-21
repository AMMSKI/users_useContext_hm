import React, { useReducer, useState } from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'



export const UserContext = React.createContext()
export const UserConsumer = UserContext.Consumer

const UserProvider = (props) => {
  const usersArr = [
    {id:1, name: 'jimmy', Dob: '01/01/1999', email: 'jimy@jimy.com', avitar: 'https://robohash.org/honey?set=set1'},
    {id:2, name: 'bobby', Dob: '02/30/1987', email: 'boby@boby.com', avitar: 'https://robohash.org/honey?set=set2'},
    {id:3, name: 'sally', Dob: '06/13/1990', email: 'sally@sally.com', avitar: 'https://robohash.org/honey?set=set3'},
    {id:4, name: 'alan', Dob: '08/01/1979', email: 'alan@alan.com', avitar: 'https://robohash.org/honey?set=set4'},
  ]
  // const [users, setUsers] = useState(usersArr)

  const userReducer = (state, action) => {
    console.log(state)
    console.log(action)

    switch (action.type) {
      case "ADD_USER":
        return [...state, action.user]
      case "DELETE_USER":
        return state.filter((u) => u.id != action.id)
      default:
        console.log("here")
        return state
    }
  }

  const [users, dispatch] = useReducer(userReducer, usersArr)

  return (
    <UserContext.Provider value={{users, dispatch}}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider
