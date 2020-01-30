import React from 'react';
import {NavLink} from 'react-router-dom';
//we wanna dispatch action creator here to signout
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) =>{//this is a funcitonal component and need to take the props in
    return (
        <div>
          <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">
              {props.profile.initials}
            </NavLink></li>
          </ul>
        </div>
      )
    }


const mapDispatchToProps = (dispatch) =>{
    return{
        signOut: () => dispatch(signOut())//we imported signOut()
    }
}
export default connect(null, mapDispatchToProps)(SignedInLinks);