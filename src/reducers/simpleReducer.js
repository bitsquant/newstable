const initState = {
  api_data:''
}

const simple =  (state = initState, action) => {
Object.freeze(state);
 switch (action.type) {
  case 'SAVE_API_DATA_ACTION':
   return Object.assign({}, state, { api_data: action.payload });
  
  default:
   return state
 }
}


export default simple