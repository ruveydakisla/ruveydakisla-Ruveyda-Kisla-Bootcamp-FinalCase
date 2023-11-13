import React from "react";
import { Link, Router,Route } from "react-router-dom";

const Navbar=()=>{
    return(
        <div>
            <Router>
                <nav className="nav">
                    <ul>
                        <Link to='/SignIn'>
                            <li>
                                SignIn
                            </li>
                        </Link>
                        <Link to='/SignUp'>
                            <li>
                                SignUp
                            </li>
                        </Link>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/SignIn' element={<SignIn/>}/>
                    
                </Routes>
            </Router>
        </div>
    )
}