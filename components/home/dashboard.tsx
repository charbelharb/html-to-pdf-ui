
import React, {useEffect, useState} from 'react';
import {authenticationService} from "../../services/authentication";
import {IHtmlToPdfUserModel} from "../../interfaces/IHtmlToPdfUserModel";
import {storageKeys, storageService} from "../../services/storage";
import {router} from "next/client";

export const Dashboard = () => {
    const [token,setToken] = useState('');
    useEffect(() => {
     let usr: IHtmlToPdfUserModel = JSON.parse(localStorage.getItem(storageKeys.user))
        setToken(usr)
    },[token])

    const handleLogout = () => {
        authenticationService.logout()
        router.push('/login')
    }
   return(
       <>
           <div className='grid grid-cols-1'>
               <div className='flex items-center justify-items-center bg-white'>
                   <div>
                       Your login info are: {token}
                   </div>
               </div>
               <div>
                   <button  className='btn btn-default rounded bg-red-500 hover:bg-red-600 text-white w-1/2' onClick={handleLogout}>
                       Logout
                   </button>
               </div>
           </div>

       </>
   )
}