import NavBar from '../shared/NavBar';

export default function PageLayout({ children }) {
   return (
      <div className="lg:flex bg-black-4 min-h-screen">
         <NavBar />
         <div className="px-6 py-9 text-white lg:mx-auto lg:w-[800px] md:px-12 lg:px-6  ">
            {children}
         </div>
      </div>
   );
}
