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

export const signUp = (newUser) =>{
    //need to store user info to user collection in firestore
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        const firebase = getFirebase();
        const firestore = getFirestore();

        //use this to generate new users
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password// will communicate with firebase, asychonise 
        ).then((resp) =>{
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0]+newUser.lastName[0]//better to store this info 
            }).then(()=>{
                dispatch({type: 'SIGNUP_SUCCESS'})
            })
        }).catch(err=>{
            dispatch({type: 'SIGNUP_ERROR', err})
            
        })
    }
}
