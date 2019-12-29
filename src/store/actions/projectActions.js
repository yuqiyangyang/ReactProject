//actions to delete or update projects
export const createProject = (project) =>{
    return (dispatch,getState)=>{ //first call is pausing dispatch
        //make asyno call to database
        dispatch({ type: 'CREATE_PROJECT', project: project }) //done action then carrying on dispatch
    
    }
};

