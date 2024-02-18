import React from 'react'
import {useDispatch} from 'react-redux'
import {logout} from '../../store/authSlice'
import authService from '../../appwrite/appwriteConfig'



function LogoutButton() {

    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout()
        .then(()=> {
            dispatch(logout())
        })
    }



  return (
    <button className='inline-block px-6 py-2 duration:200 hover:bg-blue-100 rounded-full'>Logout</button>
  )
}

export default LogoutButton