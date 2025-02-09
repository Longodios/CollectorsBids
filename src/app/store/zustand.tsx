import {create} from 'zustand';
import { createClient } from '@supabase/supabase-js'



const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)



 export const  useAPIFunctions = create((set) => ({

  
    users : [{
        email : "",
        password: ""
    }],

    getUsers : async() => {
       
        const {data , error } = await supabase.from("users").select();
        console.log(data)
        if(error){
            console.log(error.message);

        } else {
            set({users : data});
            
        }
    },

    postUsers : async(email: string, password: string) => {
        
        const {data , error} = await supabase.from("users").insert([email , password])
        console.log(data)
        if(error){
            console.log(error.message);
        } else {
            set({users : data});
        }
    }
}));


