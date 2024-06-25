import NavBar from '../components/shared/NavBar';
import TheHeader from '../components/home/TheHeader';

import { useState } from 'react';
import CreateInvoice from '../components/CreateInvoice';

export default function Home() {
   const [showForm, setForm] = useState(false);

   return (
      <div className="lg:flex bg-black-4 min-h-screen">
         <NavBar />
         <div className="pt-9 text-white lg:mx-auto container">
            <TheHeader
               showForm={() => {
                  setForm(true);
               }}
            />
            <main>
               <CreateInvoice />
            </main>
         </div>
      </div>
   );
}
