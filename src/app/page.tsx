"use client";
import {useAPIFunctions} from '../app/back/zustand';
import Layout from '../app/layout/layout';
import Login from '../app/pages/login';

export default function PruebaFunction() {
    const { getUsers, users } = useAPIFunctions();

   

    return (
        
        <Layout>
            <div>
                <h1 className='text-white text-center '>Usuarios</h1>
                <button onClick={getUsers}>Correos</button>
                {users.map((user) => (
                    <ul key={user.id}>
                        <li>{user.email}</li>
                    </ul>
                ))}
            </div>
            <Login/>
            </Layout>
            
       
    );
}