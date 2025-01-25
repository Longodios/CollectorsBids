"use client"
import Layout from '../layout';
import {useAPIFunctions} from '../store/zustand';




export default function Login() {

    const {users} = useAPIFunctions();

      function handleChange(e){
        e.preventDefault();
        const {name, value} = e.target;
        console.log(value)

        if (name === "email"){
            users.email = value;
            console.log(users.email)
        } else if (name === "password"){
            users.password = value;
            console.log(users.password)
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        const {postUsers} = useAPIFunctions();
        postUsers(users.email , users.password);
        console.log("Usuario registrado con exito");
       
    }

    return (
       
            <section className="w-full">

            <form className="flex flex-col items-center">
                <label  className="text-white text-center">Email : </label>
                <input onChange={handleChange} className="rounded-xl" type="email" name="email" value={users.email} />
                <label className="text-white text-center">Password:</label>
                <input onChange={handleChange} className="rounded-xl" type="password" name="password" value={users.password}/>
                <button onClick={handleSubmit} className="bg-green-500 w-20 p-3 ">Register</button>
            </form>

            </section>
      
       
    )
}


