import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action){
  switch (action.type){
    case FETCH_POSTS:
      // return _.mapKeys(action.payload.data,'id');
      const posts = _.mapKeys(action.payload.data,'_id');
      return Object.assign( {},state, posts);
    case FETCH_POST:
      // const post = action.payload.data;
      return Object.assign( {},state,{[action.payload.data._id]:action.payload.data} )
    case DELETE_POST:
      return _.omit(state,action.payload);
    default:
      return state;
  }
}
