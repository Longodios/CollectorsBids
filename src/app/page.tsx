"use client";

import Layout from '../app/layout/layout';
import Login from '../app/components/login';
import Users from '../app/components/users';

export default function PruebaFunction() {
   

   

    return (
        
       
        <Layout>
            <section className="w-full">
                <Login />
                <Users />
            </section>
        </Layout>
            
       
    );
}