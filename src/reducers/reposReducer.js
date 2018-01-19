import { FETCH_REPOS_SUCCESS} from '../actions';

export default function(state =[],action) {
  switch(action.type) {
    case FETCH_REPOS_SUCCESS:
      return action.data 
    default:
      return state
  }
      
}