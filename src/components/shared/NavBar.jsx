function NavBar() {
   return (
      <nav className="bg-black flex lg:flex-col justify-between pr-6 lg:pr-0 lg:pb-6 lg:h-screen z-40 fixed">
         <a>
            <img
               src="../../assets/icons/logo.svg"
               alt="Home - Invoice app"
               className="lg:w-[103px] lg:h-[103px]"
            />
         </a>

         <div className="flex lg:flex-col">
            <button
               aria-label="Toggle light mode"
               className="toggle-btn pr-5 mr-6 lg:mr-0 lg:pr-0 lg:pb-6"
            >
               <img
                  src="../../assets/icons/icon-dark.svg"
                  alt=""
                  className="lg:mx-auto"
               />
            </button>
            <div className="flex items-center lg:mx-auto lg:mt-6">
               <img
                  src="../../assets/images/person.svg"
                  alt="Person photo"
                  className="lg:w-16 lg:h-16"
               />
            </div>
         </div>
      </nav>
   );
}

export default NavBar;
