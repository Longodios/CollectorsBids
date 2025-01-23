import Layout from '../layout/layout';
import {useAPIFunctions} from '../back/zustand';
import React from "react"



export default function Users(){

    const {users , getUsers} = useAPIFunctions();

    return(
        <div>
        <h1 className='text-white text-center '>Usuarios</h1>
        <button className="bg-lime-500" onClick={getUsers}>Correos</button>
        {users.map((user) => (
            <ul>
                <li key={user.id}>{user.email}</li>
            </ul>
        ))}
    </div> 
    )
}