import React from 'react';
import {NavLink} from 'react-router-dom';
//we wanna dispatch action creator here to signout
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) =>{//this is a funcitonal component and need to take the props in
    return(
        <ul className="right">
            <li> <NavLink to='/createproject'>New Projects </NavLink></li>
            <li> <a onClick={props.signOut}>Log Out > </a> </li>
            <li> <NavLink to='/' className='btn btn-floating pink lighten-1'>NN </NavLink></li>
         </ul>
    )
}


const mapDispatchToProps = (dispatch) =>{
    return{
        signOut: () => dispatch(signOut())//we imported signOut()
    }
}
export default connect(null, mapDispatchToProps)(SignedInLinks);