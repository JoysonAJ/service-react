import React from 'react';
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
function Header(props) {
    return (
        <>
           <nav>
               <h2>
                   transform-solution
               </h2>

               <main>
                   {/*<Link to={"/home"}>Home</Link>*/}
                   <HashLink to={"/#home"}>Home</HashLink>
                   <Link to={"/contact"}>Carrer site </Link>
                   <HashLink to={"/#about"}>About</HashLink>
                   <HashLink to={"/#brands"}>Brands</HashLink>
                   {/*<HashLink to={"/#services"}>Service</HashLink>*/}
                   {/*<Link to={"/"}>Home</Link>*/}
               </main>

           </nav>
        </>
    );
}

export default Header;