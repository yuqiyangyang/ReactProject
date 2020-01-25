import React from 'react';
import {Link} from 'react-router-dom';
import SignOutLinks from './SignedOutLinks';
import SignInLinks from './SignedInLinks';
import { connect } from 'react-redux'


        const Navbar = () =>{
            return(
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                <Link to='/' className="brand-logo">Mario Plan</Link>
                <SignInLinks/>
                <SignOutLinks/>
            </div>
            </nav>
            )
        }

        const mapStateToProps = (state) =>{
            return{

            }
        }

export default connect(mapStateToProps) (Navbar);