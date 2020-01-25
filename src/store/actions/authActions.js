export const signIn =(credentials) =>{
    return (dispatch, getState, {getFirebase}) =>{
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type: 'LOGIN_SUCCESS'});
        }).catch((err)=>{
            dispatch({type: 'LOGIN_ERROR', err});
        });
    }
}

export const signOut = () => {//this is a function
    return (dispatch, getState, {getFirebase}) =>{
        const firebase = getFirebase();//initialize firebase
        
        firebase.auth().signOut().then(() => {
            dispatch({type:'SIGNOUT_SUCCESS'});//then we need to dispatch this from navbar
        });
    }
}

