import {create} from 'zustand';
import { createClient } from '@supabase/supabase-js';



const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

 const supabase = createClient(supabaseUrl, supabaseAnonKey);

 export const useAPIFunctions = create((set) => ({

    users : [],

    getUsers : async() => {
       
        const {data , error } = await supabase.from("users").select();
        console.log(data)
        if(error){
            console.log(error.message);

        } else {
            set({users : data});
            
        }
    },

    postUsers : async() => {
        const {data , error} = await supabase.from("users").insert([])
    }
}));


