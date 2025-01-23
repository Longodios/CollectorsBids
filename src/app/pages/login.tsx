import Layout from '../layout/layout';
import {useAPIFunctions} from '../back/zustand';


export default function Login() {

      function handleChange(e){
        e.preventDefault();
        const {name, value} = e.target;
        console.log(value)
    }

    function handleSubmit(e){
        const {postUsers} = useAPIFunctions();
        postUsers();
        console.log("Usuario registrado con exito");
    }

    return (
        <Layout>
            <section className="w-full">

            <form className="flex flex-col items-center">
                <label  className="text-white text-center">Email : </label>
                <input onChange={handleChange} className="rounded-xl" type="email" name="email" />
                <label className="text-white text-center">Password:</label>
                <input onChange={handleChange} className="rounded-xl" type="password" name="password"/>
                <button onClick={handleSubmit} className="bg-green-500 w-20 p-3 ">Register</button>
            </form>

            </section>
      
        </Layout>
    )
}


