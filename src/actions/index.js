export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED'
export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED'
export const DECREMENT = 'counter/DECREMENT'
export const FETCH_REPOS = 'github/repos';
export const FETCH_REPOS_SUCCESS = 'github/repos/success/';
export const FETCH_REPOS_FAILURE = 'github/repos/failure';

export const fetchRepos = (user) => {
  return (dispatch) => {
    fetch(`https://api.github.com/users/${user}/repos`).then((data) => {
      return data.json();
    }).then((data) =>{
      try{
        console.log(data);
        dispatch(fetchReposSuccess(data))
      } catch(error) {
        dispatch(fetchReposFailure(error))
      }
      
    }).catch((error)=> {
      dispatch(fetchReposFailure(error))
    })
  }
}
export const fetchReposSuccess = (data) =>{
  return { type: FETCH_REPOS_SUCCESS, data }
}
export const fetchReposFailure = (data) => {
  return { type: FETCH_REPOS_FAILURE, data }
}
export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    dispatch({
      type: INCREMENT
    })
  }
}

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      })
    }, 3000)
  }
}

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    dispatch({
      type: DECREMENT
    })
  }
}

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      })
    }, 3000)
  }
}